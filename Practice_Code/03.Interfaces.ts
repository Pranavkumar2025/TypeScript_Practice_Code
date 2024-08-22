interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[];
}

const transaction1: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 455,
};

const transaction2: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 456,
};

const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolder: 'John Doe',
    balance: 4000,
    isActive: true,
    transactions: [transaction1, transaction2],
};


console.log(bankAccount)



// interface transaction {
//     name : String,
//     age : Number
// }

// const mytransaction : transaction = {
//     name : "Pranav kumar",
//     age : 545
// }

// console.log(mytransaction)