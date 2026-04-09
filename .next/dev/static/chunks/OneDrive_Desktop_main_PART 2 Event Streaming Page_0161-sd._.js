(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$vocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/mic-vocal.js [app-client] (ecmascript) <export default as Mic2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/node_modules/lucide-react/dist/esm/icons/layout-list.js [app-client] (ecmascript) <export default as LayoutList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Format number with commas consistently (avoids locale-based hydration mismatch)
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const events = [
    // Music (6)
    {
        id: "1",
        title: "lofi hip hop radio - beats to relax/study to",
        thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=900&h=510&fit=crop&auto=format",
        viewerCount: 12453,
        isLive: true,
        duration: "5h 23m",
        category: "Music",
        channelName: "Lofi Girl"
    },
    {
        id: "2",
        title: "Chill Electronic Beats - Work & Focus Music",
        thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=340&fit=crop",
        viewerCount: 8234,
        isLive: true,
        duration: "2h 45m",
        category: "Music",
        channelName: "Chillhop Music"
    },
    {
        id: "3",
        title: "Jazz Cafe Radio - Smooth Jazz 24/7",
        thumbnail: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&h=340&fit=crop",
        viewerCount: 5621,
        isLive: true,
        duration: "8h 12m",
        category: "Music",
        channelName: "Cafe Music BGM"
    },
    {
        id: "4",
        title: "Classical Piano Live Performance",
        thumbnail: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=340&fit=crop",
        viewerCount: 2156,
        isLive: true,
        duration: "45m",
        category: "Music",
        channelName: "Piano Academy"
    },
    {
        id: "5",
        title: "Synthwave Radio - Retro Vibes 24/7",
        thumbnail: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=600&h=340&fit=crop",
        viewerCount: 4892,
        isLive: true,
        duration: "3h 10m",
        category: "Music",
        channelName: "Retro Wave"
    },
    {
        id: "6",
        title: "Acoustic Sessions - Live From Studio",
        thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&h=340&fit=crop",
        viewerCount: 1834,
        isLive: true,
        duration: "1h 20m",
        category: "Music",
        channelName: "Acoustic Live"
    },
    // Ambient (4)
    {
        id: "7",
        title: "Ambient Sounds for Deep Focus",
        thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=340&fit=crop",
        viewerCount: 3892,
        isLive: true,
        duration: "1h 30m",
        category: "Ambient",
        channelName: "Focus Flow"
    },
    {
        id: "8",
        title: "Nature Sounds - Forest Rain Ambience",
        thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=340&fit=crop",
        viewerCount: 4521,
        isLive: true,
        duration: "3h 15m",
        category: "Ambient",
        channelName: "Nature Vibes"
    },
    {
        id: "9",
        title: "Ocean Waves - Beach Relaxation",
        thumbnail: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=340&fit=crop",
        viewerCount: 2987,
        isLive: true,
        duration: "6h 45m",
        category: "Ambient",
        channelName: "Calm Seas"
    },
    {
        id: "10",
        title: "Fireplace Sounds - Cozy Winter Night",
        thumbnail: "https://images.unsplash.com/photo-1543459176-4426b37223ba?w=600&h=340&fit=crop",
        viewerCount: 1654,
        isLive: true,
        duration: "4h 30m",
        category: "Ambient",
        channelName: "Cozy Corner"
    },
    // Gaming (6)
    {
        id: "11",
        title: "Speedrun Marathon - Classic Games",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=340&fit=crop",
        viewerCount: 18234,
        isLive: true,
        duration: "4h 12m",
        category: "Gaming",
        channelName: "SpeedDemon"
    },
    {
        id: "12",
        title: "Pro League Finals - Championship Match",
        thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=340&fit=crop",
        viewerCount: 45621,
        isLive: true,
        duration: "2h 30m",
        category: "Gaming",
        channelName: "Esports Central"
    },
    {
        id: "13",
        title: "Indie Game Showcase - Hidden Gems",
        thumbnail: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=900&h=510&fit=crop&auto=format",
        viewerCount: 3456,
        isLive: true,
        duration: "1h 45m",
        category: "Gaming",
        channelName: "Indie Explorer"
    },
    {
        id: "14",
        title: "Retro Gaming Night - 90s Classics",
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=340&fit=crop",
        viewerCount: 5678,
        isLive: true,
        duration: "3h 20m",
        category: "Gaming",
        channelName: "RetroGamer"
    },
    {
        id: "15",
        title: "Building in Survival Mode - Day 100",
        thumbnail: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&h=340&fit=crop",
        viewerCount: 8901,
        isLive: true,
        duration: "5h 10m",
        category: "Gaming",
        channelName: "CraftMaster"
    },
    {
        id: "16",
        title: "Horror Game Marathon - Scary Night",
        thumbnail: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&h=340&fit=crop",
        viewerCount: 7234,
        isLive: true,
        duration: "2h 55m",
        category: "Gaming",
        channelName: "ScreamQueen"
    },
    // Talk Shows (5)
    {
        id: "17",
        title: "Morning Coffee Chat - Daily Updates",
        thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=340&fit=crop",
        viewerCount: 4567,
        isLive: true,
        duration: "1h 15m",
        category: "Talk Shows",
        channelName: "Coffee Talk"
    },
    {
        id: "18",
        title: "Tech News Roundup - Weekly Digest",
        thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=340&fit=crop",
        viewerCount: 6789,
        isLive: true,
        duration: "45m",
        category: "Talk Shows",
        channelName: "TechBytes"
    },
    {
        id: "19",
        title: "Celebrity Interview - Behind the Scenes",
        thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=340&fit=crop",
        viewerCount: 12345,
        isLive: true,
        duration: "55m",
        category: "Talk Shows",
        channelName: "Star Talk"
    },
    {
        id: "20",
        title: "Podcast Live - Listener Q&A",
        thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=340&fit=crop",
        viewerCount: 3456,
        isLive: true,
        duration: "1h 30m",
        category: "Talk Shows",
        channelName: "The Podcast Show"
    },
    {
        id: "21",
        title: "Comedy Hour - Stand Up Special",
        thumbnail: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&h=340&fit=crop",
        viewerCount: 8765,
        isLive: true,
        duration: "1h 00m",
        category: "Talk Shows",
        channelName: "Laugh Factory"
    },
    // Education (5)
    {
        id: "22",
        title: "JavaScript Masterclass - Advanced Concepts",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=340&fit=crop",
        viewerCount: 5432,
        isLive: true,
        duration: "2h 00m",
        category: "Education",
        channelName: "Code Academy"
    },
    {
        id: "23",
        title: "Physics Explained - Quantum Mechanics",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop",
        viewerCount: 3210,
        isLive: true,
        duration: "1h 20m",
        category: "Education",
        channelName: "Science Hub"
    },
    {
        id: "24",
        title: "Language Learning - Spanish for Beginners",
        thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=340&fit=crop",
        viewerCount: 2876,
        isLive: true,
        duration: "50m",
        category: "Education",
        channelName: "Polyglot Pro"
    },
    {
        id: "25",
        title: "History Deep Dive - Ancient Civilizations",
        thumbnail: "https://images.unsplash.com/photo-1460186136353-977e9d6085a1?w=900&h=510&fit=crop&auto=format",
        viewerCount: 4123,
        isLive: true,
        duration: "1h 40m",
        category: "Education",
        channelName: "History Channel"
    },
    {
        id: "26",
        title: "Math Tutoring - Calculus Made Easy",
        thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=340&fit=crop",
        viewerCount: 1987,
        isLive: true,
        duration: "1h 15m",
        category: "Education",
        channelName: "Math Wizard"
    },
    // Others (4)
    {
        id: "27",
        title: "Cooking Live - Italian Cuisine Night",
        thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=340&fit=crop",
        viewerCount: 6543,
        isLive: true,
        duration: "1h 30m",
        category: "Others",
        channelName: "Chef Marco"
    },
    {
        id: "28",
        title: "Art Stream - Digital Painting Session",
        thumbnail: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=340&fit=crop",
        viewerCount: 2345,
        isLive: true,
        duration: "2h 45m",
        category: "Others",
        channelName: "Art Studio"
    },
    {
        id: "29",
        title: "Fitness Live - HIIT Workout",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=340&fit=crop",
        viewerCount: 4321,
        isLive: true,
        duration: "45m",
        category: "Others",
        channelName: "FitLife"
    },
    {
        id: "30",
        title: "Travel Vlog - Exploring Tokyo Streets",
        thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=340&fit=crop",
        viewerCount: 7654,
        isLive: true,
        duration: "1h 55m",
        category: "Others",
        channelName: "Wanderlust"
    }
];
const categories = [
    {
        name: "All",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"]
    },
    {
        name: "Music",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"]
    },
    {
        name: "Ambient",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"]
    },
    {
        name: "Gaming",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"]
    },
    {
        name: "Talk Shows",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$vocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic2$3e$__["Mic2"]
    },
    {
        name: "Education",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    },
    {
        name: "Others",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"]
    }
];
function EventCard({ event, index, viewMode }) {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (viewMode === "list") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/event/${event.id}`,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex gap-4 p-3 rounded-xl bg-card border border-border", "transform transition-all duration-300", "hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:bg-secondary/30", "animate-in fade-in slide-in-from-left-4"),
            style: {
                animationDelay: `${index * 40}ms`,
                animationFillMode: "both"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-48 aspect-video rounded-lg overflow-hidden shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: event.thumbnail,
                            alt: event.title,
                            className: "w-full h-full object-cover bg-muted transition-transform duration-500 group-hover:scale-110",
                            loading: index === 0 ? "eager" : "lazy",
                            fetchPriority: index === 0 ? "high" : "auto",
                            onError: (e)=>{
                                e.currentTarget.src = "/placeholder.jpg";
                            }
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        event.isLive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded bg-live text-white text-xs font-bold uppercase",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-white animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                "Live"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                event.duration
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 349,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col justify-center min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full",
                                children: event.category
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 374,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors mb-1",
                            children: event.title
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 379,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: event.channelName
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mt-2 text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "w-3.5 h-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, this),
                                    formatNumber(event.viewerCount),
                                    " watching"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
            lineNumber: 338,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/event/${event.id}`,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group block rounded-xl overflow-hidden bg-card border border-border", "transform transition-all duration-300", "hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20", "animate-in fade-in slide-in-from-bottom-4"),
        style: {
            animationDelay: `${index * 50}ms`,
            animationFillMode: "both"
        },
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-video overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: event.thumbnail,
                        alt: event.title,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full object-cover bg-muted transition-transform duration-500", isHovered && "scale-110"),
                        loading: index === 0 ? "eager" : "lazy",
                        fetchPriority: index === 0 ? "high" : "auto",
                        onError: (e)=>{
                            e.currentTarget.src = "/placeholder.jpg";
                        }
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300", isHovered && "opacity-100"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 rounded-full bg-primary flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform shadow-lg shadow-primary/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-6 h-6 text-primary-foreground ml-0.5",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    event.isLive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-live text-white text-xs font-bold uppercase tracking-wide shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-white animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            "Live"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/70 text-white text-xs font-medium backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this),
                            event.duration
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/70 text-white text-xs font-medium backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            formatNumber(event.viewerCount)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full",
                                children: event.category
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: event.channelName
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors",
                        children: event.title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_s(EventCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = EventCard;
function HomePage() {
    _s1();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("viewers");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            setMounted(true);
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (!mounted) return;
            const timer = setTimeout({
                "HomePage.useEffect.timer": ()=>setIsLoading(false)
            }["HomePage.useEffect.timer"], 600);
            return ({
                "HomePage.useEffect": ()=>clearTimeout(timer)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        mounted
    ]);
    const filteredEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[filteredEvents]": ()=>{
            let filtered = events.filter({
                "HomePage.useMemo[filteredEvents].filtered": (event)=>{
                    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
                    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.channelName.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesCategory && matchesSearch;
                }
            }["HomePage.useMemo[filteredEvents].filtered"]);
            // Sort events
            if (sortBy === "viewers") {
                filtered = [
                    ...filtered
                ].sort({
                    "HomePage.useMemo[filteredEvents]": (a, b)=>b.viewerCount - a.viewerCount
                }["HomePage.useMemo[filteredEvents]"]);
            } else {
                filtered = [
                    ...filtered
                ].sort({
                    "HomePage.useMemo[filteredEvents]": (a, b)=>{
                        const durationA = parseDuration(a.duration);
                        const durationB = parseDuration(b.duration);
                        return durationB - durationA;
                    }
                }["HomePage.useMemo[filteredEvents]"]);
            }
            return filtered;
        }
    }["HomePage.useMemo[filteredEvents]"], [
        selectedCategory,
        searchQuery,
        sortBy
    ]);
    const totalViewers = events.reduce((sum, e)=>sum + e.viewerCount, 0);
    const categoryCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[categoryCounts]": ()=>{
            const counts = {
                All: events.length
            };
            events.forEach({
                "HomePage.useMemo[categoryCounts]": (e)=>{
                    counts[e.category] = (counts[e.category] || 0) + 1;
                }
            }["HomePage.useMemo[categoryCounts]"]);
            return counts;
        }
    }["HomePage.useMemo[categoryCounts]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 h-16 flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                    className: "w-6 h-6 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-lg text-foreground",
                                    children: "StreamHub"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 max-w-md hidden sm:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search streams, channels...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full pl-10 pr-4 py-2 text-sm bg-secondary/50 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-live/10 border border-live/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-live opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-live"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                                lineNumber: 549,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                        lineNumber: 547,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-live",
                                        children: [
                                            events.length,
                                            " Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 546,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 545,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 524,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-10 sm:py-16 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl mx-auto text-center space-y-5 animate-in fade-in slide-in-from-bottom-6 duration-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 563,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                formatNumber(totalViewers),
                                                " viewers watching now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 562,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance",
                                    children: "Live Streaming for Everyone"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 566,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base sm:text-lg text-muted-foreground text-pretty max-w-lg mx-auto",
                                    children: "Join thousands of viewers watching live streams. From music to gaming, education to entertainment."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 569,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 561,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 560,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 mb-4 sm:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 579,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search streams...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "w-full pl-10 pr-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 580,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 578,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 577,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto px-4 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin",
                    children: categories.map((category)=>{
                        const Icon = category.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: selectedCategory === category.name ? "default" : "outline",
                            size: "sm",
                            onClick: ()=>setSelectedCategory(category.name),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full whitespace-nowrap transition-all gap-2", selectedCategory === category.name ? "bg-primary text-primary-foreground shadow-md shadow-primary/25" : "hover:bg-secondary"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 608,
                                    columnNumber: 17
                                }, this),
                                category.name,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs px-1.5 py-0.5 rounded-full", selectedCategory === category.name ? "bg-primary-foreground/20" : "bg-muted"),
                                    children: categoryCounts[category.name] || 0
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 610,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, category.name, true, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 596,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 592,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto px-4 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-4 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "w-5 h-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-foreground",
                                    children: selectedCategory === "All" ? "All Streams" : selectedCategory
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "(",
                                        filteredEvents.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 632,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 627,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                            className: "w-4 h-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sortBy,
                                            onChange: (e)=>setSortBy(e.target.value),
                                            className: "bg-secondary border border-border rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "viewers",
                                                    children: "Most Viewers"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "duration",
                                                    children: "Longest Duration"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 637,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center border border-border rounded-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setViewMode("grid"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 transition-colors", viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                                lineNumber: 658,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setViewMode("list"),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 transition-colors", viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutList$3e$__["LayoutList"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                                lineNumber: 667,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 660,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 650,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 626,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 625,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto px-4 pb-16",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" : "flex flex-col gap-3"),
                    children: Array.from({
                        length: 8
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl overflow-hidden bg-card border border-border", viewMode === "list" && "flex gap-4 p-3"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-secondary animate-pulse", viewMode === "grid" ? "aspect-video" : "w-48 aspect-video rounded-lg shrink-0")
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 687,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-3", viewMode === "grid" ? "p-4" : "flex-1 py-2"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-20 bg-secondary animate-pulse rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 695,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-5 w-full bg-secondary animate-pulse rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 696,
                                            columnNumber: 19
                                        }, this),
                                        viewMode === "list" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-32 bg-secondary animate-pulse rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                            lineNumber: 697,
                                            columnNumber: 43
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                    lineNumber: 691,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 683,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 677,
                    columnNumber: 11
                }, this) : filteredEvents.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-8 h-8 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 705,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 704,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-foreground mb-2",
                            children: "No streams found"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 707,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-4",
                            children: "Try adjusting your search or filter criteria."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 708,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>{
                                setSearchQuery("");
                                setSelectedCategory("All");
                            },
                            children: "Clear filters"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 709,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 703,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" : "flex flex-col gap-3"),
                    children: filteredEvents.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventCard, {
                            event: event,
                            index: index,
                            viewMode: viewMode
                        }, event.id, false, {
                            fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                            lineNumber: 720,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 714,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 675,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-border py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                        className: "w-4 h-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                        lineNumber: 731,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-foreground",
                                        children: "StreamHub"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                        lineNumber: 732,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$main$2f$PART__2__Event__Streaming__Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Live streaming platform for creators and viewers worldwide"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                                lineNumber: 734,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                        lineNumber: 729,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                    lineNumber: 728,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/main/PART 2 Event Streaming Page/app/page.tsx",
        lineNumber: 522,
        columnNumber: 5
    }, this);
}
_s1(HomePage, "aiOqmsH45bMdvWgmltgdFctJI+k=");
_c1 = HomePage;
// Helper function to parse duration string to minutes
function parseDuration(duration) {
    const parts = duration.match(/(\d+)h?\s*(\d+)?m?/);
    if (!parts) return 0;
    const hours = parseInt(parts[1]) || 0;
    const minutes = parseInt(parts[2]) || 0;
    return hours * 60 + minutes;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "EventCard");
__turbopack_context__.k.register(_c1, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_main_PART%202%20Event%20Streaming%20Page_0161-sd._.js.map