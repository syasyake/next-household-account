import Card from '../components/parts/Card'
import Modal from '../components/parts/Modal'
import AddExpensesForm from '../components/parts/Form/AddExpenses'
import SelectBox from '../components/elements/SelectBox'
import {TestYearMonth, SortType} from '../common/constants'

export default function Home() {
  return (
      <div className="container mx-auto px-4">
        <div className="my-4">
          <p className="text-3xl">各月収支</p>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <SelectBox options={TestYearMonth}></SelectBox>
          </div>
          <div>
            <Modal
              openButtonText="+ 収支を追加"
              title="収支を追加"
            >
              <AddExpensesForm></AddExpensesForm>
            </Modal>
          </div>
        </div>

        <div className="box-border h-96 p-4 border-4 bg-base-100 mb-4">
          グラフ
        </div>

        <div className="grid gap-4 grid-cols-2 mb-4">
          <Card title="7月の収入合計" bgColor="bg-info">
            <p className="text-right text-2xl">300000円</p>
          </Card>
          <Card title="7月の支出合計" bgColor="bg-secondary">
            <p className="text-right text-2xl">70000円</p>
          </Card>
        </div>
        <div className="mb-4">
          <SelectBox options={SortType}>並び替え</SelectBox>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <Card title="2022/07/15">
              <div className="mb-2">
                <Card bgColor="bg-secondary">
                  <div className="flex justify-between text-2xl mb-2">
                    <span>食費</span>
                    <span>3000円</span>
                  </div>
                  <div>メモ: テスト1</div>
                </Card>
              </div>
              <div className="mb-2">
                <Card bgColor="bg-info">
                  <div className="flex justify-between text-2xl mb-2">
                    <span>給料</span>
                    <span>300000円</span>
                  </div>
                  <div>メモ: テスト2</div>
                </Card>
              </div>
            </Card>
          </div>
          <div className="mb-2">
            <Card title="2022/07/16">
              <div className="mb-2">
                <Card bgColor="bg-secondary">
                  <div className="flex justify-between text-2xl mb-2">
                    <span>娯楽費</span>
                    <span>5000円</span>
                  </div>
                  <div>メモ: テスト3</div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
  )
}
