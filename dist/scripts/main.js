let menuButton = document.querySelector("#menu-button");
let drawer = document.querySelector("nav .drawer");
let boll = false;
let backDrop = document.querySelector(".back-drop");
const anchors = document.querySelectorAll('a[href*="#"]');
const workLinks = document.querySelectorAll('a[href*="?work_"]');
const links = document.querySelectorAll(".nav-box a");


backDrop.addEventListener("click", function() {
  drawer.style.transform = "translate(-100%)";
  backDrop.style.display = "none";
});

menuButton.addEventListener("click", function() {
  boll = !boll;

  if (boll) {
    drawer.style.transform = "translateX(0)";
    backDrop.style.display = "block";
  } else {
    drawer.style.transform = "translate(-100%)";
  }
});

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    if (anchor.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    for (let link of links) {
      if (link.getAttribute("href") === blockID) {
        link.className = "active";
      } else {
        link.className = "";
      }
    }
  });
}

for (const workLink of workLinks) {
  workLink.addEventListener("click", event => {
    event.preventDefault();
  });
}




