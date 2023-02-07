let click = 0;
let clickRange = 1;

function clicker() {
  click += clickRange;
  let a = (document.getElementById("paragraph").innerHTML = click);
}

function x2() {
  if (click >= 10) {
    clickRange = 2;
    click = 0;
    let a = (document.getElementById("paragraph").innerHTML = click);
  }
}

function x4() {
    if (click >= 100) {
      clickRange = 4;
      click = 0;
      let a = (document.getElementById("paragraph").innerHTML = click);
    }

  }

  
  function x8() {
    if (click >= 500) {
      clickRange = 8;
      click = 0;
      let a = (document.getElementById("paragraph").innerHTML = click);
    }
  }

  
  function x10() {
    if (click >= 1000) {
      clickRange = 10;
      click = 0;
      let a = (document.getElementById("paragraph").innerHTML = click);
    }
  }
  
