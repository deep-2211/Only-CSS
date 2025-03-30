const secondaryColor = "--secondary-color";

const changeButton = document.querySelector("button");

changeButton.addEventListener("click", (_) => {
  document.documentElement.style.setProperty(secondaryColor, "black");
});
