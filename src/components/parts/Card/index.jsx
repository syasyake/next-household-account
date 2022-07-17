export default function Card({children, title, bgColor}) {
  return (
    <div className={"card bg-base-100 shadow-xl " + bgColor}>
      <div className="card-body py-4">
        <h2 className="card-title">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  )
}