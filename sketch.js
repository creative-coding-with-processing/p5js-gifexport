var mycanvas;

var gif;

function setup() {
  mycanvas = createCanvas(540,540);
  background('#0000ff');
  frameRate(10);
  gif = new GIF({
    workerScript: "../gifmaker/libraries/gif.worker.js",
    workers: 2,
    quality: 10
  });
  gif.on('finished', function(blob) {
    window.open(URL.createObjectURL(blob));
  });
}

function draw() {
    background('#0000ff');



gif.addFrame(mycanvas.elt, {delay: 200});

if (frameCount == 10){

gif.render();

}

}
