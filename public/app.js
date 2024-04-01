document.addEventListener("DOMContentLoaded", function () {
  var firebaseConfig = {
    apiKey: "AIzaSyCWkAeV1Uf_Yxh5U-BV3Ky8ymkozYi6nUE",
    authDomain: "esp32-fb-test-18364.firebaseapp.com",
    databaseURL:
      "https://esp32-fb-test-18364-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esp32-fb-test-18364",
    storageBucket: "esp32-fb-test-18364.appspot.com",
    messagingSenderId: "202899615196",
    appId: "1:202899615196:web:aea4cbd9c214da035f7319",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  // bật/tắt light
  document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var isActive = false;

    toggleButton.addEventListener("click", async function () {
      isActive = !isActive;
      try {
        //dùng firebase lấy dữ liệu
        //   await database.ref(`/devices/${deviceId}`).set({ state: newState });
        if (isActive) {
          toggleButton.classList.add("active");
          toggleButton.classList.remove("inactive");
          toggleButton.textContent = "Đang bật";
        } else {
          toggleButton.classList.add("inactive");
          toggleButton.classList.remove("active");
          toggleButton.textContent = "Đã tắt";
        }
      } catch (error) {
        console.error("Error:", err);
      }
    });
  });

  // đóng/mở cửa
  document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton_two");
    var isActive = false;

    toggleButton.addEventListener("click", async function () {
      isActive = !isActive;
      try {
        //   await database.ref(`/devices/${deviceId}`).set({ state: newState });
        if (isActive) {
          toggleButton.classList.add("active");
          toggleButton.classList.remove("inactive");
          toggleButton.textContent = "Đang mở";
        } else {
          toggleButton.classList.add("inactive");
          toggleButton.classList.remove("active");
          toggleButton.textContent = "Đã đóng cửa";
        }
      } catch (error) {
        console.error("Error:", err);
      }
    });
  });
});
