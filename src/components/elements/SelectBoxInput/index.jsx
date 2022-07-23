import { useFormContext } from "react-hook-form"

export default function Selectbox({children, options, name}) {
  const { register } = useFormContext()

  return (
    <>
      {children &&
        <label className="label">
          <span className="label-text">{children}</span>
        </label>
      }
      <select
        className="select input-bordered max-w-xs"
        {...register(name)}
      >
        {options.map(option => {
         return <option key={option.id}>{option.name}</option>
        })}
      </select>
    </>
  )
}