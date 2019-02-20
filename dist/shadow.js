(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.shadow = {}));
}(this, function (exports) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
