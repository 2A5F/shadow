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
    function makeAbstractShadow(rootEl: HTMLElement, childNodes: NodeList) {
        const fragment = document.createDocumentFragment()
        for (const node of childNodes) {
            fragment.appendChild(node)
        }
        const shadowroot = rootEl.attachShadow({ mode: 'open' })
        shadowroot.appendChild(fragment)
    }

    vue.component('shadow-root', {
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
            }
        },
        beforeMount () {
            console.log(this)
            this.pabstract = this.abstract
            this.pstatic = this.static
        },
        mounted() {
            console.log(this)
            if (this.pabstract) {
                makeAbstractShadow(this.$el.parentElement, this.$el.childNodes)
            } else {
                makeShadow(this.$el)
            }
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