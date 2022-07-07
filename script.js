function switchMode() {
  let moon = document.getElementById("moon");
  let opt = document.getElementById("dark");

  if (moon.className == "moon") {
    moon.className = "sun";
    opt.style.backgroundColor = "#141D26";
    opt.style.color = "#fff";
    // document.getElementById("opt").style.backgroundColor = "#141D26";
    // document.getElementById("opt").style.color = "#fff";
  } else {
    moon.className = "moon";
    opt.style.backgroundColor = "#fff";
    opt.style.color = "#000";
    // document.getElementById("opt").style.backgroundColor = "#fff";
    // document.getElementById("opt").style.color = "#000";
  }
}
