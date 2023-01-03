/*// qu1 no1
let a ='moon';
let b = 23 ;
console.log( a + b);

// qu1 no2
console.log(typeof(a+b))
// qu1 no3
const a1 = {
    name:'moon',
    section: 23,
    isprincipale: false,
}
// qu1 no4
a1['friend'] = 'sun'
a1['name'] = 'lol'
console.log(a1)

// qu1 no5
const dict = {
    fauna:'noun. the animals of a given region or period considered as a whole.',
    scholarch:'noun. the head of a school.',
    majesty:'noun. regal, lofty, or stately dignity',
    gallantly:'adverb. in a courageous, spirited, or noble-minded way',
    doughty:'adjective. steadfastly courageous and resolute',
}
console.log(dict['doughty']);*/



// let a = prompt('what is your age');
// if (a < 0) {
//   alert('this is invalid age');
// }
// else if (a>17){
//   alert('you can talk him');
// }
// else if (a>9){
//   alert('may be he can!');
// }
// else {
//   alert('no way');
// }


function show() {
  const show = document.getElementById("div-id");
  show.style.display = "block";
}
function hide() {
  const hide = document.getElementById("div-id");
  hide.style.display = "none";
}