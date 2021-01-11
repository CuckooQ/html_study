const onload = () => {
  alert("load");
}

const onBeforeUnload = () => {
  console.log("before unload");
}

const onUnload = () => {
  console.log("unload");
}

const onError = () => {
  alert("error");
}

const onOnline = () => {
  console.log("online");
}

const onOffline = () => {
  console.log("offine");
}

const onPageShow = () => {
  console.log("page show");
}

const onPageHide = () => {
  console.log("page hide");
}

const onBeforePrint = () => {
  console.log("before print");
}

const onAfterPrint = () => {
  console.log("after print");
}

const onResize = () => {
  console.log("resize");
}

const onMessage = () => {
  console.log("message");
}

const onPopState = () => {
  console.log("popstate");
}

const onHashChange = () => {
  console.log("hashchange");
}

const onStorage = () => {
  console.log("storage");
}

const init = () => {
  window.addEventListener("load", onload);
  window.addEventListener("beforeunload", onBeforeUnload);
  window.addEventListener("unload", onUnload);
  window.addEventListener("error", onError);
  window.addEventListener("online", onOnline);
  window.addEventListener("offline", onOffline);
  window.addEventListener("pageshow", onPageShow);
  window.addEventListener("pagehide", onPageHide);
  window.addEventListener("beforeprint", onBeforePrint);
  window.addEventListener("afterprint", onAfterPrint);
  window.addEventListener("resize", onResize);
  window.addEventListener("message", onMessage);
  window.addEventListener("popstate", onPopState);
  window.addEventListener("hashchange", onHashChange);
  window.addEventListener("storage", onStorage);
}

init();
