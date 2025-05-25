window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    let logo = document.querySelector(".logo");
    let top = document.querySelector(".top");

    if (window.scrollY < 50) {
        header.style.background = "url('images/Osu!_Header2.png')";
        header.style.height = "80px"; 
        header.style.borderBottom = "2px solid #a83e67";
        logo.style.width = "50px"; 
        top.style.width = "50px";
        top.style.height = "50px";

    } else {
        header.style.background = "linear-gradient(to bottom, rgba(168, 62, 103, 0.9), rgba(168, 62, 103, 0))";
        header.style.height = "60px"; 
        header.style.borderBottom = "2px solid transparent";
        header.style.backdropFilter = "blur(10px)";
        header.style.borderBottom = "none";
        logo.style.width = "50px";
        top.style.width = "40px";
        top.style.height = "40px";
    }
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.opacity = "1";
  document.getElementById("container").style.marginLeft = "250px";
  document.getElementById("container").style.paddingLeft = "0px";

  let logo = document.querySelector(".logo");
  logo.style.opacity = "0"; 
  setTimeout(() => {
    logo.style.display = "inline";
  }, 300);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.opacity = "0";
  document.getElementById("container").style.marginLeft = "0";
  document.getElementById("container").style.paddingLeft = "250px";

  let logo = document.querySelector(".logo");
  logo.style.display = "inline";
  setTimeout(() => {
    logo.style.opacity = "1"; 
  }, 10);
}
