var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');
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
var priceScan = items.filter(function (items){

  return items.price > 14 && items.price < 18;

}).map(function(item){

  return '<li>' + item.title + '</li>';

}).reduce(function(html, item){

  return html + item;

});

ans2.innerHTML = priceScan;

//
// var priceScan = items.filter(function (items){
//   return items.price > 14 && items.price < 18;
// });
//
// priceScan = priceScan.map(function(item){
//   return '<li>' + item.title + '</li>';
// })
//
// priceScan = priceScan.reduce(function(html, item){
//   return html + item;
// });
// console.log(priceScan3);





//answer 3
var curCode = items.filter(function (items){

  return items.currency_code === "GBP";

}).map(function(item){

  return '<p>' + item.title + " costs " + '&#163;' + item.price + '</p>'

}).reduce(function(html, item){

  return html + item;

});
ans3.innerHTML = curCode;




//answer 4
var wood = items.filter(function(item){
  return item.materials.indexOf('wood') !== -1;
}).map(function(item){
  return '<li>' + item.title + ' is made of wood' + '</li>';
}).reduce(function(html, item){
  return html + item;
});

ans4.innerHTML = wood;

// var kindMat = items.filter(function(items){
//   return items.materials;
//   var matType = materials.filter(function(items){
//     return items.materials === "wood";
//   })
// });

// console.log(kindMat);



//answer 5
function eight(items, materialsLength){
 return items.filter(function(item){
   return item.materials.length >= materialsLength;
 }).map(function(item){

   return '<li>' + item.title + ' has ' + materialsLength + ' materials: ' + '<p>' + item.materials + '</p>' + '</li>';
 }).reduce(function(html, item){

   return html + item;
 });
}

ans5.innerHTML = eight(items, 8);


//answer 6
var itemMade = items.filter(function(items){
  return items.who_made === "i_did";
});
ans6.innerHTML= itemMade.length + " were made by their sellers"
