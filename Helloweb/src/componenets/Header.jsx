import './Header.css'

export default function Header(pps){
    return(
        <div>
        <h1>{pps.title}</h1>
        <nav className="nav">
            <a herf="#">Home</a>
            <a herf="#">About</a>
            <a herf="#">Contact</a>
            <a herf="#">sub</a>
            
        </nav>
</div>
    )
}