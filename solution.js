// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');

// }

// function reverse(str){
//     let reversed='';
//     for (let character of str)
//     {
//         reversed=character + reversed;
//     }

//     return reversed;
// }


function reverse(str){
    return str.split('').reduce((rev, char) => char+rev,'');
}
module.exports = reverse;