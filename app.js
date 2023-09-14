// 實作 darkmode
// target the element
const darkmodeToggle = document.querySelector("#darkmode-toggle");

// design the handler
darkmodeToggleHandler = event => {
  if(event.target.checked){
    document.documentElement.setAttribute("data-theme","dark");
  } else { document.documentElement.setAttribute("data-theme", "light"); }
  }

// bind the event
darkmodeToggle.addEventListener("change", darkmodeToggleHandler)