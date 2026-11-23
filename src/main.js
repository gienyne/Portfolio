import { onLangChange } from "./i18n/index.js";
import { resolveRoute } from "./router.js";
import { Sidebar, mountSidebar } from "./components/Sidebar/Sidebar.js";
import { Chat, mountChat } from "./components/Chat/Chat.js";

function renderPage({ resetScroll }) {
  const { route, params } = resolveRoute();

  document.getElementById("sidebar-root").innerHTML = Sidebar(route.nav);
  mountSidebar();

  document.getElementById("page").innerHTML = `
    <div class="page-content">${route.page.render(params)}</div>
  `;
  if (route.page.mount) route.page.mount(params);

  if (resetScroll) window.scrollTo(0, 0);
}

function renderChat() {
  document.getElementById("chat-root").innerHTML = Chat();
  mountChat();
}


window.addEventListener("hashchange", () => renderPage({ resetScroll: true }));

onLangChange(() => {
  renderPage({ resetScroll: false });
  renderChat();
});

renderPage({ resetScroll: false });
renderChat();