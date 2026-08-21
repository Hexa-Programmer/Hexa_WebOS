function updateClock() {
  const now = new Date();
  document.getElementById("timeElement").textContent = now.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
  });
}
updateClock();
setInterval(updateClock, 1000);

var windowElement = document.querySelector("#window");
var windowCloseBtn = document.querySelector("#windowclose");
var windowOpenBtn = document.querySelector("#windowopen");

function closeWindow(element) {
  element.style.display = "none";
}

function openWindow(element) {
  element.style.display = "flex";
}

windowCloseBtn.addEventListener("click", function () {
  closeWindow(windowElement);
});

windowOpenBtn.addEventListener("click", function () {
  openWindow(windowElement);
});

dragElement(windowElement);

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = moveElement;
  }

  function moveElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var selectedIcon = undefined;
var hexaNotesApp = document.querySelector("#HexaNotes");

hexaNotesApp.addEventListener("click", function () {
  if (selectedIcon === hexaNotesApp) {
    hexaNotesApp.classList.remove("selected");
    selectedIcon = undefined;
  } else {
    if (selectedIcon) {
      selectedIcon.classList.remove("selected");
    }
    hexaNotesApp.classList.add("selected");
    selectedIcon = hexaNotesApp;
  }
});

dragElement(document.querySelector("#noteswindow"));
