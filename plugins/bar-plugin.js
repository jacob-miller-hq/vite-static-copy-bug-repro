import { viteStaticCopy } from "vite-plugin-static-copy"

export function barPlugin() {
    const setupPlugin = {
        name: "bar:setup",
        configResolved(config) {
            console.log("Setup bar using", config.configFile)
        },
        transformIndexHtml(html) {
            const matcher = "</body>"
            return html.replace(
                matcher,
                [
                    "<embed src=\"bar.txt\" type=\"text/plain\" />",
                    matcher,
                ].join("\n"),
            )
        }
    }
    const staticCopy = viteStaticCopy({
        targets: [{ src: "static-bar/bar.txt", dest: "." }]
    })
    return [setupPlugin, ...staticCopy]
}