const mouse = document.querySelector("#mouse");

const onClick = event => {
  console.log(`target: 
    ${event.target.id ? event.target.id : event.target.localName}`);
  console.log(`screen: ${event.screenX}, ${event.screenY}`);
  console.log(`client: ${event.clientX}, ${event.clientY}`);
  console.log(`page: ${event.pageX}, ${event.pageY}`);
}
const onDblClick = () => console.log("dblclick");
const onMouseDown = () => console.log("mouse down");
const onMouseUp = () => console.log("mouse up");
const onMouseOver = () => console.log("mouse over");
const onMouseMove = () => console.log("mouse move");
const onMouseOut = () => console.log("mouse out");
const onWheel = () => console.log("wheel");

const init = () => {
  document.addEventListener("click", onClick);
  document.addEventListener("dblclick", onDblClick);
  document.addEventListener("wheel", onWheel);
  mouse?.addEventListener("mousedown", onMouseDown);
  mouse?.addEventListener("mouseup", onMouseUp);
  mouse?.addEventListener("mouseover", onMouseOver);
  mouse?.addEventListener("mousemove", onMouseMove);
  mouse?.addEventListener("mouseout", onMouseOut);
}

init();
