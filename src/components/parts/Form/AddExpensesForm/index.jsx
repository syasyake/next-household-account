import TextInput from '../../../elements/TextInput'
import SelectBox from '../../../elements/SelectBox'


export default function AddExpensesForm() {
  return (
    <div className="form-control w-full max-w-xs">
      <div className="mb-2">
        <TextInput>日付</TextInput>
      </div>
      <div className="mb-2">
        <SelectBox>収入 or 支出</SelectBox>
      </div>
      <div className="mb-2">
        <SelectBox>カテゴリ</SelectBox>
      </div>
      <div className="mb-2">
        <TextInput>金額</TextInput>
      </div>
      <div className="mb-2">
        <TextInput>メモ</TextInput>
      </div>
    </div>
  )
}