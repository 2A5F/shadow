(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.shadow = {}, global.Vue));
}(this, (function (exports, vue) { 'use strict';

    function makeShadow(el) {
        return makeShadowRaw(el, el.childNodes);
    }
    function makeShadowRaw(rootEl, childNodes) {
        try {
            const fragment = document.createDocumentFragment();
            for (const node of childNodes) {
                fragment.appendChild(node);
            }
            const oldroot = rootEl.shadowRoot;
            if (oldroot != null) {
                console.error('[shadow] Attach shadow multiple times', rootEl, childNodes, oldroot);
                return;
            }
            else {
                const shadowroot = rootEl.attachShadow({ mode: 'open' });
                shadowroot.appendChild(fragment);
                return shadowroot;
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
    const ShadowRoot = asInstall(vue.defineComponent({
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
            const abstract = vue.ref(false);
            const static_ = vue.ref(false);
            const el = vue.ref();
            vue.onBeforeMount(() => {
                abstract.value = props.abstract;
                static_.value = props.static;
            });
            vue.onMounted(() => {
                if (abstract.value) {
                    makeShadowRaw(el.value.parentElement, el.value.childNodes);
                }
                else {
                    makeShadow(el.value);
                }
            });
            return () => vue.h(props.tag, { ref: el }, [
                static_.value ? slots.default() : vue.h(props.slotTag, { id: props.slotId, class: props.slotClass }, [slots.default()])
            ]);
        },
        install,
    }));
    function asInstall(obj) {
        return obj;
    }
    function install(app) {
        app.component('shadow-root', ShadowRoot);
        app.directive('shadow', {
            beforeMount(el) {
                makeShadow(el);
            }
        });
    }
    var shadow = { ShadowRoot, shadow_root: ShadowRoot, install };

    exports.ShadowRoot = ShadowRoot;
    exports.default = shadow;
    exports.install = install;
    exports.makeShadow = makeShadow;
    exports.makeShadowRaw = makeShadowRaw;
    exports.shadow_root = ShadowRoot;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shadow.global.js.map
