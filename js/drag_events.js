const dragableEment = document.querySelector("#dragableElement");
const dropZone = document.querySelector("#dropZone");
const scrollElement = document.querySelector("#scrollElement");

const onDrag = event => console.log(`offset: ${event.offsetX}, ${event.offsetY}`);
const onDragStart = () => console.log("drag start");
const onDragEnd = () => console.log("drag end");
const onDragEnter = () => console.log("drag enter");
const onDragOver = event => {
  event.preventDefault();
  console.log("drag over");
}
const onDragLeave = () => console.log("drag leave");
const onDrop = event => {
  event.preventDefault();
  event.target.appendChild(dragableEment);
};
const onScroll = () => console.log("scroll");

const init = () => {
  dragableEment?.setAttribute("draggable", true);
  dragableEment?.addEventListener("drag", onDrag);
  dragableEment?.addEventListener("dragstart", onDragStart);
  dragableEment?.addEventListener("dragend", onDragEnd);
  dropZone?.addEventListener("dragenter", onDragEnter);
  dropZone?.addEventListener("dragover", onDragOver);
  dropZone?.addEventListener("dragleave", onDragLeave);
  dropZone?.addEventListener("drop", onDrop);
  scrollElement?.addEventListener("scroll", onScroll);
}

init();
