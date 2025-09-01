export const themeData = JSON.parse("{\"logo\":\"https://raw.githubusercontent.com/OMMR4all/ommr4all/refs/heads/master/docs/public/ommr.png\",\"navbar\":[\"/\",\"/guide/getting_started/getting-started\",\"/guide/workflow-overview\",\"/guide/local-use\"],\"sidebarDepth\":3,\"sidebar\":[{\"title\":\"Getting Started\",\"path\":\"/guide/getting_started/getting-started\",\"collapsable\":true,\"children\":[\"/guide/getting_started/getting-started\",\"/guide/getting_started/login\",\"/guide/getting_started/manuscript_creation\",\"/guide/getting_started/importing_images\",\"/guide/getting_started/permissions\"]},{\"title\":\"Workflow Overview\",\"path\":\"/guide/workflow/workflow.md\",\"collapsable\":true,\"children\":[\"/guide/workflow/workflow.md\",\"/guide/workflow/training.md\"]},{\"title\":\"Editor\",\"path\":\"/guide/workflow/editor.md\",\"collapsable\":true,\"children\":[\"/guide/workflow/editor.md\",\"/guide/workflow/steps/stafflines.md\",\"/guide/workflow/steps/layout.md\",\"/guide/workflow/steps/symbols.md\",\"/guide/workflow/steps/text.md\",\"/guide/workflow/steps/syllabels.md\",\"/guide/workflow/output/results.md\"]},{\"title\":\"Output\",\"path\":\"/guide/output/output.md\",\"collapsable\":true,\"children\":[\"/guide/output/output.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
