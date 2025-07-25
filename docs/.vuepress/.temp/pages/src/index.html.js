import comp from "/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/src/index.html.vue"
const data = JSON.parse("{\"path\":\"/src/\",\"title\":\"OMMR4all\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"OMMR4all\",\"heroImage\":\"/images/ommr.png\",\"heroText\":\"Optical Medieval Music Recognition for All\",\"tagline\":\"A modular pipeline for the automatic transcription of medieval music notation\",\"actions\":[{\"text\":\"Learn More\",\"link\":\"/guide/get-started.html\",\"type\":\"secondary\"},{\"text\":\"Try it out\",\"link\":\"https://ommr4all.informatik.uni-wuerzburg.de\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Complete Digital Pipeline\",\"details\":\"OMMR4all provides a full suite of tools from manuscript image preprocessing to editable digital chant encodings in MEI format.\"},{\"title\":\"Specialized for Medieval Notation\",\"details\":\"It is optimized for square notation and suited for other notations.\"},{\"title\":\"Modular and Open Source\",\"details\":\"each module (detection, transcription, correction) can be used independently and integrated into your own workflows.\"}],\"footer\":\"MIT Licensed | Copyright © 2025 OMMR4all | [Impressum](https://www.uni-wuerzburg.de/sonstiges/impressum/)\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"src/index.md\"}")
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
