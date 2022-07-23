import TextInput from '../../../../elements/TextInput'
import DateInput from '../../../../elements/DateInput'
import SelectBox from '../../../../elements/SelectBox'
import {
  InputBudget,
  InputExpenseCategory,
  InputIncomeCategory
} from '../../../../../common/constants'
import { useForm, FormProvider } from "react-hook-form"

export default function AddExpensesForm() {
  const methods = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <div className="mb-2">
            <DateInput name="date">日付</DateInput>
          </div>
          <div className="mb-2">
            <SelectBox options={InputBudget} name="budget">収入 or 支出</SelectBox>
          </div>
          <div className="mb-2">
            <SelectBox options={InputExpenseCategory} name="category">カテゴリ</SelectBox>
          </div>
          <div className="mb-2">
            <TextInput name="amount">金額</TextInput>
          </div>
          <div className="mb-4">
            <TextInput name="memo">メモ</TextInput>
          </div>
          <button type="submit" className="btn">+ 収支を追加</button>
        </div>
      </form>
    </FormProvider>
  )
}