//Get the height and width of the main we will use this set canvas to the full
//size of the main element.
var mWidth = document.querySelector('main').offsetWidth;
var mHeight = document.querySelector('main').offsetHeight;

//Create the canvas
var canvas = document.createElement("canvas");
canvas.width = mWidth;
canvas.height = mHeight;
document.querySelector('main').appendChild(canvas);

//Create the context
var ctx = canvas.getContext("2d");

//Draw some sample rectangles
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 10, 55, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (30, 30, 55, 50);
//Track the x,y position
canvas.addEventListener('mousemove', function(evt) {

    //Calculate the x,y cords.
    var rect = canvas.getBoundingClientRect();
    let x = evt.clientX - rect.left;
    let y = evt.clientY - rect.top;
  
    //Write the cords back the UI.
    document.getElementById('trackX').innerHTML = 'X: ' + x;
    document.getElementById('trackY').innerHTML = 'Y: ' + y;
  
  }, false);

  var draw = (function() {

    //Get the height and width of the main we will use this set canvas to the full
    //size of the main element.
    var mWidth = document.querySelector('main').offsetWidth,
      mHeight = document.querySelector('main').offsetHeight,
  
      //Create the canvas
      canvas = document.createElement("canvas"),
  
      //Create the context
      ctx = canvas.getContext("2d"),
  
      //Create the initial bounding rectangle
      rect = canvas.getBoundingClientRect(),
  
      //current x,y position
      x=0,
      y=0;
  
    return {
      //Set the x,y coords based on current event data
      setXY: function(evt) {
        x = (evt.clientX - rect.left) - canvas.offsetLeft;
        y = (evt.clientY - rect.top) - canvas.offsetTop;
      },
  
      //Write the x,y coods to the target div
      writeXY: function() {
        document.getElementById('trackX').innerHTML = 'X: ' + x;
        document.getElementById('trackY').innerHTML = 'Y: ' + y;
      },
  
      //Draw a rectangle
      drawRect: function() {
        //Draw some sample rectangles
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);
      },
  
      getCanvas: function(){
        return canvas;
      },
  
      //Initialize the object, this must be called before anything else
      init: function() {
        canvas.width = mWidth;
        canvas.height = mHeight;
        document.querySelector('main').appendChild(canvas);
  
      }
    };
  
  })();
  
  //Initialize draw
  draw.init();
  
  //Add a mousemove listener to the canvas
  //When the mouse reports a change of position use the event data to
  //set and report the x,y position on the mouse.
  draw.getCanvas().addEventListener('mousemove', function(evt) {
    draw.setXY(evt);
    draw.writeXY();
  }, false);
  

