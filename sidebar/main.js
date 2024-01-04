const btnSidebar = document.getElementById("btn-sidebar");
const btnClose = document.getElementById("btn-close");
const sidebar = document.querySelector("aside");

const openSidebar = () => {
  sidebar.classList.add("show-sidebar");
  btnSidebar.style.animation = "none";
};

const closeSidebar = () => {
  sidebar.classList.remove("show-sidebar");
  btnSidebar.style.animation = "heartbeat 1s ease infinite";
};

btnSidebar.addEventListener("click", openSidebar);
btnClose.addEventListener("click", closeSidebar);
