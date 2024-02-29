

class Task { 
    #id;
    #description;
    #cost;
    constructor(id,description,cost) { 
        this.#id = String(id);
        this.#description = String(description);
        this.#cost = Number(cost);
    }
    //kak sdelat zapret na obyavleniye ekzemplarov klassa
    getId(){return String(this.#id)}
    getDescription(){return String(this.#description)}
    getCost(){return Number(this.#cost)}экземпляр
}

class IncomeTask extends Task{ 
    #budget;
    // kak dobavit Privatnoye pole v super income task
    // otkuda brat budget i income
    constructor(budget) {
        super(id,description,cost);
        this.#budget = Number(budget);
        this.income = income;
    }
    makeDone(){
        console.log("makeDone method")
    }
    makeUndone(){
        console.log("makeUndone method")
    }
}

class ExpenseTask extends Task { 
    constructor() { 

    }
    makeDone(){
        console.log("makeDone method")
    }
    makeUndone(){
        console.log("makeUndone method")
    }
}

class TasksController { 
    constructor() { 
        this.tasks = [];

    }  
    addTasks() {
        console.log("Dobavlayet v tasks tolko unikalniye po id zadachi ")
    }
    deleteTask() { 
        console.log("Udalayet zadachu ")
    }
    getTasks() { 
        console.log("vovrashayet vse zadachi ")
    }
    getTasksSortedBy() { 
        console.log("принимает на вход строку, которая может иметь один из 3-х значений:",
        "+ `'description'` - в алфавитном порядке",
        "+ `'status'` - сначала сделанные",
        "+ `'cost'` - по убыванию стоимости")
    }
    getFilteredTasks() { 

        //Nemnogo neponatno obshiy koncept
        console.log("+ принимает на вход объект с возможными (какие-то (не все) из ",
       "перечисленных полей могут отсутствовать полями:")
    }
    // + Должен иметь механизм работы с уже сделанными задачами (понадобится в `BudgetController` в `doneTask` и
    //   `unDoneTask`)


}
class BudgetController {
    #tasksController;
    balance = 0;
    #budget
    constructor(balance) {
        this.#tasksController = tasksController;
        this.#budget = {
            balance: {value: Number(222)},
            income: {value: Number(111)},
            expenses: {value: Number(333)}
        }
    }
    getBalance(){return Number(this.balance)};
    getIncome(){return Number(this.income)};
    getExpenses(){return Number(this.expenses)};
    calculateBalance() { 
        console.log("возвращает оставшуюся сумму с учётом прибыли и расходов")
    }
    // `getTasks: () => Task[]` - возвращает массив всех задач,
    //  вызовом метода `getTasks` у `(#) tasksController` 
// + ЗАПРЕЩЕНО где-либо хранить множество задач, кроме как внутри `(#) tasksController` 
    deleteTask() { 

    }
}



let task1 = new Task(1,"aa",2);
let task2 = new IncomeTask(1);
console.log(task2.makeDone)
console.log(task1.getId());
console.log(typeof(task1.getId()));
