var range = document.querySelector("#range");
var stroke = document.querySelector("#stroke")
var canvas = document.getElementById("canvas")
var strokec = document.getElementById("strokec")
var strokew = document.getElementById("strokew")
var ctx = canvas.getContext('2d');

// range.oninput = function fun(){
//     console.log("range.value")

// } 
strokew.addEventListener("input", function fun(){
    console.log(strokew.value);
    stroke.innerText = strokew.value;
})





var x = 0;
var y = 0;
var isdrawing = false


function stopdraw(){
    isdrawing = false;
}


function startdraw(e){
    isdrawing = true;
    x = e.offsetX
    y = e.offsetY
}

function draw(e){


    if( isdrawing == true ){
    const newX = e.offsetX;
    const newY = e.offsetY;

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(newX, newY);
    ctx.stroke()

    x = newX
    y = newY
    
    }
}
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", startdraw);
canvas.addEventListener("mouseup", stopdraw)



strokew.addEventListener('input', ()=>{
    stroke.innerText = strokew.value  ;
    ctx.lineWidth = strokew.value;

});
    strokec.addEventListener('input', function fun(){
        ctx.strokeStyle = strokec.value;
});
    