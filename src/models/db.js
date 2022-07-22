import Dexie from 'dexie'

export const db = new Dexie('HouseholdAccount');

db.version(1).stores({
  // 収支ID, 収支or貯金, カテゴリ, 金額. メモ, 年月, 日
  budgets: "++id,budget,category,amount,memo,yearMonth,day"
})

const table = db.budgets

// 全件取得
const fildAll = (id) =>
  table
    .where('trackId')
    .equals(trackId)
    .toArray()

// 年月全件取得
const fildYearmonth = (id) =>
  table
    .where('trackId')
    .equals(trackId)
    .toArray()

// 年月を指定して取得
const fildByYearmonth = (yearMonth) =>
  table
    .where('yearMonth')
    .equals(yearMonth)
    .toArray()

// 1件追加
const Addbudget = (
  budget,
  category,
  amount,
  memo,
  yearMonth,
  day
) => {
  table.add({
    budget: budget,
    category: category,
    budget: budget,
    amount: amount,
    memo: memo,
    yearMonth: yearMonth,
    day: day
  })
}