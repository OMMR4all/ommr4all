import comp from "/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/getting_started/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/guide/getting_started/getting-started.html\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[\"home.md\"]},\"headers\":[{\"level\":3,\"title\":\"What is OMMR4all?\",\"slug\":\"what-is-ommr4all\",\"link\":\"#what-is-ommr4all\",\"children\":[]},{\"level\":3,\"title\":\"Key Goals and Use Cases\",\"slug\":\"key-goals-and-use-cases\",\"link\":\"#key-goals-and-use-cases\",\"children\":[]},{\"level\":2,\"title\":\"Workflow\",\"slug\":\"workflow\",\"link\":\"#workflow\",\"children\":[]},{\"level\":2,\"title\":\"FAQ\",\"slug\":\"faq\",\"link\":\"#faq\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/getting_started/getting-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
