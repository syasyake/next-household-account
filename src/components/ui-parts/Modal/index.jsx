export default function Modal() {
  return (
    <>
      <label for="my-modal" className="btn modal-button">open modal</label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">text</h3>
          <p className="py-4">ModaltestModaltestModaltestModaltest</p>
          <div className="modal-action">
            <label for="my-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </>
  )
}