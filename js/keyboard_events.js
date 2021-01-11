const searchInput = document.querySelector("#search");

// onKeyPress: ctrl, shift, tab, backspace, 한/영키 인식 불가
const onKeyPress = event => console.log(`keypress: ${event.key}`);
const onKeyDown = event => console.log(`keydown: ${event.key}`);
const onKeyUp = event => console.log(`keyup: ${event.key}`);

const init = () => {
    searchInput.addEventListener("keypress", onKeyPress);
    searchInput.addEventListener("keydown", onKeyDown);
    searchInput.addEventListener("keyup", onKeyUp);
}

init();