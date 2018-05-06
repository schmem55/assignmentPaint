var Paint={};
var buttons=["blue","green","red","yellow","pink","white","white"]
var size = 5;


Paint.start=function(){
    Paint.sizeUser();
    var color="black";
    drawLine(color);
}
Paint.sizeUser = function sizeUser(){
    var width=prompt("choose a width for your canvas");
    var height=prompt("choose a height for your canvas");
    Paint.createCanvas(width,height);

}
Paint.createCanvas=function createCanvas(width,height){
    var container = document.createElement("div");
    container.classList.add("canvas");
    container.style.border="solid 2px black";
    container.style.width=""+width+"px";
    container.style.height =""+height+"px";
    container.style.boxSizing="border-box";
    document.body.appendChild(container);
    Paint.createPallet(width,height)
}


Paint.createPallet=function createPallet(width,height){
    
    var pallet=document.createElement("div");
    pallet.classList.add("pallet")
    var palletWidth=pallet.style.width=""+width+"px";
    var palletHeight=pallet.style.height=50+"px";
    pallet.style.backgroundColor="grey";
    document.body.appendChild(pallet)
    

    for(var i =0 ; i<buttons.length-2;i++){
        var button = document.createElement("button");
        button.style.backgroundColor=""+buttons[i];
        button.style.width="" +width/10+"px";
        button.style.height="" +height/30 + "px";


        pallet.appendChild(button);

    }

//create small eraser
    var eraser=document.createElement("button");
    eraser.style.backgroundImage ="url(./images/eraser.jpg)";
    eraser.style.width="" +width/8+"px";
    eraser.style.height="" +height/20 + "px";
    eraser.style.backgroundRepeat="no-repeat"
    eraser.style.backgroundColor="white"
    eraser.style.backgroundSize=" 63% 91%";
    pallet.appendChild(eraser)  

//create big eraser
    var eraser=document.createElement("button");
    eraser.style.backgroundImage ="url(./images/eraser.jpg)";
    eraser.style.width="" +width/10+"px";
    eraser.style.height="" +height/20 + "px";
    eraser.style.backgroundRepeat="no-repeat"
    eraser.style.backgroundColor="white"
    eraser.style.backgroundSize=" 98% 91%";
    pallet.appendChild(eraser)

//create pen button    
    var pen=document.createElement("button");
    pen.style.backgroundImage ="url(./images/pen.jpg)";
    pen.style.width="" +width/10+"px";
    pen.style.height="" +height/20 + "px";
    pen.style.backgroundRepeat="no-repeat"
    pen.style.backgroundColor="white"
    pen.style.backgroundSize=" 98% 91%";
    pallet.appendChild(pen)  

//create cleaner button
    var cleaner=document.createElement("button");
    cleaner.style.backgroundImage ="url(./images/cleaner.png)";
    cleaner.style.width="" +width/10+"px";
    cleaner.style.height="" +height/20 + "px";
    cleaner.style.backgroundRepeat="no-repeat"
    cleaner.style.backgroundColor="white"
    cleaner.style.backgroundSize=" 80% 82%";
    pallet.appendChild(cleaner)  

    
}

Paint.start();



for(var i =0 ; i<buttons.length-1 ;i++){
//colors button clicked
document.getElementsByTagName("button")[i].addEventListener("click",(event)=> {
    var color = event.target;
    size=5;
    color = color.style.backgroundColor;
   
    drawLine(color);
    
    
    })
}
//small eraser clicked
document.getElementsByTagName("button")[5].addEventListener("click",(event)=> {
    
    var color = event.target;
    color = color.style.backgroundColor;
    size=10;
    drawLine(color);
       
})
//big eraser clicked
document.getElementsByTagName("button")[6].addEventListener("click",(event)=> {
    
    var color = event.target;
    color = color.style.backgroundColor;
    size=50;
    drawLine(color);
       
})
//change size button clicked
document.getElementsByTagName("button")[7].addEventListener("click",(event)=> {
    
    size+=5;
    drawLine(color);
       
})
//clear button clicked

document.getElementsByTagName("button")[8].addEventListener("click",(event)=> {

    for(var i =0;i<document.getElementsByClassName('canvas')[0].getElementsByTagName('div').length;i++){
    document.getElementsByClassName('canvas')[0].getElementsByTagName('div')[i].style.backgroundColor="white";
    }
       
});

function drawLine(color){
    document.getElementsByClassName('canvas')[0].addEventListener("mousemove",(e) => {
        if(e.buttons===1){
            var x = e.clientX;
            var y = e.clientY;
            createNewDiv(x,y,color);
            }     
    })
}

function createNewDiv (x,y,color){

        var div=document.createElement('div');
        div.style.position = "absolute";
        div.style.left = x +'px';
        div.style.top =  y +'px';
        div.style.backgroundColor =""+color;
        div.style.width = size + "px";
        div.style.height= size + "px";
        document.getElementsByClassName('canvas')[0].appendChild(div);
    
}