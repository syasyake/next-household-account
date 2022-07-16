import Card from '../components/parts/Card'
import Modal from '../components/parts/Modal'
import Selectbox from '../components/elements/Selectbox'

export default function Home() {
  return (
      <div className="container mx-auto px-4">
        <div className="my-4">
          <p className="text-3xl">各月収支</p>
        </div>
        <div className="flex justify-between mb-4">
          <Selectbox></Selectbox>
          <Modal></Modal>
        </div>

        <div className="box-border h-96 p-4 border-4 mb-4">
          グラフ
        </div>

        <div className="grid gap-4 grid-cols-2 mb-4">
          <Card></Card>
          <Card></Card>
        </div>
        <div className="grid gap-4 grid-cols-3 mb-4">
          <Selectbox></Selectbox>
          <Selectbox></Selectbox>
          <Selectbox></Selectbox>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <Card></Card>
          </div>
          <div className="mb-2">
            <Card></Card>
          </div>
          <div className="mb-2">
            <Card></Card>
          </div>
        </div>
      </div>
  )
}
