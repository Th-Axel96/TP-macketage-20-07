const theme = document.querySelectorAll(".theme");

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.body.classList.remove("moonTheme", "sunTheme");
    switch (e.target.id) {
      case "moon":
        document.body.classList.add("moonTheme");
        break;
      case "sun":
        document.body.classList.add("sunTheme");
        break;
      default:
        null;
    }
  });
});
