const anime = (time) =>
  gsap.timeline({
    defaults: {
      duration: time,
    },
  });
anime(0.3).fromTo(".container", { scale: 0 }, { scale: 1 });
anime(0.7).fromTo(".card-box", { scale: 0 }, { scale: 1 });
anime(1).fromTo(".login", { y: -100 }, { y: 0 });

const password = () => {
  let showPass = document.querySelector(".passInput");
  if (showPass.type == "password") {
    showPass.type = "text";
    const eye1 = document.querySelector(".bi-eye");
    eye1.className = "bi bi-eye-slash p-1";
    eye1.style.color = "red";
    anime(0.4).fromTo(
      ".passInput",
      { x: 200, rotation: 0 },
      { x: 0, rotation: 360 }
    );
  } else {
    showPass.type = "password";
    const eye2 = document.querySelector(".bi-eye-slash");
    eye2.className = "bi bi-eye p-1";
    eye2.style.color = "black";
    anime(0.3).fromTo(
      ".passInput",
      { x: 200, rotation: 360 },
      { x: 0, rotation: 0 }
    );
  }
};
function change() {
  let id = document.querySelectorAll(".switch");
  for (let i = 0; i < id.length; i++) {
    let b = i;
    id[i].addEventListener("click", function () {
      this.classList.add("a");
      for (let i = 0; i < id.length; i++) {
        if (i != b) {
          id[i].classList.remove("a");
        }
      }
    });
  }
}

change();
