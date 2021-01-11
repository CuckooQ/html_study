const details = document.querySelector("#details");

const onToggle = () =>  console.log("toggle");

const init = () => details.addEventListener("toggle", onToggle);

init();
