import {view, ctx, clickPos} from "./main.js"
import { paintButton } from "./ui/Components.js"

export let menu = {
	load: function(){
		clearScene()
		paintButton(175,600,150,250,"rgba(200,200,200,255)",() => {})
		paintButton(505,600,150,250,"rgba(200,200,200,255)",() => {})
		paintButton(835,600,150,250,"rgba(200,200,200,255)",() => {
			window.opener = null;
			window.open("","_self")
			window.close()
		})
	}
}
