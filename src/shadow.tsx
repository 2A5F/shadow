import { defineComponent, h, ref, Teleport, onBeforeMount, onMounted, computed, reactive } from 'vue'
import type { App, VNode } from 'vue'

type GShadowRoot = typeof global.ShadowRoot.prototype

export function makeShadow(el: Element) {
    return makeShadowRaw(el, el.childNodes)
}
export function makeShadowRaw(rootEl: Element, childNodes?: Iterable<Node>) {
    try {
        const oldroot = rootEl.shadowRoot
        if (oldroot != null) {
            console.error('[shadow] Attach shadow multiple times', rootEl, childNodes, oldroot)
            return
        } else {
            const shadow_root = rootEl.attachShadow({ mode: 'open' })
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
            abstract: {
                type: Boolean,
                default: false,
            },
            tag: {
                type: String,
                default: 'div',
            },
        },
        setup(props, { slots, expose }) {
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
                if (abstract.value) {
                    if (teleport_el.value!.parentElement!.shadowRoot) {
                        shadow_root.value = teleport_el.value!.parentElement!.shadowRoot
                    } else {
                        shadow_root.value = makeShadowRaw(teleport_el.value!.parentElement!)
                    }
                } else {
                    shadow_root.value = makeShadowRaw(el.value!)
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
            makeShadow(el)
        },
    })
}

export { ShadowRoot as shadow_root, ShadowStyle as shadow_style }
export default { ShadowRoot, ShadowStyle, shadow_root: ShadowRoot, shadow_style: ShadowStyle, install }
