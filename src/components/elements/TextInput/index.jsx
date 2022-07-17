export default function TextInput({children}) {
  return (
    <>
      <label className="label">
        <span className="label-text">{children}</span>
      </label>
      <input
        type="text"
        placeholder="input text"
        className="input input-bordered w-full max-w-xs"
      />
    </>
  )
}