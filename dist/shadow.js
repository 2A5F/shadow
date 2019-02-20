(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.shadow = factory());
}(this, function () { 'use strict';

    function Shadow(vue) {
        vue.component('shadow', {
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
        Shadow(window.Vue);
    }

    return Shadow;

}));
