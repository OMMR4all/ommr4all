import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'OMMR4all',
  description: 'Automatic Transcription of Medieval Music Manuscripts',

  theme: defaultTheme({
    logo: '',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
