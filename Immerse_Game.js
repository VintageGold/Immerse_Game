//Allow for text to populate circles.


var score = 0;
var masterBubble;
var count = 0;
var bubbles = [];
var bubblesIntersect =[];

function Bubble(id,x,y){
	var move = 0;
	var height = 100;
	var zoom = 0;
	this.id = id
	this.x = x;
	this.y = y;
	this.r = 100;
	this.col = 0;
	this.letter = 0;
	this.move = 10;
	this.zoom = 0;


	this.changeColor = function(){
		this.col = color(random(255),random(255),random(255))
		return this.col
	}

	this.display = function(){
		stroke(255)
		fill(this.col)
		ellipse(this.x,this.y,this.r*2,this.r*2)
	}

	this.update = function(){ 
		this.x += this.move;
		this.y = window.screen.height/2;
		this.r = this.r;
		return this.x;
	}

	this.intersect = function(other){
		
		//{\sqrt  (}(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}).

		var d = dist(this.x,this.y,other.x,other.y);
		if (d < this.r + other.r && this.r == other.r){
			return true;
		}
		else{
			return false
		}
	}
}

function createBubble(bubbleCount){
	for (var i = 0; i <= bubbleCount; i++){
		bubbles[i] = new Bubble (i,random(width),random(height));
	}
	
	console.log('Bubbles: ', bubbles.length)

	masterBubble = bubbles.shift();

	masterBubble.r = 20;
	masterBubbleColor = 2;
	console.log('Master Bubble: ', masterBubble)
	console.log('Target Bubbles:',bubbles.length)


	console.log('Target Bubbles:',bubbles)
	console.log('Master Bubble:',masterBubble)
}

function replaceBubble(bubbles, bubbleIntersect){
	for (var j = 0; j < bubbles.length; j++){
		if (bubbles[j].x > window.screen.width && bubbles[j] in bubbleIntersect){
			bubbles.pop(bubbles[j])

		}
	}
	return bubbles


}

function setup() {
	createCanvas(window.screen.width, window.screen.height);
	createBubble(prompt('Enter How Many Bubbles'))

}

function draw(){
	background(0);

	count += 1/60

	textSize(32);
  	fill(masterBubble.col);
  	text('Score: '+ score,50,50);

  	textSize(32);
  	fill(masterBubble.col);
  	text('Time: '+ round(count),50,100);




/*
  	textSize(32);
  	fill(masterBubble.r);
  	text('Master Bubble Zoom: '+ bubbles[0].zoom,50,80);
	textSize(32);
  	fill(masterBubble.zoom);
  	text('Master Bubble Zoom: '+ masterBubble.x,50,110);

	textSize(32);
  	fill(bubbles[3].col);
  	text('3: '+ bubbles[3].x,50,140);*/
	

	/*Moves main circle up down left and right*/
	if (masterBubble.r != 0 && masterBubble.r < window.screen.height + 400) {
		masterBubble.r += masterBubble.zoom;
	}
	else{
		masterBubble.r = masterBubble.r
	}
	if (masterBubble.x !== 0 && masterBubble.x < window.screen.width) {
		masterBubble.x += masterBubble.move;
	}
	else{
		masterBubble.x = masterBubble.x
		bubbles = replaceBubble(bubbles, bubblesIntersect)
	}




	for (var i = 0; i < bubbles.length;i++){
		
		masterBubble.update();
		masterBubble.display();

		bubbles[i].update();
		bubbles[i].display();

		if (masterBubble.intersect(bubbles[i])){
			masterBubbleColor = masterBubble.changeColor();
			bubbles[i].col = masterBubbleColor;
			bubblesIntersect.push(bubbles[i])
			score = score + 1;
			console.log('Bubble Match: ', bubblesIntersect);
	


		}
		if (bubbles[i].x > window.screen.width){
			bubbles[i].x = 0;

		}
		else if (bubbles[i].x < 0){
			bubbles[i].x = window.screen.width;
		}

		if (masterBubble.x > window.screen.width){
			masterBubble.x = 0;

		}
		else if (masterBubble.x < 0){
			masterBubble.x = window.screen.width;
		}

	}

}

//Move master circle
function keyPressed(zoom){
  if(keyCode === RIGHT_ARROW){
    masterBubble.move = 1; 
    return false;
  }
 
  else if (keyCode === LEFT_ARROW){
    masterBubble.move = -2;
    return false;
  }
  else if (keyCode === UP_ARROW){
    masterBubble.zoom = -1;
    return false;
  }
  else if (keyCode === DOWN_ARROW){
    masterBubble.zoom = 1;
    return false;
  }
  else if (keyCode === 97){
    exampleBubble.move = -1;
    return false;

  return false; 
  }
  
/*
  else if (keyCode == 13){
    cycle = false
  while (cycle === false){
    a = float(prompt('Enter a time'))
    factor = a
    noLoop()
    cycle = true
    }
  }
  else if (keyCode == 32){
    cycle = true
    loop()
  }
  else if (keyCode == 83){
    cycle = true
    loop()

  }
  else if (keyCode == 82){
    factor = .001;
  }*/

}
function keyReleased(){
	if(keyCode === RIGHT_ARROW){
    	if (masterBubble.x < window.screen.width){
        	masterBubble.x = masterBubble.x + 1;
        	move = 1;
        	return false;
		}

    }
	else if (keyCode === LEFT_ARROW){
    	if (masterBubble.x !== 0){
        	masterBubble.x = masterBubble.x - 2;
        	move = -2
        	return false;
    	} 
  	}

	else if (keyCode === UP_ARROW){
    	if (masterBubble.r !== 0){
      		masterBubble.r = masterBubble.r - 1;
      		return false;
    }
    
  }
	else if (keyCode === DOWN_ARROW){
		if (masterBubble.r !== window.screen.height){
    	masterBubble.r = masterBubble.r + 1;
    	return false;
    }

    return false;

}


  	/*
  	else if (keyCode == 82){
    	exampleBubble.move += 1;
  	}
  	else{
    	return masterBubble.x;
  }*/
}
