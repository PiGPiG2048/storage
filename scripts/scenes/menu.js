import {view, ctx, clickPos, clearScene, loadScene} from "../main.js"
import { paintButton } from "../ui/Components.js"
import { CL } from "./CL.js"
//import { setting } from "./setting.js"

export let menu = {
	load: function(){
		clearScene()
		ctx.font = "80px serif"
		ctx.fillText("设置",220,600)
		paintButton(175,600,250,150,"rgba(200,200,200,255)",() => {
			alert("少女施工中")
		})
		ctx.fillText("开始",550,600)
		paintButton(505,600,250,150,"rgba(200,200,200,255)",() => {
			loadScene(CL)
		})
		ctx.fillText("退出",645,600)
		paintButton(835,600,250,150,"rgba(200,200,200,255)",() => {
			window.opener = null
			window.open("","_self")
			window.close()
		})
	}
}
