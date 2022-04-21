// Lorem js

const anime = (time) =>
  gsap.timeline({
    defaults: {
      duration: time,
    },
  });
anime(0.3).fromTo(".container", { scale: 0 }, { scale: 1 });
anime(0.7).fromTo(".card-box", { scale: 0 }, { scale: 1 });
anime(1).fromTo(".login", { y: -100 }, { y: 0 });

class myObject {
  upDateNavbarTitle = () => {};
  static passswordFunction = () => {
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
  navBarAnimation = () => {
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
  };
  radnomISBN = () => {
    const isbn = document.querySelector(".random-isbn");
    isbn.value = `${Math.floor(Math.random() * 1000)}-${Math.floor(
      Math.random() * 1000
    )}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`;
  };
  dateInput = () => {
    const dateIn = document.querySelector(".date-control");
    const time = new Date();
    let month = time.getUTCMonth();
    let day = time.getUTCDate();
    let year = time.getUTCFullYear();

    if (parseInt(day) < 10) {
      day = "0" + day;
    } else if (parseInt(month) < 10) {
      month = "0" + month;
    }

    const marocTime = `${year}-${month}-${day}`;
    console.log(marocTime);
    dateIn.value = marocTime;
  };
}

const webapp = new myObject();

webapp.radnomISBN();
webapp.dateInput();
webapp.navBarAnimation();
