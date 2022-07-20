import Dexie from 'dexie'

const db = new Dexie('HouseholdAccount');

db.version(1).stores({
  budgets: "++id,budget,category,amount,memo,date"
})

const table = db.budgets

// 全件取得
const fildAll = (id) =>
  table
    .where('trackId')
    .equals(trackId)
    .toArray()

// 年月を指定して取得
const fildBybudget = (budget) =>
  table
    .where('budget')
    .equals(budget)
    .toArray()

// 1件追加
const Addbudget = (budget, category, amount, memo, date) => {
  table.add({
    budget: budget,
    category: category,
    budget: budget,
    amount: amount,
    memo: memo,
    date:date
  })
}