import Vue from 'vue';
declare const ShadowRoot: import("vue").VueConstructor<{
    pabstract: boolean;
    pstatic: boolean;
} & {
    abstract: boolean;
    static: boolean;
    tag: string;
    slotTag: string;
    slotClass: string;
    slotId: string;
} & Vue>;
declare function install(vue: typeof Vue): void;
export { ShadowRoot, ShadowRoot as shadow_root, install };
declare const _default: {
    ShadowRoot: import("vue").VueConstructor<{
        pabstract: boolean;
        pstatic: boolean;
    } & {
        abstract: boolean;
        static: boolean;
        tag: string;
        slotTag: string;
        slotClass: string;
        slotId: string;
    } & Vue>;
    shadow_root: import("vue").VueConstructor<{
        pabstract: boolean;
        pstatic: boolean;
    } & {
        abstract: boolean;
        static: boolean;
        tag: string;
        slotTag: string;
        slotClass: string;
        slotId: string;
    } & Vue>;
    install: typeof install;
};
export default _default;
