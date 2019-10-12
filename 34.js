var arrayList = ["a", "b", "c", "d", "e", "f"];
var anotherArrayList = arrayList;
arrayList = [];
console.log(anotherArrayList);

/**
 * A) ["a", "b", "c", "d", "e", "f"]
 * B) null
 * C) []
 * D) undefined
 */


return;


var arrayList2 = ["a", "b", "c", "d", "e", "f"];
var anotherArrayList2 = arrayList2;
arrayList2.length = 0;
console.log(anotherArrayList2);

/**
 * A) ["a", "b", "c", "d", "e", "f"]
 * B) null
 * C) []
 * D) undefined
 */


var arrayList3 = ["a", "b", "c", "d", "e", "f"];
var anotherArrayList3 = arrayList3;
arrayList3.splice(0, arrayList3.length);
console.log(anotherArrayList3);

/**
 * A) ["a", "b", "c", "d", "e", "f"]
 * B) null
 * C) []
 * D) undefined
 */
