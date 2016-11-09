var _initial = new Date()
var family = 'fijacion'
var family = 'articles-45'
var products = require('./' + family + '.json'); //with path
var R = require('ramda');
var k;
var candidates = new Array();
var ids = products.map(R.prop('code'));
var minLength = 3
var minChilds = 2
var FALSE = -1

process.stdout.write('\nStarting analisis in family ' + family.toUpperCase() + ' :: ' + ids.length + ' -- ' + products.length + ' products\n\n')
process.stdout.write("[ ")

// ids = ids.slice(1, 1000);

products.forEach(function(elem){
  // console.log("elem.code: " + elem.code)
  // console.log("elem.code.length: " + elem.code.length)

  for (i=3; i < elem.code.length; i++){

    var str = elem.code.substring(0,i)

    if(R.findIndex(R.propEq('code', str))(candidates) == -1){
      var count = 0
      var elems = new Array()

      ids.forEach(function(kk){

        if (kk.indexOf(str) != -1){
          count++
          // console.log("search '" + kk + "' in products")
          var elem = R.find(R.propEq('code', kk))(products)
          elems.push(elem)
        }
      })

      if ((count > minChilds)&&(str > minLength)){
        var newCandidate = {'code': str, 'elems': elems, 'counter': count}
        // var newCandidate = {'code': str, 'counter': count}
        candidates.push(newCandidate)
        process.stdout.write(JSON.stringify(newCandidate) + ', ')
      }
    }
  }
})

process.stdout.write("]")

// console.log("   candidates:  " + JSON.stringify(candidates, undefined, 2))

// console.log("THERE ARE " + candidates.length + " CANDIDATES!!")




// // k = R.pick(['a'], products); //=> {'a': 1, d: 4}
// var ids = products.map(R.prop('a'));
// console.log(ids)

// // R.countBy(R.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}
// var t = R.countBy(R.toLower)(ids)   //=> {'a': 5, 'b': 4, 'c': 3}
// console.log(t)


// var pred = R.where({
//   a: R.equals('a123451') //,
//   // b: complement(equals('bar')),
//   // x: gt(__, 10),
//   // y: lt(__, 20)
// });

// var xs = [{a: 1}, {a: 2}, {a: 3}];
// var y = R.find(R.propEq('a', 'a123451'))(products); //=> {a: 2}

// var y = pred(products)
// console.log(`\n\n{$y}`)
// console.log(y)

var _final = new Date()

var seconds = (_final.getTime() - _initial.getTime())/1000;

console.log("\n\n\n#################################################################################################\n")
console.log(ids.length + " products analized")
console.log(candidates.length + " candidates found (CODE.length > " + minLength + " && ELEM.CHILDS.length > " + minChilds)
console.log("time " + seconds + "sec.\n\n")



// R.findIndex(R.propEq('code', '2E92504'))(products)

    // _final = _final.setDate(_final.getDate() + 15 / 1000 * 60);
