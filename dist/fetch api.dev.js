"use strict";

// F E T C H   A P I   E X A M P L E
var file = 'fetch_info.txt';
fetch(file).then(function (x) {
  return x.text();
}).then(y = document.getElementById('demo').innerHTML = y); // F E T C H   A P I  
// Since Fetch is based on async and await, the example above might be easier to understand like this:

getText('fetch_info.txt');

function getText(file) {
  var x, y;
  return regeneratorRuntime.async(function getText$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(file));

        case 2:
          x = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(x.text());

        case 5:
          y = _context.sent;
          document.getElementById('demo').innerHTML = y;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=fetch api.dev.js.map
