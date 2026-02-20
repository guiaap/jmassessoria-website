import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function Header() {

    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        let screenWidth = window.innerWidth;
        
        function checkScreenWidth() {
             setIsMobile(window.innerWidth <= 950);
        }

        checkScreenWidth();

        window.addEventListener("resize", checkScreenWidth);

        return () => {
            window.removeEventListener("resize", checkScreenWidth)
        }

    }, []);


    return (

        <header className="bg-gradient-to-b from-(--primary-brown) from-[70%] to-(--secondary-brown) shadow-lg">

            <nav className="relative max-w-(--container) m-auto flex items-center justify-between p-2 text-(--primary-text)">

                <Link to="/">
                    <img src={`src/assets/${ isMobile ? "mobile-logo" : "logo" }.png`} alt="Logo da Joelma Matias - Soluções Documentais"
                    className={`h-15 ${ isMobile ? "h-15 w-15" : "w-auto"}`} />
                </Link>

                <ul className={`
                flex transition-all duration-500
                ${ isMobile ? 
                    `
                    absolute top-19 right-0 flex-col gap-2 w-full bg-(--secondary-brown) text-[1rem] 
                    [&>li>a]:block [&>li>a]:p-2 [&>li>a]:bg-(--white-overlay) [&>li>a]:border-b-1 [&>li>a]:border-(--primary-gold
                    ${ isOpen ? "max-h-[310px] pb-3 px-2" : "max-h-0 overflow-hidden pb-0 px-0 "}
                    `
                : 
                    `gap-5 text-[clamp(1rem,1.3vw,1.1rem)]
                    [&>li>a]:relative [&>li>a]:p-1 [&>li>a]:transition-all [&>li>a]:duration-300 
                    [&>li>a]:hover:text-(--primary-gold) [&>li>a]:hover:text-shadow-(--primary-text-shadow) 
                    [&>li>a]:after:absolute [&>li>a]:after:left-0 [&>li>a]:after:bottom-0 [&>li>a]:after:content-[''] 
                    [&>li>a]:after:h-[1px] [&>li>a]:after:w-0 [&>li>a]:after:bg-(--primary-gold) [&>li>a]:after:transition-all 
                    [&>li>a]:after:duration-500 [&>li>a]:hover:after:w-[70%]`
                
                }`}>
                    <li><a href="#" onClick={ () => setIsOpen(false)}>Início</a></li>
                    <li><a href="#" onClick={ () => setIsOpen(false)}>Sobre mim</a></li>
                    <li><a href="#" onClick={ () => setIsOpen(false)}>Serviços</a></li>
                    <li><a href="#" onClick={ () => setIsOpen(false)}>Produtos</a></li>
                    <li><a href="#" onClick={ () => setIsOpen(false)}>Blog</a></li>
                    <li><a href="#" onClick={ () => setIsOpen(false)}>Contato</a></li>
                </ul>

                { isMobile ?
                    <button onClick={ () => setIsOpen(!isOpen) }>
                        <Icon name={`${ isOpen ? "close" : "menu" }`} size={"40px"} />
                    </button>
                : 
                    <a 
                    href="#" 
                    className="
                    flex items-center gap-2 p-2 text-[clamp(1rem,1.3vw,1.1rem)] border rounded-md 
                    transition-all durantion-300 shadow-(--golden-shadow)
                    [&>svg]:transition-all [&>svg]:durantion-300
                    hover:text-(--primary-gold) hover:text-shadow-(--golden-shadow)
                    hover:[&>svg]:fill-(--primary-gold)
                    ">
                        <Icon name={"whatsapp"} size="25px" color={"#FFFFFF"} />
                        <p>Vamos Conversar</p>

                    </a>
                }
            </nav>

        </header>
    );

}