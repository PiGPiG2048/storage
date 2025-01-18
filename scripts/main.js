import {menu} from "./scenes/menu.js"

export const view = document.querySelector("#view")
export const ctx = view.getContext("2d")

export let clickPos = {
	x: 0,
	y: 0
}

view.addEventListener("click", e => {
	clickPos.x = e.clientX
	clickPos.y = e.clientY
})

export function clearScene() {
	view.innerHTML = ""
	ctx.clearRect(0, 0, view.width, view.height)
}
function loadScene(scene) {
	clearScene()
	scene.load()
}

function update() {
	
	setInterval(20, )
	
}

function main() {
	loadSence(menu)
}

console.log("hello world")
main()
