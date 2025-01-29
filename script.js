function updateUTCTime() {
  document.getElementById("utcTime").textContent =
    "Current UTC Time: " + new Date().toUTCString();
}
updateUTCTime();
setInterval(updateUTCTime, 1000);
