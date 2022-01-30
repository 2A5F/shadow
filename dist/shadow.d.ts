import type { App, VNode } from "vue";
export declare function makeShadow(el: Element): ShadowRoot | undefined;
export declare function makeShadowRaw(rootEl: Element, childNodes: NodeList): ShadowRoot | undefined;
export declare const ShadowRoot: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            abstract: boolean;
            static: boolean;
            tag: string;
            slotTag: string;
        }> & Pick<Readonly<{
            abstract: boolean;
            static: boolean;
            tag: string;
            slotTag: string;
        } & {
            slotClass?: string | undefined;
            slotId?: string | undefined;
            style?: string | undefined;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "slotClass" | "slotId" | "style" | "key" | "ref" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "class">;
        $attrs: Record<string, unknown>;
        $refs: Record<string, unknown>;
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            abstract: boolean;
            static: boolean;
            tag: string;
            slotTag: string;
        } & {
            slotClass?: string | undefined;
            slotId?: string | undefined;
            style?: string | undefined;
        }>, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            abstract: boolean;
            static: boolean;
            tag: string;
            slotTag: string;
        }>;
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        abstract: boolean;
        static: boolean;
        tag: string;
        slotTag: string;
    } & {
        slotClass?: string | undefined;
        slotId?: string | undefined;
        style?: string | undefined;
    }> & import("vue").ShallowUnwrapRef<() => VNode> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    abstract: boolean;
    static: boolean;
    tag: string;
    slotTag: string;
} & {
    slotClass?: string | undefined;
    slotId?: string | undefined;
    style?: string | undefined;
}>, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    abstract: boolean;
    static: boolean;
    tag: string;
    slotTag: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: typeof install;
};
export declare function install(app: App): void;
export { ShadowRoot as shadow_root };
declare const _default: {
    ShadowRoot: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                abstract: boolean;
                static: boolean;
                tag: string;
                slotTag: string;
            }> & Pick<Readonly<{
                abstract: boolean;
                static: boolean;
                tag: string;
                slotTag: string;
            } & {
                slotClass?: string | undefined;
                slotId?: string | undefined;
                style?: string | undefined;
            }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "slotClass" | "slotId" | "style" | "key" | "ref" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "class">;
            $attrs: Record<string, unknown>;
            $refs: Record<string, unknown>;
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<{
                abstract: boolean;
                static: boolean;
                tag: string;
                slotTag: string;
            } & {
                slotClass?: string | undefined;
                slotId?: string | undefined;
                style?: string | undefined;
            }>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                abstract: boolean;
                static: boolean;
                tag: string;
                slotTag: string;
            }>;
            $forceUpdate: import("vue").ReactiveEffect<any>;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            abstract: boolean;
            static: boolean;
            tag: string;
            slotTag: string;
        } & {
            slotClass?: string | undefined;
            slotId?: string | undefined;
            style?: string | undefined;
        }> & import("vue").ShallowUnwrapRef<() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>> & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        abstract: boolean;
        static: boolean;
        tag: string;
        slotTag: string;
    } & {
        slotClass?: string | undefined;
        slotId?: string | undefined;
        style?: string | undefined;
    }>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        abstract: boolean;
        static: boolean;
        tag: string;
        slotTag: string;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: typeof install;
    };
    shadow_root: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                abstract: boolean;
                static: boolean;
                tag: string;
                slotTag: string;
            }> & Pick<Readonly<{
                abstract: boolean;
                static: boolean;
                tag: string;
                slotTag: string;
            } & {
                slotClass?: string | undefined;
                slotId?: string | undefined;
                style?: string | undefined;
            }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "slotClass" | "slotId" | "style" | "key" | "ref" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "class">;
            $attrs: Record<string, unknown>;
            $refs: Record<string, unknown>;
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<{
                abstract: boolean;
                static: boolean;
                tag: string;
                slotTag: string;
            } & {
                slotClass?: string | undefined;
                slotId?: string | undefined;
                style?: string | undefined;
            }>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                abstract: boolean;
                static: boolean;
                tag: string;
                slotTag: string;
            }>;
            $forceUpdate: import("vue").ReactiveEffect<any>;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<{
            abstract: boolean;
            static: boolean;
            tag: string;
            slotTag: string;
        } & {
            slotClass?: string | undefined;
            slotId?: string | undefined;
            style?: string | undefined;
        }> & import("vue").ShallowUnwrapRef<() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>> & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{
        abstract: boolean;
        static: boolean;
        tag: string;
        slotTag: string;
    } & {
        slotClass?: string | undefined;
        slotId?: string | undefined;
        style?: string | undefined;
    }>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
        abstract: boolean;
        static: boolean;
        tag: string;
        slotTag: string;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: typeof install;
    };
    install: typeof install;
};
export default _default;
