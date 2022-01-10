console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket =[];
function addItem (item) {
console.log('in addItem',);
basket.push (item);
return true;

}
console.log('Return true if item is added', addItem('apples'));

function listItem() {
  console.log(basket);
}
listItem();

function empty(basket) {
  basket = [];

}
console.log('This should show undefined' , empty());
