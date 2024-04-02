export default function Square({value, whenClicked}) {
  return (
    <button className="border border-black h-8 w-8 m-0.5" onClick={whenClicked}>{value}</button>
  )
}
