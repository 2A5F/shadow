import { defineComponent, h, ref, computed, reactive, onBeforeMount, onMounted, Teleport } from 'vue';

function makeShadow(el, option) {
    return makeShadowRaw(el, el.childNodes, option);
}
function makeShadowRaw(rootEl, childNodes, { mode = 'open', delegatesFocus = false } = { mode: 'open' }) {
    try {
        const oldroot = rootEl.shadowRoot;
        if (oldroot != null) {
            console.error('[shadow] Attach shadow multiple times', rootEl, childNodes, oldroot);
            return;
        }
        else {
            const shadow_root = rootEl.attachShadow({ mode, delegatesFocus });
            if (childNodes)
                putDomIntoShadow(shadow_root, childNodes);
            return shadow_root;
        }
    }
    catch (e) {
        console.error('[shadow] make shadow-root failed', rootEl, childNodes);
        console.error(e);
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
function putDomIntoShadow(shadow_root, childNodes) {
    const fragment = document.createDocumentFragment();
    for (const node of childNodes) {
        fragment.appendChild(node);
    }
    shadow_root.appendChild(fragment);
}
const virtual_root = document.createDocumentFragment();
const ShadowStyle = defineComponent({
    props: {
        media: String,
        nonce: String,
    },
    setup(props, { slots }) {
        return () => (h("style", { media: props.media, nonce: props.nonce }, slots.default?.()));
    },
});
const ShadowRoot = withType()(defineComponent({
    props: {
        mode: {
            type: String,
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
    },
    emits: ['error'],
    setup(props, { slots, expose, emit }) {
        const abstract = ref(false);
        const el = ref();
        const teleport_el = ref();
        const shadow_root = ref();
        const teleport_target = computed(() => shadow_root.value ?? virtual_root);
        const ex = reactive({
            shadow_root,
        });
        expose(ex);
        onBeforeMount(() => {
            abstract.value = props.abstract;
        });
        onMounted(() => {
            try {
                if (abstract.value) {
                    if (teleport_el.value.parentElement.shadowRoot) {
                        shadow_root.value = teleport_el.value.parentElement.shadowRoot;
                    }
                    else {
                        shadow_root.value = makeShadowRaw(teleport_el.value.parentElement, void 0, {
                            mode: props.mode,
                            delegatesFocus: props.delegatesFocus,
                        });
                    }
                }
                else {
                    shadow_root.value = makeShadowRaw(el.value, void 0, { mode: props.mode, delegatesFocus: props.delegatesFocus });
                }
                shadow_root.value?.styleSheets;
            }
            catch (e) {
                console.error(e);
                emit('error', e);
            }
        });
        return () => {
            const child_part = (h(Teleport, { ref: teleport_el, to: teleport_target.value }, [slots.default?.()]));
            if (abstract.value)
                return child_part;
            return h(props.tag, { ref: el }, child_part);
        };
    },
    install,
    Style: ShadowStyle,
}));
function withType() {
    return obj => obj;
}
function install(app) {
    app.component('shadow-root', ShadowRoot);
    app.directive('shadow', {
        beforeMount(el) {
            console.warn('[VueShadowDom] Deprecated v-shadow directive, use <shadow-root> component');
            makeShadow(el);
        },
    });
}
var shadow = { ShadowRoot, ShadowStyle, shadow_root: ShadowRoot, shadow_style: ShadowStyle, install };

export { ShadowRoot, ShadowStyle, shadow as default, install, makeShadow, makeShadowRaw, ShadowRoot as shadow_root, ShadowStyle as shadow_style };
//# sourceMappingURL=shadow.esm-bundler.mjs.map
