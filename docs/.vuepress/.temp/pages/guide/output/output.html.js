import comp from "/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/output/output.html.vue"
const data = JSON.parse("{\"path\":\"/guide/output/output.html\",\"title\":\"Export data\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"General\",\"slug\":\"general\",\"link\":\"#general\",\"children\":[]},{\"level\":2,\"title\":\"Chant export\",\"slug\":\"chant-export\",\"link\":\"#chant-export\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/output/output.md\"}")
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
