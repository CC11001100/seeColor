/*
 *  方块类
 */
function Rect(n,color,specialColor){
	
	createjs.Shape.call(this);
	
	/**
	 * 设置方块的类型
	 */
	this.setRectType=function(type){
		this._RectType=type;
		switch(type){
			case 1:
				this.setColor(color);
				break;
			case 2:
				this.setColor(specialColor);
				break;
		}
	}
	
	/**
	 * 获取方块的类型
	 */
	this.getRectType=function(){
		return this._RectType;
	}
	
	/**
	 * 设置方块的颜色+绘制方块 
	 */
	this.setColor=function(colorString){
		this.graphics.beginFill(colorString);
		this.graphics.drawRect(0,0,400/n-5,400/n-5);
		this.graphics.endFill();
	}
	
	//方块的默认类型是1
	this.setRectType(1);
}

Rect.prototype=new createjs.Shape();
