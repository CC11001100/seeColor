/**
 * 绘制舞台
 */

var stage=new createjs.Stage("gameView");
var gameView=new createjs.Container();
stage.addChild(gameView);

//var s=new createjs.Shape();
//s.graphics.beginFill("#00FF00");
//s.graphics.drawRect(0,0,100,100);
//s.graphics.endFill();

//gameView.addChild(s);

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);


//特殊的那个方块的容差
var diffDegree=30;
//n*n的矩阵
var n=2;
var maxN=7;

//在随机生成颜色的时候[0,500] [500,255*255*255]这两个区间内的颜色将被排除
var edgeColor=10;

function addRect(){
	
	//随机颜色
	var randR=Math.floor(Math.random()*255-edgeColor*2)+edgeColor;
	var randG=Math.floor(Math.random()*255-edgeColor*2)+edgeColor;
	var randB=Math.floor(Math.random()*255-edgeColor*2)+edgeColor;
	
	//特殊方块的颜色
	var specialR=randR-diffDegree>edgeColor?randR-diffDegree:randR+diffDegree;
	var specialG=randG-diffDegree>edgeColor?randG-diffDegree:randG+diffDegree;
	var specialB=randB-diffDegree>edgeColor?randB-diffDegree:randB+diffDegree;
	
	var color="rgb("+randR+","+randG+","+randB+")";
	var specialColor="rgb("+specialR+","+specialG+","+specialB+")";
	
	//特殊方块的位置
	var specialX=Math.floor(Math.random()*n);
	var specialY=Math.floor(Math.random()*n);
	
	//绘制所有方块
	for(var indexX=0;indexX<n;indexX++){
		for(var indexY=0;indexY<n;indexY++){
			var r=new Rect(n,color,specialColor);
			gameView.addChild(r);
			r.x=indexX;
			r.y=indexY;
			if(r.x==specialX && r.y==specialY){
				r.setRectType(2);
			}
			r.x=indexX*(400/n);
			r.y=indexY*(400/n);
			if(r.getRectType()==2){
				//点到特殊方块的时候重绘
				r.addEventListener("click",function(){
					if(n<maxN){
						++n;
					}
					gameView.removeAllChildren();
					addRect();
				});
			}
		}
	}
}

addRect();
