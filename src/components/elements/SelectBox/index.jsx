export default function Selectbox({children, options}) {
  return (
    <>
      {children &&
        <label className="label">
          <span className="label-text">{children}</span>
        </label>
      }
      <select className="select input-bordered max-w-xs">
        {options.map(option => {
         return <option key={option.id}>{option.name}</option>
        })}
      </select>
    </>
  )
}