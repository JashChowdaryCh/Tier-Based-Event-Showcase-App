module.exports = {

"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/node:url [external] (node:url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[project]/postcss.config.js_.loader.mjs [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
const configPath = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "./postcss.config.js");
// Absolute paths don't work with ESM imports on Windows:
// https://github.com/nodejs/node/issues/31710
// convert it to a file:// URL, which works on all platforms
const configUrl = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["pathToFileURL"])(configPath).toString();
const mod = await __turbopack_context__.y(configUrl);
const __TURBOPACK__default__export__ = mod.default ?? mod;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[turbopack-node]/transforms/transforms.ts [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Shared utilities for our 2 transform implementations.
 */ __turbopack_context__.s({
    "fromPath": ()=>fromPath,
    "getReadEnvVariables": ()=>getReadEnvVariables,
    "toPath": ()=>toPath
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
const contextDir = process.cwd();
const toPath = (file)=>{
    const relPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["relative"])(contextDir, file);
    if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["isAbsolute"])(relPath)) {
        throw new Error(`Cannot depend on path (${file}) outside of root directory (${contextDir})`);
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== '/' ? relPath.replaceAll(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"], '/') : relPath;
};
const fromPath = (path)=>{
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(contextDir, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"] !== '/' ? path.replaceAll('/', __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["sep"]) : path);
};
// Patch process.env to track which env vars are read
const originalEnv = process.env;
const readEnvVars = new Set();
process.env = new Proxy(originalEnv, {
    get (target, prop) {
        if (typeof prop === 'string') {
            // We register the env var as dependency on the
            // current transform and all future transforms
            // since the env var might be cached in module scope
            // and influence them all
            readEnvVars.add(prop);
        }
        return Reflect.get(target, prop);
    },
    set (target, prop, value) {
        return Reflect.set(target, prop, value);
    }
});
function getReadEnvVariables() {
    return Array.from(readEnvVars);
}
}),
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>transform,
    "init": ()=>init
});
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postcss/lib/postcss.mjs [postcss] (ecmascript)");
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$js_$2e$loader$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/postcss.config.js_.loader.mjs [postcss] (ecmascript)");
var __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$transforms$2f$transforms$2e$ts__$5b$postcss$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[turbopack-node]/transforms/transforms.ts [postcss] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$js_$2e$loader$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$js_$2e$loader$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
let processor;
const init = async (ipc)=>{
    let config = __TURBOPACK__imported__module__$5b$project$5d2f$postcss$2e$config$2e$js_$2e$loader$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"];
    if (typeof config === 'function') {
        config = await config({
            env: 'development'
        });
    }
    if (typeof config === 'undefined') {
        throw new Error('PostCSS config is undefined (make sure to export an function or object from config file)');
    }
    let plugins;
    if (Array.isArray(config.plugins)) {
        plugins = config.plugins.map((plugin)=>{
            if (Array.isArray(plugin)) {
                return plugin;
            } else if (typeof plugin === 'string') {
                return [
                    plugin,
                    {}
                ];
            } else {
                return plugin;
            }
        });
    } else if (typeof config.plugins === 'object') {
        plugins = Object.entries(config.plugins).filter(([, options])=>options);
    } else {
        plugins = [];
    }
    const loadedPlugins = plugins.map((plugin)=>{
        if (Array.isArray(plugin)) {
            const [arg, options] = plugin;
            let pluginFactory = arg;
            if (typeof pluginFactory === 'string') {
                pluginFactory = require(/* turbopackIgnore: true */ pluginFactory);
            }
            if (pluginFactory.default) {
                pluginFactory = pluginFactory.default;
            }
            return pluginFactory(options);
        }
        return plugin;
    });
    processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postcss$2f$lib$2f$postcss$2e$mjs__$5b$postcss$5d$__$28$ecmascript$29$__["default"])(loadedPlugins);
};
async function transform(ipc, cssContent, name, sourceMap) {
    const { css, map, messages } = await processor.process(cssContent, {
        from: name,
        to: name,
        map: sourceMap ? {
            inline: false,
            annotation: false
        } : undefined
    });
    const assets = [];
    const filePaths = [];
    const buildFilePaths = [];
    const directories = [];
    for (const msg of messages){
        switch(msg.type){
            case 'asset':
                assets.push({
                    file: msg.file,
                    content: msg.content,
                    sourceMap: !sourceMap ? undefined : typeof msg.sourceMap === 'string' ? msg.sourceMap : JSON.stringify(msg.sourceMap)
                });
                break;
            case 'dependency':
            case 'missing-dependency':
                filePaths.push((0, __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$transforms$2f$transforms$2e$ts__$5b$postcss$5d$__$28$ecmascript$29$__["toPath"])(msg.file));
                break;
            case 'build-dependency':
                buildFilePaths.push((0, __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$transforms$2f$transforms$2e$ts__$5b$postcss$5d$__$28$ecmascript$29$__["toPath"])(msg.file));
                break;
            case 'dir-dependency':
                directories.push([
                    (0, __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$transforms$2f$transforms$2e$ts__$5b$postcss$5d$__$28$ecmascript$29$__["toPath"])(msg.dir),
                    msg.glob
                ]);
                break;
            case 'context-dependency':
                directories.push([
                    (0, __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$transforms$2f$transforms$2e$ts__$5b$postcss$5d$__$28$ecmascript$29$__["toPath"])(msg.dir),
                    '**'
                ]);
                break;
            default:
                break;
        }
    }
    ipc.sendInfo({
        type: 'dependencies',
        filePaths,
        directories,
        buildFilePaths,
        envVariables: (0, __TURBOPACK__imported__module__$5b$turbopack$2d$node$5d2f$transforms$2f$transforms$2e$ts__$5b$postcss$5d$__$28$ecmascript$29$__["getReadEnvVariables"])()
    });
    return {
        css,
        map: sourceMap ? JSON.stringify(map) : undefined,
        assets
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e4506ace._.js.map