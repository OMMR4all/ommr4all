import comp from "/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"What is OMMR4all?\",\"slug\":\"what-is-ommr4all\",\"link\":\"#what-is-ommr4all\",\"children\":[]},{\"level\":2,\"title\":\"Key goals and usage scenarios\",\"slug\":\"key-goals-and-usage-scenarios\",\"link\":\"#key-goals-and-usage-scenarios\",\"children\":[]}],\"git\":{\"updatedTime\":1753349695000,\"contributors\":[{\"name\":\"timeipert\",\"username\":\"timeipert\",\"email\":\"tim.eipert@gmail.com\",\"commits\":1,\"url\":\"https://github.com/timeipert\"}],\"changelog\":[{\"hash\":\"a666d73dcabfe819c685920edebc7b8c28d87421\",\"time\":1753349695000,\"email\":\"tim.eipert@gmail.com\",\"author\":\"timeipert\",\"message\":\"first commit\"}]},\"filePathRelative\":\"get-started.md\"}")
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
