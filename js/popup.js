var switchp = document.querySelector(".search-switch");
var popup = document.querySelector(".popup-form");
var arrival = popup.querySelector("[name=data-arrival");
var depart = popup.querySelector("[name=data-depart");
var adult = popup.querySelector("[name=adult");
var child = popup.querySelector("[name=child");
var isStorageSupport = true;
var storage1 = "";
var storage2 = "";

try {
  storage1 = localStorage.getItem("adults");
  storage2 = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

if (storage1) {
  adult.value = storage1;
}

if (storage2) {
  child.value = storage2;
}

switchp.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!popup.classList.contains("hidden")) {
    popup.classList.add("visual-off");
    setTimeout(function () {
      popup.classList.add("hidden")
    }, 1000);
  }
  else {
    popup.classList.remove("visual-off");
    popup.classList.remove("hidden");
    popup.classList.add("visual-on");
    setTimeout(function () {
      popup.classList.remove("visual-on")
    }, 1000);
  }
});

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !depart.value || !adult.value || !child.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
    setTimeout(function () {
      popup.classList.remove("modal-error")
    }, 100);
  } else {
    if (isStorageSupport) {
      localStorage.setItem(("adults"), adult.value);
      localStorage.setItem(("children"), child.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!popup.classList.contains("hidden")) {
      popup.classList.add("visual-off");
      setTimeout(function () {
        popup.classList.add("hidden")
      }, 1000);
    }
  }
});
