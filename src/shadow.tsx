import { defineComponent, h, ref, Teleport, onBeforeMount, onMounted, computed, reactive, PropType, watch } from 'vue'
import type { App, VNode } from 'vue'

type GShadowRoot = typeof global.ShadowRoot.prototype

export interface ShadowOption {
    mode?: 'open' | 'closed'
    delegatesFocus?: boolean
}

export function makeShadow(el: Element, option?: ShadowOption) {
    return makeShadowRaw(el, el.childNodes, option)
}
export function makeShadowRaw(rootEl: Element, childNodes?: Iterable<Node>, option?: ShadowOption): ShadowRoot | undefined
export function makeShadowRaw(rootEl: Element, childNodes?: Iterable<Node>, { mode = 'open', delegatesFocus = false }: ShadowOption = { mode: 'open' }) {
    try {
        const oldroot = rootEl.shadowRoot
        if (oldroot != null) {
            console.error('[shadow] Attach shadow multiple times', rootEl, childNodes, oldroot)
            return
        } else {
            const shadow_root = rootEl.attachShadow({ mode, delegatesFocus })
            if (childNodes) putDomIntoShadow(shadow_root, childNodes)
            return shadow_root
        }
    } catch (e) {
        console.error('[shadow] make shadow-root failed', rootEl, childNodes)
        console.error(e)
    }
}

// function removeShadow(rootEl: Element): Element {
//     const newroot = rootEl.cloneNode() as Element
//     while (rootEl.hasChildNodes()) {
//         newroot.appendChild(rootEl.firstChild!)
//     }
//     rootEl.parentElement!.replaceChild(newroot, rootEl)
//     console.log('removeShadow', newroot)
//     return newroot
// }

function putDomIntoShadow(shadow_root: GShadowRoot, childNodes: Iterable<Node>) {
    const fragment = document.createDocumentFragment()
    for (const node of childNodes) {
        fragment.appendChild(node)
    }
    shadow_root.appendChild(fragment)
}

const virtual_root = document.createDocumentFragment()

export const ShadowStyle = defineComponent({
    props: {
        media: String,
        nonce: String,
    },
    setup(props, { slots }) {
        return (): VNode => (
            <style media={props.media} nonce={props.nonce}>
                {slots.default?.()}
            </style>
        )
    },
})

export interface ShadowRootExpose {
    shadow_root?: GShadowRoot
}

export const ShadowRoot = withType<{
    install: typeof install
    Style: typeof ShadowStyle
}>()(
    defineComponent({
        props: {
            mode: {
                type: String as PropType<'open' | 'closed'>,
                default: 'open',
            },
            delegatesFocus: {
                type: Boolean,
                default: false,
            },
            abstract: {
                type: Boolean,
                default: false,
            },
            tag: {
                type: String,
                default: 'div',
            },
            adoptedStyleSheets: {
                type: Array as PropType<CSSStyleSheet[]>,
            },
        },
        emits: ['error'],
        setup(props, { slots, expose, emit }) {
            const abstract = ref(false)

            const el = ref<HTMLElement>()
            const teleport_el = ref<HTMLElement>()
            const shadow_root = ref<GShadowRoot>()

            const teleport_target = computed(() => shadow_root.value ?? virtual_root)

            const ex: ShadowRootExpose = reactive({
                shadow_root,
            })
            expose(ex)

            onBeforeMount(() => {
                abstract.value = props.abstract
            })

            onMounted(() => {
                try {
                    if (abstract.value) {
                        if (teleport_el.value!.parentElement!.shadowRoot) {
                            shadow_root.value = teleport_el.value!.parentElement!.shadowRoot
                        } else {
                            shadow_root.value = makeShadowRaw(teleport_el.value!.parentElement!, void 0, {
                                mode: props.mode,
                                delegatesFocus: props.delegatesFocus,
                            })
                        }
                    } else {
                        shadow_root.value = makeShadowRaw(el.value!, void 0, { mode: props.mode, delegatesFocus: props.delegatesFocus })
                    }
                    shadow_root.value?.styleSheets
                } catch (e) {
                    console.error(e)
                    emit('error', e)
                }
            })

            watch([shadow_root, () => props.adoptedStyleSheets], ([shadow_root, adoptedStyleSheets]) => {
                if (!shadow_root || !adoptedStyleSheets) return
                try {
                    ;(shadow_root as any).adoptedStyleSheets = adoptedStyleSheets
                } catch (e) {
                    console.error(e)
                    emit('error', e)
                }
            })

            return (): VNode => {
                const child_part = (
                    <Teleport ref={teleport_el} to={teleport_target.value}>
                        {[slots.default?.()]}
                    </Teleport>
                )
                if (abstract.value) return child_part
                return <props.tag ref={el}>{child_part}</props.tag>
            }
        },
        install,
        Style: ShadowStyle,
    })
)

function withType<W>(): <T>(obj: T) => T & W {
    return obj => obj as any
}

export function install(app: App) {
    app.component('shadow-root', ShadowRoot)

    app.directive('shadow', {
        beforeMount(el: HTMLElement) {
            console.warn('[VueShadowDom] Deprecated v-shadow directive, use <shadow-root> component')
            makeShadow(el)
        },
    })
}

export { ShadowRoot as shadow_root, ShadowStyle as shadow_style }
export default { ShadowRoot, ShadowStyle, shadow_root: ShadowRoot, shadow_style: ShadowStyle, install }
