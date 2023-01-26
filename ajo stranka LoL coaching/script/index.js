function myFunction1() {
  var element = document.body;
  element.classList.toggle("darkmode");

  var logo1 = document.getElementById("logo1");
  if (element.classList.contains("darkmode")) {
    logo1.src =
      "/Users/adam/Desktop/skola/AIO/ajo stranka LoL coaching/images/header--footer/logo-(+darkmode)/logo1.png";
  } else {
    logo1.src =
      "/Users/adam/Desktop/skola/AIO/ajo stranka LoL coaching/images/header--footer/logo-(+darkmode)/logo-white.jpg";
  }

  var logo1 = document.getElementById("sun");
  if (element.classList.contains("darkmode")) {
    logo1.src =
      "/Users/adam/Desktop/skola/AIO/ajo stranka LoL coaching/images/header--footer/moon--sun/sun.png";
  } else {
    logo1.src =
      "/Users/adam/Desktop/skola/AIO/ajo stranka LoL coaching/images/header--footer/moon--sun/moon.png";
  }
}
