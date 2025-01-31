let toggle = document.querySelector(".left-side.active");
let btnPhone = document.querySelector(".phone");
let btnDesktop = document.querySelector(".desktop");
let act = toggle.addEventListener("click", function () {
  let tambah = document.querySelector(".left-nav");
  tambah.classList.toggle("open");
  toggle.classList.toggle("fix");
});

const mode = document.getElementById("mode");
btnDesktop.addEventListener("click", lightMode());
function lightMode() {
  const blue = document.querySelectorAll("blue");
  const black = document.querySelectorAll(".black");
  const light = document.querySelectorAll(".light");

  blue.forEach((y) => {
    y.classList.toggle("blue-active");
  });

  light.forEach((x) => {
    x.classList.toggle("check");

    if (x.classList.contains("check")) {
      black.forEach((a) => {
        a.classList.add("black-active");
      });
      btnDesktop.innerHTML = `<img src="./ICON/dark.png" alt="lightMode" />`;
      btnPhone.innerHTML = `<img src="./ICON/dark.png" alt="lightMode" />`;
    } else {
      black.forEach((a) => {
        a.classList.remove("black-active");
      });
      btnDesktop.innerHTML = `<img src="./ICON/light.png" alt="lightMode" />`;
      btnPhone.innerHTML = `<img src="./ICON/light.png" alt="lightMode" />`;
    }
  });
}

lightMode();

// ================= JQUERY===============
$(document).ready(function () {
  // Default state
  $("#my-web").addClass("fade-in").show();
  $(".my-design").hide();

  // Handle Web Design button click
  $(".project-btn").click(function () {
    if (!$("#my-web").is(":visible")) {
      // Tambahkan animasi untuk pergantian
      $(".my-design").removeClass("fade-in").addClass("fade-out");
      setTimeout(() => {
        $(".my-design").hide();
        $("#my-web").removeClass("fade-out").addClass("fade-in").show();
      }, 500); // Delay sesuai durasi animasi
    }

    // Tambahkan class aktif pada tombol
    $(".btn-nav-project").removeClass("btn-nav-active");
    $(this).addClass("btn-nav-active");
  });

  // Handle Design button click
  $(".design-btn").click(function () {
    if (!$(".my-design").is(":visible")) {
      // Tambahkan animasi untuk pergantian
      $("#my-web").removeClass("fade-in").addClass("fade-out");
      setTimeout(() => {
        $("#my-web").hide();
        $(".my-design").removeClass("fade-out").addClass("fade-in").show();
      }, 500); // Delay sesuai durasi animasi
    }

    // Tambahkan class aktif pada tombol
    $(".btn-nav-project").removeClass("btn-nav-active");
    $(this).addClass("btn-nav-active");
  });
});

