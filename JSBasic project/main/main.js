
function Task(_description, _cost) {
    const _id = "id" + Math.random().toString(16).slice(2);
    // if (new.target === Task) {
    //     alert("Nelza sozdavat mena bez new")
    // } + Должен быть запрет на создание экземпляра этого класса

    Object.defineProperties(this, {
        id: {
            get() {
                return _id;
            }
        },
        description: {
            get() {
                return _description;
            }
        },
        cost: {
            get() {
                return _cost;
            }
        }
    });
}
class IncomeTask extends Task {
    // // kak dobavit Privatnoye pole v super income task
    // // otkuda brat budget i income
    // constructor(_description. _cost) {
    //     super(_description. _cost);
    makeDone(budget) {
        budget.income += this.cost
    }
    makeUndone(budget) {
        budget.income -= this.cost
    }
}

class ExpenseTask extends Task {
    makeDone(budget) {
        budget.expenses += this.cost
    }
    makeUndone(budget) {
        budget.expenses -= this.cost
    }
}

// class TasksController {
//     constructor() {
//         this.tasks = [];

//     }
//     addTasks() {
//         this.tasks.push(new task1)
//     }
//     deleteTask() {
//         console.log("Udalayet zadachu ")
//     }
//     getTasks() {
//         console.log("vovrashayet vse zadachi ")
//     }
//     getTasksSortedBy() {
//         console.log("принимает на вход строку, которая может иметь один из 3-х значений:",
//             "+ `'description'` - в алфавитном порядке",
//             "+ `'status'` - сначала сделанные",
//             "+ `'cost'` - по убыванию стоимости")
//     }
//     getFilteredTasks() {

//         //Nemnogo neponatno obshiy koncept
//         console.log("+ принимает на вход объект с возможными (какие-то (не все) из ",
//             "перечисленных полей могут отсутствовать полями:")
//     }
//     // + Должен иметь механизм работы с уже сделанными задачами (понадобится в `BudgetController` в `doneTask` и
//     //   `unDoneTask`)


// }
// class BudgetController {
//     #tasksController;
//     balance = 0;
//     #budget
//     constructor() {
//         this.#tasksController = tasksController;
//         this.#budget = {
//             balance: number,
//             income: number,
//             expenses: number
//         }
//     }
//     getBalance() { return Number(this.balance) };
//     getIncome() { return Number(this.income) };
//     getExpenses() { return Number(this.expenses) };
//     calculateBalance() {
//         console.log("возвращает оставшуюся сумму с учётом прибыли и расходов")
//     }
//     // `getTasks: () => Task[]` - возвращает массив всех задач,
//     //  вызовом метода `getTasks` у `(#) tasksController`
//     // + ЗАПРЕЩЕНО где-либо хранить множество задач, кроме как внутри `(#) tasksController`
//     deleteTask() {

//     }
// }



// let task1 = new Task(1, "aa", 2);
// let task2 = new IncomeTask(1);
// console.log(task2.makeDone)
// console.log(task1.getId());
// console.log(typeof (task1.getId()));
