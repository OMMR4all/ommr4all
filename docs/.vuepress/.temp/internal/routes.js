export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"OMMR4all"} }],
  ["/guide/get-started.html", { loader: () => import(/* webpackChunkName: "guide_get-started.html" */"/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/guide/get-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/guide/local-use.html", { loader: () => import(/* webpackChunkName: "guide_local-use.html" */"/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/guide/local-use.html.js"), meta: {"title":"Local Use"} }],
  ["/guide/workflow-overview.html", { loader: () => import(/* webpackChunkName: "guide_workflow-overview.html" */"/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/guide/workflow-overview.html.js"), meta: {"title":"Workflow Overview"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/timeipert/WebstormProjects/ommr4all/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
