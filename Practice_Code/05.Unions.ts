
type ID = number | string;
// Narrowing
function printId(id: ID) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printId('abcd');

function getFirstThree(x: string | number[]) {
    return x.slice(0, 3);
}

console.log(getFirstThree([1, 2, 3, 4, 5]));



// type Id = String | Number;

// function Myname(id : Id){
//     if (typeof id === 'string'){
//         console.log(id.toUpperCase());
//     }
//     else{
//         console.log(id);
//     }
// }

// Myname(48)