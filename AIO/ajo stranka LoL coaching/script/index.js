function myFunction1() {
  var element = document.body;
  element.classList.toggle("darkmode");

  var logo1 = document.getElementById("logo1");
  if (element.classList.contains("darkmode")) {
    logo1.src =
      "/Users/adam/Desktop/skola/AIO/ajo stranka LoL coaching/images/logo1.png";
  } else {
    logo1.src =
      "/Users/adam/Desktop/skola/AIO/ajo stranka LoL coaching/images/logo-white.jpg";
  }

  var logo1 = document.getElementById("sun");
  if (element.classList.contains("darkmode")) {
    logo1.src =
      "/Users/adam/Desktop/skola/AIO/ajo stranka LoL coaching/images/sun.png";
  } else {
    logo1.src =
      "/Users/adam/Desktop/skola/AIO/ajo stranka LoL coaching/images/moon.png";
  }
}
