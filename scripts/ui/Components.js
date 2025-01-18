import {view, ctx, clickPos} from "./main.js"

export function paintButton(x,y,w,h,color,onClick){
	ctx.fillStyle = color
	ctx.fillRect(x,y,w,h)
	
	view.addEventListener("click", () => {
		if(clickPos.x >= x && clickPos.x <= x + w && clickPos.y >= x && clickPos.y <= y + h) {
			onClick()
		}
	})
}