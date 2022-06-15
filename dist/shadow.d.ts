import { PropType } from 'vue';
import type { App, VNode } from 'vue';
declare type GShadowRoot = typeof global.ShadowRoot.prototype;
export interface ShadowOption {
    mode?: 'open' | 'closed';
    delegatesFocus?: boolean;
}
export declare function makeShadow(el: Element, option?: ShadowOption): ShadowRoot | undefined;
export declare function makeShadowRaw(rootEl: Element, childNodes?: Iterable<Node>, option?: ShadowOption): ShadowRoot | undefined;
export declare const ShadowStyle: import("vue").DefineComponent<{
    media: StringConstructor;
    nonce: StringConstructor;
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    media: StringConstructor;
    nonce: StringConstructor;
}>>, {}>;
export interface ShadowRootExpose {
    shadow_root?: GShadowRoot;
}
export declare const ShadowRoot: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            mode: "open" | "closed";
            delegatesFocus: boolean;
            abstract: boolean;
            tag: string;
        }> & Pick<Readonly<import("vue").ExtractPropTypes<{
            mode: {
                type: PropType<"open" | "closed">;
                default: string;
            };
            delegatesFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            abstract: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            adoptedStyleSheets: {
                type: PropType<CSSStyleSheet[]>;
            };
        }>> & {
            onError?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "onError" | "adoptedStyleSheets" | "style" | "key" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "class">;
        $attrs: Record<string, unknown>;
        $refs: Record<string, unknown>;
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "error", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            mode: {
                type: PropType<"open" | "closed">;
                default: string;
            };
            delegatesFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            abstract: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            adoptedStyleSheets: {
                type: PropType<CSSStyleSheet[]>;
            };
        }>> & {
            onError?: ((...args: any[]) => any) | undefined;
        }, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], string, {
            mode: "open" | "closed";
            delegatesFocus: boolean;
            abstract: boolean;
            tag: string;
        }> & {
            beforeCreate?: (() => void) | (() => void)[] | undefined;
            created?: (() => void) | (() => void)[] | undefined;
            beforeMount?: (() => void) | (() => void)[] | undefined;
            mounted?: (() => void) | (() => void)[] | undefined;
            beforeUpdate?: (() => void) | (() => void)[] | undefined;
            updated?: (() => void) | (() => void)[] | undefined;
            activated?: (() => void) | (() => void)[] | undefined;
            deactivated?: (() => void) | (() => void)[] | undefined;
            beforeDestroy?: (() => void) | (() => void)[] | undefined;
            beforeUnmount?: (() => void) | (() => void)[] | undefined;
            destroyed?: (() => void) | (() => void)[] | undefined;
            unmounted?: (() => void) | (() => void)[] | undefined;
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        mode: {
            type: PropType<"open" | "closed">;
            default: string;
        };
        delegatesFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        abstract: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        adoptedStyleSheets: {
            type: PropType<CSSStyleSheet[]>;
        };
    }>> & {
        onError?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => VNode> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    mode: {
        type: PropType<"open" | "closed">;
        default: string;
    };
    delegatesFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    abstract: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    adoptedStyleSheets: {
        type: PropType<CSSStyleSheet[]>;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", {
    mode: "open" | "closed";
    delegatesFocus: boolean;
    abstract: boolean;
    tag: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: typeof install;
    Style: typeof ShadowStyle;
};
export declare function install(app: App): void;
export { ShadowRoot as shadow_root, ShadowStyle as shadow_style };
declare const _default: {
    ShadowRoot: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                mode: "open" | "closed";
                delegatesFocus: boolean;
                abstract: boolean;
                tag: string;
            }> & Pick<Readonly<import("vue").ExtractPropTypes<{
                mode: {
                    type: PropType<"open" | "closed">;
                    default: string;
                };
                delegatesFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                abstract: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                adoptedStyleSheets: {
                    type: PropType<CSSStyleSheet[]>;
                };
            }>> & {
                onError?: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "onError" | "adoptedStyleSheets" | "style" | "key" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "class">;
            $attrs: Record<string, unknown>;
            $refs: Record<string, unknown>;
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "error", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                mode: {
                    type: PropType<"open" | "closed">;
                    default: string;
                };
                delegatesFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                abstract: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                adoptedStyleSheets: {
                    type: PropType<CSSStyleSheet[]>;
                };
            }>> & {
                onError?: ((...args: any[]) => any) | undefined;
            }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], string, {
                mode: "open" | "closed";
                delegatesFocus: boolean;
                abstract: boolean;
                tag: string;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            mode: {
                type: PropType<"open" | "closed">;
                default: string;
            };
            delegatesFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            abstract: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            adoptedStyleSheets: {
                type: PropType<CSSStyleSheet[]>;
            };
        }>> & {
            onError?: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>> & {} & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        mode: {
            type: PropType<"open" | "closed">;
            default: string;
        };
        delegatesFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        abstract: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        adoptedStyleSheets: {
            type: PropType<CSSStyleSheet[]>;
        };
    }>> & {
        onError?: ((...args: any[]) => any) | undefined;
    }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", {
        mode: "open" | "closed";
        delegatesFocus: boolean;
        abstract: boolean;
        tag: string;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: typeof install;
        Style: import("vue").DefineComponent<{
            media: StringConstructor;
            nonce: StringConstructor;
        }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            media: StringConstructor;
            nonce: StringConstructor;
        }>>, {}>;
    };
    ShadowStyle: import("vue").DefineComponent<{
        media: StringConstructor;
        nonce: StringConstructor;
    }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        media: StringConstructor;
        nonce: StringConstructor;
    }>>, {}>;
    shadow_root: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                mode: "open" | "closed";
                delegatesFocus: boolean;
                abstract: boolean;
                tag: string;
            }> & Pick<Readonly<import("vue").ExtractPropTypes<{
                mode: {
                    type: PropType<"open" | "closed">;
                    default: string;
                };
                delegatesFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                abstract: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                adoptedStyleSheets: {
                    type: PropType<CSSStyleSheet[]>;
                };
            }>> & {
                onError?: ((...args: any[]) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "onError" | "adoptedStyleSheets" | "style" | "key" | "ref" | "ref_for" | "ref_key" | "onVnodeBeforeMount" | "onVnodeMounted" | "onVnodeBeforeUpdate" | "onVnodeUpdated" | "onVnodeBeforeUnmount" | "onVnodeUnmounted" | "class">;
            $attrs: Record<string, unknown>;
            $refs: Record<string, unknown>;
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "error", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                mode: {
                    type: PropType<"open" | "closed">;
                    default: string;
                };
                delegatesFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                abstract: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                tag: {
                    type: StringConstructor;
                    default: string;
                };
                adoptedStyleSheets: {
                    type: PropType<CSSStyleSheet[]>;
                };
            }>> & {
                onError?: ((...args: any[]) => any) | undefined;
            }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], string, {
                mode: "open" | "closed";
                delegatesFocus: boolean;
                abstract: boolean;
                tag: string;
            }> & {
                beforeCreate?: (() => void) | (() => void)[] | undefined;
                created?: (() => void) | (() => void)[] | undefined;
                beforeMount?: (() => void) | (() => void)[] | undefined;
                mounted?: (() => void) | (() => void)[] | undefined;
                beforeUpdate?: (() => void) | (() => void)[] | undefined;
                updated?: (() => void) | (() => void)[] | undefined;
                activated?: (() => void) | (() => void)[] | undefined;
                deactivated?: (() => void) | (() => void)[] | undefined;
                beforeDestroy?: (() => void) | (() => void)[] | undefined;
                beforeUnmount?: (() => void) | (() => void)[] | undefined;
                destroyed?: (() => void) | (() => void)[] | undefined;
                unmounted?: (() => void) | (() => void)[] | undefined;
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[] | undefined;
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[] | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            mode: {
                type: PropType<"open" | "closed">;
                default: string;
            };
            delegatesFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            abstract: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            adoptedStyleSheets: {
                type: PropType<CSSStyleSheet[]>;
            };
        }>> & {
            onError?: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>> & {} & {} & import("vue").ComponentCustomProperties;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        mode: {
            type: PropType<"open" | "closed">;
            default: string;
        };
        delegatesFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        abstract: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        adoptedStyleSheets: {
            type: PropType<CSSStyleSheet[]>;
        };
    }>> & {
        onError?: ((...args: any[]) => any) | undefined;
    }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", {
        mode: "open" | "closed";
        delegatesFocus: boolean;
        abstract: boolean;
        tag: string;
    }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
        install: typeof install;
        Style: import("vue").DefineComponent<{
            media: StringConstructor;
            nonce: StringConstructor;
        }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            media: StringConstructor;
            nonce: StringConstructor;
        }>>, {}>;
    };
    shadow_style: import("vue").DefineComponent<{
        media: StringConstructor;
        nonce: StringConstructor;
    }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        media: StringConstructor;
        nonce: StringConstructor;
    }>>, {}>;
    install: typeof install;
};
export default _default;
