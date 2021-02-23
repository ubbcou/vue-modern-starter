import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
const modules = import.meta.globEager("./views/**/*.vue");

const routes: RouteRecordRaw[] = [];
let NotFound = null;
let Home = null;

for (const path in modules) {
  const Mod = modules[path].default;
  let exactPath = path.replace("./views", "").replace(/.vue/, "").toLowerCase();

  const _path = exactPath.split("/");
  const routeName = _path[_path.length - 1];

  if (_path.length === 2) {
    if (routeName === "home") {
      Home = Mod;
    } else if (routeName === "notfound") {
      NotFound = Mod;
    } else {
      routes.push({
        name: Mod.name || routeName,
        path: exactPath,
        component: Mod,
      });
    }
  } else {
    if (routeName === "index") {
      exactPath = exactPath.replace("index", "");
      routes.push({
        name: Mod.name || routeName,
        path: exactPath,
        component: Mod,
      });
    } else if (routeName === "[id]") {
      exactPath = exactPath.replace("[id]", "");
      routes.push({
        name: Mod.name || routeName,
        path: `${exactPath}:id`,
        component: Mod,
      });
    } else {
      routes.push({
        name: Mod.name || routeName,
        path: exactPath,
        component: Mod,
      });
    }
  }
}

// first route should be the Home component, if it exists
if (Home) {
  routes.unshift({
    name: "Home",
    path: "/",
    component: Home,
  });
}

// last route should be the NotFound component, if it exists
if (NotFound) {
  routes.push({
    path: "/:path(.*)",
    component: NotFound,
  });
}

console.log(routes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
