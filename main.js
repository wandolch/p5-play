import * as p5 from 'p5';

let sketch = function () { 
  let winXP, win2000, win98;
  let mode = 'win98';

  this.preload = () => {
    winXP = this.loadImage('https://upload.wikimedia.org/wikipedia/de/9/9e/Windows-Explorer_Windows_XP.png');
    win2000 = this.loadImage('./assets/win2000.png');
    win98 = this.loadImage('./assets/win98.png');
  }

  this.setup = () =>{
      this.createCanvas(window.innerWidth,window.innerHeight);
  }

  this.draw = () => {
    if (this.mouseIsPressed && this.mouseX + this.mouseY !== 0) {
      switch (mode) {
        case 'winXP':
          this.image(winXP, this.mouseX-150, this.mouseY-10);
          break;
        case 'win2000':
          this.image(win2000, this.mouseX-150, this.mouseY-10);
          break;
        case 'win98':
          this.image(win98, this.mouseX-150, this.mouseY-10);
          break;
      }
    }
  }

}

const P5 = new p5(sk => sketch.call(sk));


