import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'
import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'

export default defineUserConfig({
    plugins: [
        markdownHintPlugin({
          hint: true,
          alert: true,
        }),
        markdownIncludePlugin({
          }),

      ],

    lang: 'en-US',
    base: '/ommr4all/',

    title: 'OMMR4all',
    description: 'Automatic Transcription of Medieval Music Manuscripts',

    theme: defaultTheme({
        logo: 'https://raw.githubusercontent.com/OMMR4all/ommr4all/refs/heads/master/docs/public/ommr.png',

        navbar: ['/', '/guide/getting_started/getting-started', '/guide/workflow-overview', '/guide/local-use'],
        sidebarDepth: 3,
        sidebar: [
          {
            title: 'Getting Started', 
            path: '/guide/getting_started/getting-started', 
            collapsable: true, 
            children: [
              '/guide/getting_started/getting-started', 
              '/guide/getting_started/login',
              '/guide/getting_started/manuscript_creation', 
              '/guide/getting_started/importing_images', 
              '/guide/getting_started/permissions', 

            ]
          },
          {
            title: 'Workflow Overview', 
            path: '/guide/workflow/workflow.md', 
            collapsable: true,
            children: [
              '/guide/workflow/workflow.md',
              '/guide/workflow/training.md',
            ]
          },
          {
            title: 'Editor', 
            path: '/guide/workflow/editor.md', 
            collapsable: true,
            children: [
              '/guide/workflow/editor.md',
              '/guide/workflow/steps/stafflines.md',
              '/guide/workflow/steps/layout.md',
              '/guide/workflow/steps/symbols.md',
              '/guide/workflow/steps/text.md',
              '/guide/workflow/steps/syllabels.md',
              '/guide/workflow/output/results.md',

            ]
          },
          {
            title: 'Output', 
            path: '/guide/output/output.md', 
            collapsable: true,
            children: [
              '/guide/output/output.md',
            ]
          },
        ]
    }),

    bundler: viteBundler(),
})
