fetch("topmenu.html")
  .then(response => response.text())
  .then(data => {
    let container = document.getElementById("menu-container");
    container.innerHTML = data;
  });