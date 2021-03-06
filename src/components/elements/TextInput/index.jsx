export default function TextInput({children}) {
  return (
    <>
      <label className="label">
        <span className="label-text">{children}</span>
      </label>
      <input
        type="text"
        className="input input-bordered w-full max-w-xs"
      />
    </>
  )
}