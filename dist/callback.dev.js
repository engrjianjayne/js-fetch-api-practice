"use strict";

/*const deliveryPackage = new Promise((resolve, reject) => {
  console.log('Order placed...');

  setTimeout(() =>{
    let isDelivered = Math.random() > 0.5;

    if (isDelivered) {
      resolve('Package delivered successfully!') 
    } else {
      reject('Package delivery failed!')
    }
  }, 3000)
})

deliveryPackage
  .then((message) =>{
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

  console.log('Waiting for the package...');*/
function myDisplay() {
  var myPromise;
  return regeneratorRuntime.async(function myDisplay$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          myPromise = new Promise(function (resolve) {
            resolve('Engr. Jian Jayne Osea');
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(myPromise);

        case 3:
          document.getElementById('demo').innerHTML = _context.sent;
          console.log(myPromise);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

myDisplay();
//# sourceMappingURL=callback.dev.js.map
