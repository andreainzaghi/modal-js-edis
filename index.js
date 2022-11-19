/** header up */
document.getElementById("home-section").addEventListener("click", () => {
  document.getElementById("home-section").classList.add("btn-selected");
  if (
    document
      .getElementById("business-section")
      .classList.contains("btn-selected")
  ) {
    document
      .getElementById("business-section")
      .classList.remove("btn-selected");
  }
  showNav("nav-casa");
});
document.getElementById("business-section").addEventListener("click", () => {
  document.getElementById("business-section").classList.add("btn-selected");
  if (
    document.getElementById("home-section").classList.contains("btn-selected")
  ) {
    document.getElementById("home-section").classList.remove("btn-selected");
  }
  showNav("nav-business");
});
document.getElementById("search-section").addEventListener("click", () => {
  if (
    document.getElementById("search-section").classList.contains("btn-close")
  ) {
    document.getElementById("search-section").classList.remove("btn-close");
  } else {
    document.getElementById("search-section").classList.add("btn-close");
  }
});
/** mobile x*/
document.getElementById("burger-section").addEventListener("click", () => {
  if (
    document.getElementById("burger-section").classList.contains("btn-close")
  ) {
    document.getElementById("burger-section").classList.remove("btn-close");
  } else {
    document.getElementById("burger-section").classList.add("btn-close");
  }
});
/** heder down */
const header = document.querySelector("body header");
const main = document.querySelector("body main");
const navs = document.querySelectorAll("body header nav");
const linksWithSubMenu = document.querySelectorAll(
  "body header nav ul li a[data-link]"
);
const subMenu = document.querySelector("body header .sub-menu");
const subMenuSections = subMenu.querySelectorAll("div[data-link]");

const showNav = (strFindNav) => {
  const navIndex = Array.from(navs).findIndex(
    (nav) => nav.getAttribute("data-id") === strFindNav
  );

  if (navIndex === -1) return;

  hideNavs();

  const nav = navs[navIndex];
  nav.classList.remove("hidden");
};

const hideNavs = () => {
  navs.forEach((nav) => nav.classList.add("hidden"));
};

const hideSubMenus = () => {
  subMenu.classList.add("hidden");
  main.classList.remove("blurred");
  linksWithSubMenu.forEach((link) => link.classList.remove("mouseover"));
  subMenuSections.forEach((section) => section.classList.add("hidden"));
};

header.addEventListener("mouseleave", () => {
  hideSubMenus();
});

linksWithSubMenu.forEach((link) => {
  link.addEventListener("mouseover", () => {
    hideSubMenus();
    link.classList.add("mouseover");
    const dataLink = link.getAttribute("data-link");
    const subMenuSectionIndex = Array.from(subMenuSections).findIndex(
      (section) => section.getAttribute("data-link") === dataLink
    );

    if (subMenuSectionIndex === -1) return;

    const subMenuSection = subMenuSections[subMenuSectionIndex];
    subMenuSection.classList.remove("hidden");
    subMenu.classList.remove("hidden");
    main.classList.add("blurred");
  });
});

function ToggleMenu() {
  var x = document.getElementById("conteiner_smartphone");
  if (x.style.display === "block") {
    x.style.display = "none";
    console.log("none");
  } else {
    x.style.display = "block";
    console.log("block");
  }
}

//tab bar smarphone modale

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
