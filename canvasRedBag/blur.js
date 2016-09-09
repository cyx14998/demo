var canvasWidth = 800;
var canvasHeight = 600;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();

var radius = 50;
//剪辑区域
/*var clippingRegion = {x: 400 , y: 200 , r: 50};*/

/*var clippingRegion = {x: 400 , y: 200 , r: radius};*/
var clippingRegion = {x: 400 , y: 200 , r: radius};
image.src = "blur.jpg";
image.onload = function(e){
    initCanvas();
    //draw(image); //画图片
}


function initCanvas(){
    /*clippingRegion = {x: 400 , y: 200 , r: 50};*/
    //clippingRegion = {x: Math.random()*700+50 ,y: Math.random()*500+50 ,y: 50};*/

    clippingRegion = {x: Math.random()*(canvas.width-2*radius)+radius,
                      y: Math.random()*(canvas.height-2*radius)+radius,
                      r: radius};
    draw(image , clippingRegion );
}

function draw(image , clippingRegion){

    context.clearRect( 0 , 0 , canvasWidth , canvasHeight );

    context.save();
    setClippingRegion(clippingRegion);//剪辑区域
    context.drawImage( image , 0 , 0 );
    context.restore();
}

function setClippingRegion(clippingRegion){

    context.beginPath();
    context.arc( clippingRegion.x ,clippingRegion.y ,clippingRegion.r ,0 ,Math.PI*2 ,false);
    context.clip();
}

function show(){
    /*clippingRegion.r = 1000;
    draw( image ,clippingRegion );*/

    /*setInterval(
        function(){
            console.log("1");
            clippingRegion.r += 20;
            draw( image ,clippingRegion );
        },30
    )*/
    var animation = setInterval(
        function(){
            console.log("1");
            clippingRegion.r += 20;
            /*if(clippingRegion.r > 1000){*/
            if(clippingRegion.r > 2*Math.max(canvas.width,canvas.height)){
                clearInterval(animation);
            }
            draw( image ,clippingRegion );
        },30
    )
}

function reset(){
    initCanvas();
}