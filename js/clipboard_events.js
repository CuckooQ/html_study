const onCopy = () =>  console.log("copy");
const onCut = () => console.log("cut");
const onPaste = () => console.log("paste");

const init = () => {
  document.addEventListener("copy", onCopy);
  document.addEventListener("cut", onCut);
  document.addEventListener("paste", onPaste);
}

init();
