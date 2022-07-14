export default function Home() {
  return (
    <div data-theme="cupcake">
      <div>
        <button className="btn">Button</button>
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>What is the best TV show?</option>
          <option>Game of Thrones</option>
          <option>Lost</option>
          <option>Breaking Bad</option>
          <option>Walking Dead</option>
        </select>
      </div>
    </div>
  )
}
