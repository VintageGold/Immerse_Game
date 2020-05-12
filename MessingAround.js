var cycle = false
var adam = "circle"
var defaultColor =0;


function shaperequest(choice){
	if(choice == "circle"){
		return circle(mouseX,mouseY,(pmouseX%pmouseY))
	}
	else{
		return rect(mouseX,mouseY,(pmouseX%pmouseY),(pmouseY))
	}
}
function setup(){
	createCanvas(windowWidth,windowHeight)
	//defaultColor = colorPallet('#ff0000')
	noLoop()

}
function draw(){
 //line(mouseX,0, pmouseX, windowHeight)
noFill();
shape = shaperequest(adam);
console.log(adam);


}	

function mousePressed() {
return stroke(colorPallet), strokeWeight(random(5));


}
function keyPressed(){
if (keyCode === 32){
	if (cycle == false){
		cycle = true;
		console.log("start");
		return loop();
	}
	else{
		cycle = false;
		console.log("stop");
		return noLoop();
	}
}
if (keyCode === 83){
	adam = "rect";
}
if (keyCode === 67){
	adam = "circle";
}
if (keyCode === 90){
}
}


/*function colorPallet(selection){
	var colorPallet = createColorPicker(selection);
	return colorPallet;
}*/

