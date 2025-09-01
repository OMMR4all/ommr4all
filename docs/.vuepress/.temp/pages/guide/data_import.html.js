import comp from "/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/data_import.html.vue"
const data = JSON.parse("{\"path\":\"/guide/data_import.html\",\"title\":\"Import data into OMMR4all\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Create Manuscript\",\"slug\":\"create-manuscript\",\"link\":\"#create-manuscript\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/data_import.md\"}")
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
