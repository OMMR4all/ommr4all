import comp from "/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/local-use.html.vue"
const data = JSON.parse("{\"path\":\"/guide/local-use.html\",\"title\":\"Local Use\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Installation\",\"slug\":\"installation\",\"link\":\"#installation\",\"children\":[]}],\"git\":{\"updatedTime\":1753362455000,\"contributors\":[{\"name\":\"timeipert\",\"username\":\"timeipert\",\"email\":\"tim.eipert@gmail.com\",\"commits\":1,\"url\":\"https://github.com/timeipert\"}],\"changelog\":[{\"hash\":\"884cc3f7127a8b7121d73d6b1a01be07ed43e285\",\"time\":1753362455000,\"email\":\"tim.eipert@gmail.com\",\"author\":\"timeipert\",\"message\":\"Added some text and header image\"}]},\"filePathRelative\":\"guide/local-use.md\"}")
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
