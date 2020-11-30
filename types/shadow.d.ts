import type { App, VNode } from 'vue';
export declare function makeShadow(el: Element): ShadowRoot | undefined;
export declare function makeShadowRaw(rootEl: Element, childNodes: NodeList): ShadowRoot | undefined;
export declare const ShadowRoot: import("vue").DefineComponent<{
    abstract: {
        type: BooleanConstructor;
        default: boolean;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    slotTag: {
        type: StringConstructor;
        default: string;
    };
    slotClass: {
        type: StringConstructor;
    };
    slotId: {
        type: StringConstructor;
    };
}, () => VNode, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    static: boolean;
    abstract: boolean;
    tag: string;
    slotTag: string;
} & {
    slotClass?: string | undefined;
    slotId?: string | undefined;
}>, {
    static: boolean;
    abstract: boolean;
    tag: string;
    slotTag: string;
}>;
export declare function install(app: App): void;
export { ShadowRoot as shadow_root };
declare const _default: {
    ShadowRoot: import("vue").DefineComponent<{
        abstract: {
            type: BooleanConstructor;
            default: boolean;
        };
        static: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        slotTag: {
            type: StringConstructor;
            default: string;
        };
        slotClass: {
            type: StringConstructor;
        };
        slotId: {
            type: StringConstructor;
        };
    }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        static: boolean;
        abstract: boolean;
        tag: string;
        slotTag: string;
    } & {
        slotClass?: string | undefined;
        slotId?: string | undefined;
    }>, {
        static: boolean;
        abstract: boolean;
        tag: string;
        slotTag: string;
    }>;
    shadow_root: import("vue").DefineComponent<{
        abstract: {
            type: BooleanConstructor;
            default: boolean;
        };
        static: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        slotTag: {
            type: StringConstructor;
            default: string;
        };
        slotClass: {
            type: StringConstructor;
        };
        slotId: {
            type: StringConstructor;
        };
    }, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        static: boolean;
        abstract: boolean;
        tag: string;
        slotTag: string;
    } & {
        slotClass?: string | undefined;
        slotId?: string | undefined;
    }>, {
        static: boolean;
        abstract: boolean;
        tag: string;
        slotTag: string;
    }>;
    install: typeof install;
};
export default _default;
