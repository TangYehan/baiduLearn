let canvas1 = document.querySelector("#canvas1");
let ctx = canvas1.getContext("2d");

function createGound() {
    ctx.beginPath();
    ctx.rect(0, 0, 1000, 500);
    ctx.fillStyle = "rgb(48, 228, 168)";
    ctx.fill();
    ctx.lineWidth = 8 //边框宽度
    ctx.strokeStyle = "rgb(5, 172, 116)" //边框颜色
    ctx.stroke(); //边框
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(500-3,4);
    ctx.lineTo(500-3,500-4);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "white"
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(500-3,250-3,125,0,2*Math.PI);
    ctx.strokeStyle = "white"
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(500-3,250-3,10,0,2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(4,100);
    ctx.lineTo(100,100);
    ctx.lineTo(100,400);
    ctx.lineTo(4,400);
    ctx.strokeStyle = "white"
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(1000-4,100);
    ctx.lineTo(1000-100,100);
    ctx.lineTo(1000-100,400);
    ctx.lineTo(1000-4,400);
    ctx.strokeStyle = "white"
    ctx.stroke();
    ctx.closePath();


}

createGound()

function createPlayer(){
    
}
