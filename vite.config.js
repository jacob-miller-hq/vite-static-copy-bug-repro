import { defineConfig } from 'vite'
import { fooPlugin } from './plugins/foo-plugin'
import { barPlugin } from './plugins/bar-plugin'

const FOO_ENABLED = true
const BAR_ENABLED = true

export default defineConfig({
    plugins: [
        FOO_ENABLED && fooPlugin(),
        BAR_ENABLED && barPlugin(),
    ],
})