import * as p5 from 'p5';

let sketch = function () { 
    this.setup = () =>{
        this.createCanvas(window.innerWidth,window.innerHeight);
    }
    this.draw = () => {
      if (this.mouseIsPressed) {
        this.fill(0);
      } else {
        this.fill(255);
      }
      this.ellipse(this.mouseX, this.mouseY, 80, 80);
    }

}

const P5 = new p5(sk => sketch.call(sk));


