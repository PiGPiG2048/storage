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
	let unit = 800 / mapSize
	this.generate = function(){
		for(let i = 0;i< blockPos.length;i++) {
			if (blockPos[i][0] >= mapSize || blockPos[i][1] >= mapSize) continue
			Block(blockPos[i][0] * unit,blockPos[i][1] * unit,unit)
		}
		
		for(let i = 0;i< banBlockPos.length;i++) {
			if (banBlockPos[i][0] >= mapSize || banBlockPos[i][1] >= mapSize) continue
			banBlock(banBlockPos[i][0] * unit,banBlockPos[i][1] * unit,unit)
		}
	}
}
