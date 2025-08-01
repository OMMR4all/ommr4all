import comp from "/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"OMMR4all\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"OMMR4all\",\"heroImage\":\"/public/ommr.png\",\"heroText\":\"Optical Medieval Music Recognition for All\",\"tagline\":\"A modular pipeline for the automatic transcription of medieval music notation\",\"actions\":[{\"text\":\"Learn More\",\"link\":\"/guide/get-started.html\",\"type\":\"secondary\"},{\"text\":\"Try it out\",\"link\":\"https://ommr4all.informatik.uni-wuerzburg.de\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Complete Digital Pipeline\",\"details\":\"OMMR4all provides a full suite of tools from manuscript image preprocessing to editable digital chant encodings in MEI format.\"},{\"title\":\"Specialized for Medieval Notation\",\"details\":\"It is optimized for square notation and suited for other notations.\"},{\"title\":\"Modular and Open Source\",\"details\":\"each module (detection, transcription, correction) can be used independently and integrated into your own workflows.\"}],\"footer\":\"MIT Licensed | Copyright © 2025 OMMR4all | [Impressum](https://www.uni-wuerzburg.de/sonstiges/impressum/)\"},\"headers\":[],\"git\":{\"updatedTime\":1753432677000,\"contributors\":[{\"name\":\"timeipert\",\"username\":\"timeipert\",\"email\":\"tim.eipert@gmail.com\",\"commits\":4,\"url\":\"https://github.com/timeipert\"}],\"changelog\":[{\"hash\":\"053ac896736f62fc005d418644dadb2030e8d69c\",\"time\":1753432677000,\"email\":\"tim.eipert@gmail.com\",\"author\":\"timeipert\",\"message\":\"added new documentation\"},{\"hash\":\"5feff379834ed4eadfc3a35a40c8732c300f0426\",\"time\":1753424642000,\"email\":\"tim.eipert@gmail.com\",\"author\":\"timeipert\",\"message\":\"change image\"},{\"hash\":\"b7d6f70cb401b2460bb3fbf80091a18d2110dc5f\",\"time\":1753364091000,\"email\":\"tim.eipert@gmail.com\",\"author\":\"timeipert\",\"message\":\"change asset folder\"},{\"hash\":\"884cc3f7127a8b7121d73d6b1a01be07ed43e285\",\"time\":1753362455000,\"email\":\"tim.eipert@gmail.com\",\"author\":\"timeipert\",\"message\":\"Added some text and header image\"}]},\"filePathRelative\":\"index.md\"}")
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
