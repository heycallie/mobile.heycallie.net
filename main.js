function mobileCheck() {
  // removed iPad
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
    navigator.userAgent,
  );
}
if (mobileCheck() === false) {
  window.location = "https://heycallie.net";
}

function checkThatItWorks() {
  console.log("Open recieved");
}

function openApp(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeApp(id) {
  document.getElementById(id).classList.add("hidden");
}
