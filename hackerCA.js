function processData(input) {
    //Enter your code here
    const lines = input.trim().split("\n");
    let index = 0;
    const N = parseInt(lines[index++]);
    let transactions = [];
    for (let i = 0; i < N; i++) {
        const [text, amount] = lines[index++].split(" ");
        transactions.push({
            id: i + 1,
            text: text,
            amount: parseInt(amount)
        });
    }
    const newText = lines[index++].trim();
    const newAmount = parseInt(lines[index++]);
    const deleteId = parseInt(lines[index++]);
    
    function sum(transactions){
        return transactions.reduce((acc, curr) => {
            if (curr.amount > 0) {
                acc.income += curr.amount;
            } else {
                acc.expense += Math.abs(curr.amount);
            }
            return acc;
        }, { income: 0, expense: 0 });
    }
    function handleSubmit(text,amount,transactions){
        if (!text || amount === 0) return transactions;
        const maxId = transactions.length > 0
            ? Math.max(...transactions.map(t => t.id))
            : 0;
        const newTransaction = {
            id: maxId + 1,
            text,
            amount
        };
        return [...transactions, newTransaction];
    }
    function renderTransactions(transactions){
        return transactions.map(t => `${t.text} : ${t.amount}`);
    }
    function deleteTransaction(transactions,id){
        return transactions.filter(t => t.id !== id);
    }
    transactions = handleSubmit(newText, newAmount, transactions);
    transactions = deleteTransaction(transactions, deleteId);
    const totals = sum(transactions);
    const renderedList = renderTransactions(transactions);
    const output = {
        transactions,
        totals,
        renderedList
    };
    const formattedTransactions = transactions.map(t =>
  `{"id":${t.id},"text":"${t.text}","amount":${t.amount}}`
);

const finalOutput =
`{
  "transactions": [
    ${formattedTransactions.join(",\n    ")}
  ],
  "totals":{
    "income":${totals.income},
    "expense":${totals.expense}
  },
  "renderedList":[
    ${renderedList.map(r => `"${r}"`).join(",\n    ")}
  ]
}`;

console.log(finalOutput);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});