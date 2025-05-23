window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    let logo = document.querySelector(".logo");
    if (window.scrollY < 50) {
        header.style.background = "linear-gradient(to bottom, rgba(17, 17, 17, 1), rgba(17, 17, 17, 1))";
        header.style.height = "75px"; 
        header.style.borderBottom = "2px solid #ffa50b";
        logo.style.width = "100px"; 

    } else {
        header.style.background = "linear-gradient(to bottom, rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0))";
        header.style.height = "50px"; 
        header.style.borderBottom = "2px solid transparent";
        header.style.backdropFilter = "blur(10px)";
        header.style.backdropFilter = "blur(10px)";
        header.style.borderBottom = "none";
        logo.style.width = "75px"; 
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
