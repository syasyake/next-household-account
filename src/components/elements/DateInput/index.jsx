export default function DateInput({children}) {
  return (
    <>
      <label className="label">
        <span className="label-text">{children}</span>
      </label>
      <input
        type="date"
        className="input input-bordered w-full max-w-xs"
      />
    </>
  )
}