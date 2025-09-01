export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"OMMR4all"} }],
  ["/guide/data_import.html", { loader: () => import(/* webpackChunkName: "guide_data_import.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/data_import.html.js"), meta: {"title":"Import data into OMMR4all"} }],
  ["/guide/faq.html", { loader: () => import(/* webpackChunkName: "guide_faq.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/faq.html.js"), meta: {"title":""} }],
  ["/guide/get-started.html", { loader: () => import(/* webpackChunkName: "guide_get-started.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/get-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/guide/local-use.html", { loader: () => import(/* webpackChunkName: "guide_local-use.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/local-use.html.js"), meta: {"title":"Local Use"} }],
  ["/guide/quick_start.html", { loader: () => import(/* webpackChunkName: "guide_quick_start.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/quick_start.html.js"), meta: {"title":""} }],
  ["/guide/training.html", { loader: () => import(/* webpackChunkName: "guide_training.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/training.html.js"), meta: {"title":"Training new models"} }],
  ["/guide/workflow-overview.html", { loader: () => import(/* webpackChunkName: "guide_workflow-overview.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow-overview.html.js"), meta: {"title":"Workflow Overview"} }],
  ["/guide/getting_started/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting_started_getting-started.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/getting_started/getting-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/guide/getting_started/home.html", { loader: () => import(/* webpackChunkName: "guide_getting_started_home.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/getting_started/home.html.js"), meta: {"title":"Transcribe with OMMR4all"} }],
  ["/guide/getting_started/importing_images.html", { loader: () => import(/* webpackChunkName: "guide_getting_started_importing_images.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/getting_started/importing_images.html.js"), meta: {"title":"Importing Images"} }],
  ["/guide/getting_started/login.html", { loader: () => import(/* webpackChunkName: "guide_getting_started_login.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/getting_started/login.html.js"), meta: {"title":"Logging into OMMR4all"} }],
  ["/guide/getting_started/manuscript_creation.html", { loader: () => import(/* webpackChunkName: "guide_getting_started_manuscript_creation.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/getting_started/manuscript_creation.html.js"), meta: {"title":"Creating a new Manuscript"} }],
  ["/guide/getting_started/permissions.html", { loader: () => import(/* webpackChunkName: "guide_getting_started_permissions.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/getting_started/permissions.html.js"), meta: {"title":"Permissions"} }],
  ["/guide/workflow/editor.html", { loader: () => import(/* webpackChunkName: "guide_workflow_editor.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/editor.html.js"), meta: {"title":"Editor"} }],
  ["/guide/workflow/general.html", { loader: () => import(/* webpackChunkName: "guide_workflow_general.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/general.html.js"), meta: {"title":""} }],
  ["/guide/workflow/training.html", { loader: () => import(/* webpackChunkName: "guide_workflow_training.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/training.html.js"), meta: {"title":"Training new models"} }],
  ["/guide/workflow/workflow.html", { loader: () => import(/* webpackChunkName: "guide_workflow_workflow.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/workflow.html.js"), meta: {"title":"Workflow overview"} }],
  ["/guide/output/output.html", { loader: () => import(/* webpackChunkName: "guide_output_output.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/output/output.html.js"), meta: {"title":"Export data"} }],
  ["/guide/workflow/output/results.html", { loader: () => import(/* webpackChunkName: "guide_workflow_output_results.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/output/results.html.js"), meta: {"title":"Visualize Results"} }],
  ["/guide/workflow/steps/layout.html", { loader: () => import(/* webpackChunkName: "guide_workflow_steps_layout.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/steps/layout.html.js"), meta: {"title":"Layout Annotation"} }],
  ["/guide/workflow/steps/stafflines.html", { loader: () => import(/* webpackChunkName: "guide_workflow_steps_stafflines.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/steps/stafflines.html.js"), meta: {"title":"Staff Line Annotation and Correction"} }],
  ["/guide/workflow/steps/syllabels.html", { loader: () => import(/* webpackChunkName: "guide_workflow_steps_syllabels.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/steps/syllabels.html.js"), meta: {"title":"Assigning Syllables to Neumes"} }],
  ["/guide/workflow/steps/symbols.html", { loader: () => import(/* webpackChunkName: "guide_workflow_steps_symbols.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/steps/symbols.html.js"), meta: {"title":"Symbol Annotation"} }],
  ["/guide/workflow/steps/text.html", { loader: () => import(/* webpackChunkName: "guide_workflow_steps_text.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/workflow/steps/text.html.js"), meta: {"title":"Text Detection"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/guide/getting_started/faq.html", { loader: () => import(/* webpackChunkName: "guide_getting_started_faq.html" */"/home/alexanderh/projects/ommr4all/docs/.vuepress/.temp/pages/guide/getting_started/faq.html.js"), meta: {"title":"FAQ"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
