import comp from "/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/guide/local-use.html.vue"
const data = JSON.parse("{\"path\":\"/guide/local-use.html\",\"title\":\"Local Use\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Installation\",\"slug\":\"installation\",\"link\":\"#installation\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/local-use.md\"}")
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
