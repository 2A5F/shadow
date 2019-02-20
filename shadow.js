'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function install(vue) {
    vue.component('shadow-root', {
        template: '<div><slot></slot></div>',
        mounted() {
            const fragment = document.createDocumentFragment();
            for (const node of this.$el.childNodes) {
                fragment.appendChild(node);
            }
            const shadowroot = this.$el.attachShadow({ mode: 'open' });
            shadowroot.appendChild(fragment);
        }
    });
}
if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue);
}

exports.install = install;
