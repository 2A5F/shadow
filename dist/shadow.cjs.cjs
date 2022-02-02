'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function makeShadow(el) {
    return makeShadowRaw(el, el.childNodes);
}
function makeShadowRaw(rootEl, childNodes) {
    try {
        const oldroot = rootEl.shadowRoot;
        if (oldroot != null) {
            console.error('[shadow] Attach shadow multiple times', rootEl, childNodes, oldroot);
            return;
        }
        else {
            const shadow_root = rootEl.attachShadow({ mode: 'open' });
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
const ShadowStyle = vue.defineComponent({
    props: {
        media: String,
        nonce: String,
    },
    setup(props, { slots }) {
        return () => (vue.h("style", { media: props.media, nonce: props.nonce }, slots.default?.()));
    },
});
const ShadowRoot = withType()(vue.defineComponent({
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
        const abstract = vue.ref(false);
        const el = vue.ref();
        const teleport_el = vue.ref();
        const shadow_root = vue.ref();
        const teleport_target = vue.computed(() => shadow_root.value ?? virtual_root);
        const ex = vue.reactive({
            shadow_root,
        });
        expose(ex);
        vue.onBeforeMount(() => {
            abstract.value = props.abstract;
        });
        vue.onMounted(() => {
            if (abstract.value) {
                if (teleport_el.value.parentElement.shadowRoot) {
                    shadow_root.value = teleport_el.value.parentElement.shadowRoot;
                }
                else {
                    shadow_root.value = makeShadowRaw(teleport_el.value.parentElement);
                }
            }
            else {
                shadow_root.value = makeShadowRaw(el.value);
            }
        });
        return () => {
            const child_part = (vue.h(vue.Teleport, { ref: teleport_el, to: teleport_target.value }, [slots.default?.()]));
            if (abstract.value)
                return child_part;
            return vue.h(props.tag, { ref: el }, child_part);
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
            makeShadow(el);
        },
    });
}
var shadow = { ShadowRoot, ShadowStyle, shadow_root: ShadowRoot, shadow_style: ShadowStyle, install };

exports.ShadowRoot = ShadowRoot;
exports.ShadowStyle = ShadowStyle;
exports["default"] = shadow;
exports.install = install;
exports.makeShadow = makeShadow;
exports.makeShadowRaw = makeShadowRaw;
exports.shadow_root = ShadowRoot;
exports.shadow_style = ShadowStyle;
//# sourceMappingURL=shadow.cjs.cjs.map
