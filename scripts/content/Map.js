import {view, ctx, clickPos} from "../main.js"

function Block(x,y,size) {
	ctx.fillStyle = "rgba(0,0,0,255)"
	ctx.fillRect(x,y.size,size)
	
	ctx.strokeStyle = "rgba(0,255,0,255)"
	ctx.strokeRect(x,y.size,size)
	
	view.addEventListener("click", () => {
		if(clickPos.x >= x && clickPos.x <= x + size && clickPos.y >= x && clickPos.y <= y + size) {
			
		}
	})
}

function BanBlock(x,y,size) {
	ctx.fillStyle = "rgba(0,0,0,255)"
	ctx.fillRect(x,y.size,size)
	
	ctx.strokeStyle = "rgba(255,0,0,255)"
	ctx.strokeRect(x,y.size,size)
	
	view.addEventListener("click", () => {
		if(clickPos.x >= x && clickPos.x <= x + size && clickPos.y >= x && clickPos.y <= y + size) {
			
		}
	})
}

function Map(blockPos,banBlockPos,mapSize,waves) {
	this.blockPos = blockPos
	this.banBlockPos = banBlockPos
	this.mapsize = mapsize
	this.waves = waves
	let unit = 800 / this.mapsize
	this.load = function(){
		for(let i = 0;i< this.blockPos.length;i++) {
			if (this.blockPos[i][0] >= this.mapSize || this.blockPos[i][1] >= this.mapSize) continue
			Block(this.blockPos[i][0] * unit,this.blockPos[i][1] * unit,unit)
		}
		
		for(let i = 0;i< this.banBlockPos.length;i++) {
			if (this.banBlockPos[i][0] >= this.mapSize || this.banBlockPos[i][1] >= this.mapSize) continue
			banBlock(this.banBlockPos[i][0] * unit,this.banBlockPos[i][1] * unit,unit)
		}
	}
}
export let testMap = new Map([[0,0], [0,1],[1,1],[1,2],[2,2]],[],4)
