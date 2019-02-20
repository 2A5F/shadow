import Vue from 'vue'
export function install(vue: typeof Vue) {

    function makeShadow(el: HTMLElement) {
        const fragment = document.createDocumentFragment()
        for (const node of el.childNodes) {
            fragment.appendChild(node)
        }
        const shadowroot = el.attachShadow({ mode: 'open' })
        shadowroot.appendChild(fragment)
    }

    vue.component('shadow-root', {
        template: '<div><slot></slot></div>',
        mounted() {
            makeShadow(this.$el)
        }
    })

    vue.directive('shadow', {
        bind(el: HTMLElement) {
            makeShadow(el)
        }
    })
}
if (typeof window != 'undefined' && (window as any).Vue) {
    install((window as any).Vue)
}