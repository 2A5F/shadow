import Vue from 'vue';

function makeShadow(el) {
    makeAbstractShadow(el, el.childNodes);
}
function makeAbstractShadow(rootEl, childNodes) {
    const fragment = document.createDocumentFragment();
    for (const node of childNodes) {
        fragment.appendChild(node);
    }
    const shadowroot = rootEl.attachShadow({ mode: 'open' });
    shadowroot.appendChild(fragment);
}
function data() {
    return {
        pabstract: false,
        pstatic: false
    };
}
const ShadowRoot = Vue.extend({
    render(h) {
        return h(this.tag, {}, [
            this.pstatic ? this.$slots.default : h(this.slotTag, { attrs: { id: this.slotId }, 'class': this.slotClass }, [
                this.$slots.default
            ])
        ]);
    },
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
    data,
    beforeMount() {
        this.pabstract = this.abstract;
        this.pstatic = this.static;
    },
    mounted() {
        if (this.pabstract) {
            makeAbstractShadow(this.$el.parentElement, this.$el.childNodes);
        }
        else {
            makeShadow(this.$el);
        }
    },
});
function install(vue) {
    vue.component('shadow-root', ShadowRoot);
    vue.directive('shadow', {
        bind(el) {
            makeShadow(el);
        }
    });
}
if (typeof window != null && window.Vue) {
    install(window.Vue);
}
var shadow = { ShadowRoot, shadow_root: ShadowRoot, install };

export default shadow;
export { ShadowRoot, install, ShadowRoot as shadow_root };
