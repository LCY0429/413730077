let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle =0
let r =20

function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
  //為載入在fonts資料夾內的NotoSansTC-VariableFont_wght.ttf字型
  font = loadFont("font/NotoSansTC-VariableFont_wght.ttf") 
}


function setup() { //設定初始內容，只會執行一次
  createCanvas(windowWidth, windowHeight); //產生一個畫布
  angleMode(DEGREES) //設定三角函數的角度用0~360
  //background(0) //黑色背景
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.1
  });
}

function draw() { //畫圖，每秒會畫60次
  background(0); //背景顏色，灰白色(0黑色~255白)
  background("#111111") //設定背景顏色
  rectMode(CENTER) //設定方形的座標點放在方形的中間
  noFill() //以下所畫的未見部要充滿顏色
  stroke("#ffff3f") //線條顏色
  strokeWeight(4) //線條的粗細
  //宣告變數
  var rect_width = 50+ mouseX/10 //方形的寬度
  var bc_width = 50+ mouseY/10 //大圓的寬度
  var sc_width = 25 //小圓的寬度
  //FOR迴圈
  // i=0 : i為變數，要i從0開始(設定i得初始值)
  // i<20 : 條件判斷，當條件成立時，就繼續進到迴圈內的程式碼執行
  // i=i+1 : i值每次改變的差距值，當迴圈內程式碼執行一次完畢後，i值會自動+1
  for(let j=0;j<20;j=j+1){ 
    for(let i=0;i<40;i=i+1){
      if(j<5){ //第0~4排共五排設定顏色
         stroke("#80ffdb")
      }else if(j<10) { //第5~9排共五排設定顏色
         stroke("#64dfdf")
      }else { //第10排以後
          stroke("#6930c3")
      }
      ellipse(25+50*i,25+50*j,bc_width) //在座標(x:25,y:25)畫一個直徑為50的圓
      rect(25+50*i,25+50*j,rect_width) //畫方形，在座標(x:25,y:25)畫一個直徑為50的方形
      ellipse(50+50*i,50+50*j,sc_width) //畫小圓，直徑為25
    }
  } 

  translate(width/2,height/2) //把原本原點(0,0)在左上角，改為到畫部中心點(width/2,height/2)為原點
  //translate(mouseX,mouseY)
  rotate((frameCount%360)) //依照frameCount除以360求餘數
  for (let i=0; i<points.length-1; i++) {
   stroke("#ccff00") //線條的顏色
   strokeWeight(5) //線條的粗細
   line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10)) //畫線，兩個點構成一條線
   //畫線，兩個點第一個點(points[i].x,points[i].y)，第二個點(points[i+1].x,points[i+1].y)
  }
  //==================================================================
   angle=angle+10
}

