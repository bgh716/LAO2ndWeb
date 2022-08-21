import './Header.css'

function Header(){
  const columns = ["item", "gold price",  "crystal price","quantity", "rate(shows how much crystal is more expensive)"];
  return (
    <div className= "Hcontainer">
      <h3 className= "title1">{columns[0]}</h3>
      <h3 className= "title2">{columns[1]}</h3>
      <h3 className= "title2">{columns[2]}</h3>
      <h3 className= "title2">{columns[3]}</h3>
      <h3 className= "title2">{columns[4]}</h3>
    </div>
  )
}

export default Header;
