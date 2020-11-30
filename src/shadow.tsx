import { defineComponent, h, ref, onBeforeMount, onMounted } from 'vue'
import type { App, VNode } from 'vue'

export function makeShadow(el: Element) {
    return makeShadowRaw(el, el.childNodes)
}
export function makeShadowRaw(rootEl: Element, childNodes: NodeList) {
    try {
        const fragment = document.createDocumentFragment()
        for (const node of childNodes) {
            fragment.appendChild(node)
        }

        const oldroot = rootEl.shadowRoot
        if (oldroot != null) {
            console.error('[shadow] Attach shadow multiple times', rootEl, childNodes, oldroot)
            return
        } else {
            const shadowroot = rootEl.attachShadow({ mode: 'open' })
            shadowroot.appendChild(fragment)
            return shadowroot
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

export const ShadowRoot = asInstall(defineComponent({
    props: {
        abstract: {
            type: Boolean,
            default: false
        },
        static: {
            type: Boolean,
            default: false,
        },
        tag: {
            type: String,
            default: 'div',
        },
        slotTag: {
            type: String,
            default: 'div',
        },
        slotClass: {
            type: String,
        },
        slotId: {
            type: String
        }
    },
    setup(props, { slots }) {
        const abstract = ref(false)
        const static_ = ref(false)

        const el = ref<HTMLElement>()

        onBeforeMount(() => {
            abstract.value = props.abstract
            static_.value = props.static
        })

        onMounted(() => {
            if (abstract.value) {
                makeShadowRaw(el.value!.parentElement!, el.value!.childNodes)
            } else {
                makeShadow(el.value!)
            }
        })

        return (): VNode => <props.tag ref={el}>{[
            static_.value ? slots.default!() : <props.slotTag id={props.slotId} class={props.slotClass}>
                {[slots.default!()]}
            </props.slotTag>
        ]}</props.tag>
    },
    install,
}))

function asInstall<T>(obj: T): T & { install: typeof install } {
    return obj as any
}

export function install(app: App) {
    app.component('shadow-root', ShadowRoot)

    app.directive('shadow', {
        beforeMount(el: HTMLElement) {
            makeShadow(el)
        }
    })
}

export { ShadowRoot as shadow_root }
export default { ShadowRoot, shadow_root: ShadowRoot, install }