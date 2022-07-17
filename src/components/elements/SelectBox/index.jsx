export default function Selectbox({children}) {
  return (
    <>
      {children &&
        <label className="label">
          <span className="label-text">{children}</span>
        </label>
      }
      <select className="select input-bordered max-w-xs">
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
        <option>option4</option>
        <option>option5</option>
      </select>
    </>
  )
}