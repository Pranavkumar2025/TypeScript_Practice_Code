

interface book {
    name : String,
    id : number
}

interface book{
    price : number
}


const bookDetails: book = {
    name : "Sarita",
    id : 23,
    price : 233
}

// type Book = {
//     name: string;
//     price: number;
// }

// type Book = {
//     size: number;
// }

// const myBook : Book =  {
//     name : "mybook",
//     price: 3123,
//     size : 23
// }



console.log(bookDetails)