import TextInput from '../../../elements/TextInput'
import DateInput from '../../../elements/DateInput'
import SelectBox from '../../../elements/SelectBox'
import {
  InputBudget,
  InputExpenseCategory,
  InputIncomeCategory
} from '../../../../common/constants'


export default function AddExpensesForm() {
  return (
    <div className="form-control w-full max-w-xs">
      <div className="mb-2">
        <DateInput>日付</DateInput>
      </div>
      <div className="mb-2">
        <SelectBox options={InputBudget}>収入 or 支出</SelectBox>
      </div>
      <div className="mb-2">
        <SelectBox options={InputExpenseCategory}>カテゴリ</SelectBox>
      </div>
      <div className="mb-2">
        <TextInput>金額</TextInput>
      </div>
      <div className="mb-2">
        <TextInput>メモ</TextInput>
      </div>
      <div className="modal-action">
        <label htmlFor="my-modal" className="btn">{buttonText}</label>
      </div>
    </div>
  )
}