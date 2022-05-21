const btn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("menu");

let isClosed = true;

btn.addEventListener("click", () => {
  if (isClosed) {
    btn.style.display = "none";
    closeBtn.style.display = "block";
    nav.style.display = "flex";
  } else {
    btn.style.display = "block";
  }
  isClosed = !isClosed;
});

closeBtn.addEventListener("click", () => {
  if (!isClosed) {
    btn.style.display = "block";
    closeBtn.style.display = "none";
    nav.style.display = "none";
  } else {
    closeBtn.style.display = "block";
  }

  isClosed = !isClosed;
});
