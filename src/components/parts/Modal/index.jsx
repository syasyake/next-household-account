export default function Modal({children, openButtonText, title}) {
  return (
    <>
      <label htmlFor="my-modal" className="btn modal-button">{openButtonText}</label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box relative">
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="py-4">{children}</div>
        </label>
      </label>
    </>
  )
}