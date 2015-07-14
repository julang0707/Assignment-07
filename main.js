var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
//answer 1
//new array of prices from items.js
function getAvg(items){
   var prices = items.map(function(item){
     return item.price;
   })
//getting total of all the prices in the array
   var sum = prices.reduce(function(total, val){
     return total + val;
   });
//calculating the average
   return sum / items.length;
};
ans1.innerHTML = getAvg(items).toFixed(2);

//log the answer in question1


//same as above; using chain method
// function getAvg(items){
//     return items.map(function(item){
//       return item.price;
//     }).reduce(function(total, val){
//       return total + val;
//     }) / items.length;
// };

//answer 2
function priceScan(items){
  var prices = items.forEach(function (items){
    if (items.price > 14 && items.price < 18)
    console.log(items.title);
  })
};
ans2.innerHTML = priceScan(items);



//answer 3
var currCode = items.filter(
  function(curr){
    return items.currency_code === "GBP";
  }
);
console.log(currCode);




//answer 4
items.filter(
  function(kind){
    return items.materials == "wood";
    console.log(items.materials);
  }
);
