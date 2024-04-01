// Database Paths
const databaseTemp = database.ref("/dht/temp");
const databaseHum = database.ref("/dht/hum");
const databaseMQ2 = database.ref("/mq2");
const databaseLedLiving = database.ref("/living/ledStatus");
// Variables to save database current values
var x;
var y;
var z;
var ledLiving;
// Attach an asynchronous callback to read the data
databaseTemp.on(
  "value",
  (snapshot) => {
    x = snapshot.val();
    // test kết quả
    console.log(x);
    updateElement("reading-temp", x);
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);

databaseHum.on(
  "value",
  (snapshot) => {
    y = snapshot.val();
    // test kết quả
    console.log(y);
    updateElement("reading-hum", y);
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);

databaseMQ2.on(
  "value",
  (snapshot) => {
    z = snapshot.val();
    // test kết quả
    console.log(z);

    updateElement("reading-mq2", z);
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);

databaseLedLiving.on(
  "value",
  (snapshot) => {
    ledLiving = snapshot.val();
    // if (ledLiving == 1) ledLiving = "ON";
    // else ledLiving = "OFF";
    ledLiving = ledLiving == 1 ? "ON" : "OFF";
    // test ket qua
    console.log(ledLiving);
    updateElement("led-Living", ledLiving);
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);

// Function to update DOM element safely
function updateElement(elementId, newValue) {
  var element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = newValue;
  } else {
    console.log("Không tìm thấy phần tử với id '" + elementId + "'");
  }
}
