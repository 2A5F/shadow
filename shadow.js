'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));

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
const ShadowRoot = Vue.extend({
    template: '<component :is="tag"><slot v-if="pstatic"></slot><component :is="tag" :class="slotClass" :id="slotId" v-else><slot></slot></component></component>',
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
    data() {
        return {
            pabstract: false,
            pstatic: false
        };
    },
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
    }
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

exports.ShadowRoot = ShadowRoot;
exports.default = shadow;
exports.install = install;
exports.shadow_root = ShadowRoot;
