export default function Modal({children, openButtonText, title, buttonText}) {
  return (
    <>
      <label htmlFor="my-modal" className="btn modal-button">{openButtonText}</label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="py-4">{children}</div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">{buttonText}</label>
          </div>
        </div>
      </div>
    </>
  )
}