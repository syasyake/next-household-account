import { useFormContext } from "react-hook-form"

export default function DateInput({children, name}) {
  const { register } = useFormContext()

  return (
    <>
      <label className="label">
        <span className="label-text">{children}</span>
      </label>
      <input
        type="date"
        className="input input-bordered w-full max-w-xs"
        {...register(name)}
      />
    </>
  )
}