## Basic Linking :

```css
                                                             js .js .js
                                                             ^   ^   ^
                                                             |   |   |

Brower <- index.html <- index.js <- App.js         <-   All Component Folder
                                (Parent Component)

```

## How Expense all .js file are Connected ? 🤔

---

### App.js (Parent Component JS file)

Still Confused !❌

App.js

Expenses

ExpenseItem

ExpenseDate

# How New Expenses are connected
```js
                                index.js
                                 App.js

                Expenses                 NewExpense
                ExpenseItem              ExpenseForm
```


|           |index.js            |           |
|---------- | :-------------:    | --------: |
| 1         | App         |                 |
| 2         | Expenses    | NewExpense      |
| 3         | Card        | ExpenseForm     |
| 3         | ExpenseDate |                 |

🔴 Q. These folders contains what's inside ? 

- Expenses : contains loop that call or map all the expense item details.

- New Expense : 

- Expense Form : It contains Form input and save data in a object and pass the object as parameter in the variable created in the New Expense Form.

- 