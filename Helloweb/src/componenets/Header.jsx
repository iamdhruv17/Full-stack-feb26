import './Header.css'

export default function Header({card}){
    return(
        <div>
        {/* <h1>{title}</h1> */}
        {/* <h2>{c[state]}</h2> */}
        {card}
        <nav className="nav">
            <a herf="#">Home</a>
            <a herf="#">About</a>
            <a herf="#">Contact</a>
            <a herf="#">sub</a>
            
        </nav>
</div>
    )
}