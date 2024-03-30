// Side bar settings
const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
// hide the menu
sideNav.style.right = "-250px";
// if function
menuBtn.onclick /*one event*/ = function () {
  if (sideNav.style.right == "-250px") {
    // to 0 to become visible
    sideNav.style.right = "0px";
  } else {
    // it was 250 now to be -250
    sideNav.style.right = "-250px";
  }
};
// happening quickly. Add transition in css
