import { viteStaticCopy } from "vite-plugin-static-copy"

export function fooPlugin() {
    const setupPlugin = {
        name: "foo:setup",
        configResolved(config) {
            console.log("Setup foo using", config.configFile)
        },
        transformIndexHtml(html) {
            const matcher = "</body>"
            return html.replace(
                matcher,
                [
                    "<embed src=\"foo.txt\" type=\"text/plain\" />",
                    matcher,
                ].join("\n"),
            )
        }
    }
    const staticCopy = viteStaticCopy({
        targets: [{ src: "static-foo/foo.txt", dest: "." }]
    })
    return [setupPlugin, ...staticCopy]
}