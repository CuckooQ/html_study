const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");

const onSubmit = () => console.log("submit");
const onChange = event => console.log(`change: ${event.target.id}, ${event.target.value}`);
const onInput = event => console.log(`input: ${event.target.id}`);
const onSelect = event => console.log(`select: ${event.target.id}, ${event.target.value}`);
const onFocus = event => console.log(`focus: ${event.target.id}`);
const onBlur = event => console.log(`blur: ${event.target.id}`);
const onContestMenu = event => console.log(`contextMenu: ${event.target.id}`);
const onReset = () => console.log("reset");
const onSearch = () => console.log("search or x");
const onInvalid = event => console.log(`invalid: ${event.target.id}`);

const init = () => {
  form?.addEventListener("submit", onSubmit);
  form?.addEventListener("change", onChange);
  form?.addEventListener("input", onInput);
  form?.addEventListener("select", onSelect);
  form?.addEventListener("contextmenu", onContestMenu);
  form?.addEventListener("reset", onReset);
  form?.addEventListener("search", onSearch);
  nameInput?.addEventListener("focus", onFocus);
  nameInput?.addEventListener("blur", onBlur);
  emailInput?.addEventListener("focus", onFocus);
  emailInput?.addEventListener("blur", onBlur);
  emailInput?.addEventListener("invalid", onInvalid);
}

init();
