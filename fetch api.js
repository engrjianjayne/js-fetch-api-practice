// F E T C H   A P I   E X A M P L E

let file = 'fetch_info.txt'

fetch (file) 
  .then(x => x.text())
  .then(y = document.getElementById('demo').innerHTML = y);


// F E T C H   A P I  
// Since Fetch is based on async and await, the example above might be easier to understand like this:

getText('fetch_info.txt');

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.getElementById('demo').innerHTML = y;
}

// F E T C H   A P I  
// Or even better: Use understandable names instead of x and y:

getText("fetch_info.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById('demo').innerHTML = myText;
}