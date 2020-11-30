import { VNode } from "vue";

declare global {
    namespace JSX {
        interface IntrinsicAttributes {
            [key: string]: any
        }
        interface Element extends VNode { }
    }
}
