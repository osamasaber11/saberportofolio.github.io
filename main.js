function sidemenu() {
  let sideMenuUl = document.getElementById("side_menu");
  if (sideMenuUl.classList.contains("active")) {
    sideMenuUl.classList.remove("active");
  } else {
    sideMenuUl.classList.add("active");
  }
}

//text typing effect
var typingEffect = new Typed(".auto-type",{
      strings : ["Designer","programmer","editor"],
      loop : true,
      typeSpeed : 120, 
      backSpeed : 120
  }) 

document.addEventListener("click", (event) => {
  let sideMenuUl = document.getElementById("side_menu");
  let toggleMenuIcon = document.querySelector("#toggle");
  
  // Close the menu when clicking outside of it and inside

  // Check if the clicked element is the toggle icon and inside the side menu
  if (
  
    !toggleMenuIcon.contains(event.target) &&
    !sideMenuUl.contains(event.target)
  ) {
    sideMenuUl.classList.remove("active");
  }
});

function darkMode() {
  let darkButton = document.getElementById("darkMode");
  document.body.classList.toggle("dark-theme");
  let imageSwitch = document.getElementById("imgs");
  if (document.body.classList.contains("dark-theme")) {
    imageSwitch.src = "img/2.jpg";
    darkButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    imageSwitch.src = "img/1.jpg";
    darkButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

//contact email 