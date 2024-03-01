

function Task(description,number) { 
    this.id = "id" + Math.random().toString(16).slice(2);
    this.description = description;
    this.cost = number
    if(new.target) {
        alert("Nelza sozdavat mena bez new")   }
}
Task.prototype.getId = function() { return this.id}
Task.prototype.getDescription = function() {return this.description};
Task.prototype.getCost = function() {return this.cost}


class IncomeTask extends Task{ 
    #budget;
    // kak dobavit Privatnoye pole v super income task
    // otkuda brat budget i income
    constructor(budget) {
        super(cost);
        this.#budget = budget;
    }
    makeDone(budget){
        return budget.income += this.cost
    }
    makeUndone(budget){
        return budget.income -= this.cost
    }
}

class ExpenseTask extends Task { 
    constructor(budget) { 
        super(this.cost);
        this.budget = budget;
    }
    makeDone(budget){
        console.log(budget.expenses +=this.cost)
    }
    makeUndone(budget){
        console.log(budget.expenses -= this.cost)
    }
}

class TasksController { 
    constructor() { 
        this.tasks = [];

    }  
    addTasks() {
        this.tasks.push(new task1)
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
    constructor() {
        this.#tasksController = tasksController;
        this.#budget = {
            balance: number,
            income: number,
            expenses: number
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
