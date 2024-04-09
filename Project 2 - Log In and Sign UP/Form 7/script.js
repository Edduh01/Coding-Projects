function iconColorSet(id) {
  let x = document.getElementById(id);
  x.style.color = "aqua";
  x.style.marginLeft = "210px";
  x.style.transition = "0.1s linear";
}

function iconColorReset(id) {
  let x = document.getElementById(id);
  x.style.color = "black";
  x.style.marginLeft = "200px";
  x.style.transition = "0.1s linear";
}

function moveDivs(btn) {
  if (btn == "join-btn") {
    let x = document.getElementsByClassName("right-window");
    let y = document.getElementsByClassName("left-window");
    let z = document.getElementsByClassName("reg-form");

    x[0].classList.add("move-div-right");
    y[0].classList.add("move-div-left");

    setTimeout(
      (gr = () => {
        x[0].style.display = "none";
        y[0].style.display = "none";
        z[0].style.display = "flex";
        z[0].classList.add("scale-up-div");
      }),
      800
    );
  } else if (btn == "login-btn") {
    let x = document.getElementsByClassName("right-window");
    let y = document.getElementsByClassName("left-window");
    let z = document.getElementsByClassName("reg-form");
    z[0].classList.add("scale-in-div");

    setTimeout(
      (gr = () => {
        x[0].style.display = "flex";
        y[0].style.display = "flex";
        z[0].style.display = "none";
        z[0].classList.remove("scale-in-div");

        x[0].classList.add("in-left");
        y[0].classList.add("in-right");
      }),
      800
    );
  }
}
