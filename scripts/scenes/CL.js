import {view, ctx, clickPos, loadScene} from "../main.js"
import { paintButton } from "../ui/Components.js"
import { menu } from "./menu.js"
import {testMap} from "../content/Map.js"

export let CL = {
	load: function() {
		paintButton(25,25,50,100,"rgba(255,255,255,255)", () => {
			loadScene(menu)
		})
		paintButton(100,100,100,100,"rgba(255,255,255,255)",() => {
			loadScene(testMap)
		})
	}
}
