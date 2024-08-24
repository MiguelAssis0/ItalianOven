import { useEffect } from "react"

export default function Header() {

    function MenuTransparent() {
        window.addEventListener('scroll', () => {
            let header = document.querySelector("header");
            header.classList.toggle("menuTransparent", window.scrollY > 0);
        })
    }
    
    useEffect(() => {
        MenuTransparent();
        window.addEventListener('resize', MenuTransparent);
        return () => {
            window.removeEventListener('resize', MenuTransparent);
        };
    }, []);

    return (
        <header>
            <div className="logo"><a href="/"><span style={{color: "#D95252", fontWeight: "bold", fontFamily: "serif"}}>Italian</span><span style={{color: "#FFCB9A", fontWeight: "bold", fontFamily: "serif"}}>Oven</span></a></div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">Sobre nós</a></li>
                    <li><a href="/#Contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}