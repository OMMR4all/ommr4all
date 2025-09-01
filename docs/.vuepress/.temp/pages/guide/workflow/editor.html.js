import comp from "/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/editor.html.vue"
const data = JSON.parse("{\"path\":\"/guide/workflow/editor.html\",\"title\":\"Editor\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[\"general.md\"]},\"headers\":[{\"level\":2,\"title\":\"General\",\"slug\":\"general\",\"link\":\"#general\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/workflow/editor.md\"}")
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
