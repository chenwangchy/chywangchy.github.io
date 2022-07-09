function fuzzyQuery(list, keyWord) {
    var arr = [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].indexOf(keyWord) >= 0) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

let list = ["chy","chys","html"];
let keyWord = "ch";
console.log(fuzzyQuery(list,keyWord));
