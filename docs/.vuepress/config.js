import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'en-US',
    base: '/ommr4all/',

    title: 'OMMR4all',
    description: 'Automatic Transcription of Medieval Music Manuscripts',

    theme: defaultTheme({
        logo: 'https://raw.githubusercontent.com/OMMR4all/ommr4all/refs/heads/master/docs/public/ommr.png',

        navbar: ['/', '/guide/get-started', '/guide/workflow-overview', 'guide/local-use'],

    }),

    bundler: viteBundler(),
})
