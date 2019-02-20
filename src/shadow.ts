import Vue from 'vue'
export function install(vue: typeof Vue) {
    vue.component('shadow-root', {
        template: '<div><slot></slot></div>',
        mounted() {
            const fragment = document.createDocumentFragment()
            for (const node of this.$el.childNodes) {
                fragment.appendChild(node)
            }
            const shadowroot = this.$el.attachShadow({ mode: 'open' })
            shadowroot.appendChild(fragment)
        }
    })
}
if (typeof window != 'undefined' && (window as any).Vue) {
    install((window as any).Vue)
}