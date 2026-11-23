import { HomePage } from "./pages/Home/Home.js";
import { ProjectsPage } from "./pages/Projects/Projects.js";
import { ProjectDetailPage } from "./pages/ProjectDetail/ProjectDetail.js";
import { ContactPage } from "./pages/Contact/Contact.js";


const ROUTES = [
  { pattern: /^\/$/, nav: "home", page: HomePage },
  { pattern: /^\/projects$/, nav: "projects", page: ProjectsPage },
  { pattern: /^\/projects\/([\w-]+)$/, nav: "projects", page: ProjectDetailPage, params: ["id"] },
  { pattern: /^\/contact$/, nav: "contact", page: ContactPage },
];

export function resolveRoute() {
  const path = window.location.hash.replace(/^#/, "") || "/";

  for (const route of ROUTES) {
    const match = path.match(route.pattern);
    if (!match) continue;

    const params = {};
    (route.params || []).forEach((name, index) => {
      params[name] = match[index + 1];
    });
    return { route, params };
  }

  return { route: ROUTES[0], params: {} };
}