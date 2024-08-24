import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../style/Home.css";
import Prato01 from "../assets/pratos/prato01.jfif";
import Prato02 from "../assets/pratos/prato02.jfif";
import Prato03 from "../assets/pratos/prato03.jpg";
import Prato04 from "../assets/pratos/prato04.jfif";
import Prato05 from "../assets/pratos/prato05.jpg";
import Prato06 from "../assets/pratos/prato06.jpg";

import { MdOutlinePayment } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiHamburger } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";

import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const Pratos = [Prato01, Prato02, Prato03, Prato04, Prato05, Prato06];
  const [actualIndex, setActualIndex] = useState(0);
  const cardsRef = useRef(null);
  const bulletsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current) {
      const slideWidth = cardsRef.current.offsetWidth;
      if (slideWidth > 800) {
        cardsRef.current.style.transform = `translateX(-${
          (actualIndex * 100) / 4.5
        }%)`;
      } else {
        cardsRef.current.style.transform = `translateX(-${actualIndex * 103}%)`;
      }

      const cards = document.querySelectorAll(".card");
      cards[actualIndex].classList.add("active");
    }
    bulletsRef.current.forEach((bullet, index) => {
      if (bullet) {
        bullet.classList.toggle("active", index === actualIndex);
      }
    });

    const intervalId = setInterval(() => {
      setActualIndex((prevIndex) => (prevIndex + 1) % Pratos.length);
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => card.classList.remove("active"));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [actualIndex, Pratos.length]);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.fromTo(".about", 
        { opacity: 0, x: "-100vw" }, 
        { opacity: 1, x: "0", 
          scrollTrigger: {
            trigger: ".about",
            start: "top 100%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      gsap.fromTo(".pratos", 
        { opacity: 0, x: "-100vw" }, 
        { opacity: 1, x: "0", 
          scrollTrigger: {
            trigger: ".pratos",
            start: "top 100%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      )

      gsap.fromTo(".menu",
        { opacity: 0, x: "100vw" },
        { opacity: 1, x: "0",
          scrollTrigger: {
            trigger: ".menu",
            start: "top 100%",
            end: "center 80%",
            scrub: true,
          }
        }
      );

      gsap.fromTo(".services",
        { opacity: 0, x: "100vw" },
        { opacity: 1, x: "0",
          scrollTrigger: {
            trigger: ".services",
            start: "top 100%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      )
  
      
    }, []);
  

  return (
    <>
      <Header />
      <section className="home" id="Home">
        <div className="info">
          <h1>A melhor comida Italiana</h1>
          <p>
            Venha conferir a melhor comida Italiana da região e ganhe desconto
            na primeira visita!
          </p>
        </div>
        <div className="blur"></div>
      </section>

      <section className="about" id="About">
        <div className="about-info">
          <h1>Sobre</h1>
          <h2>Italian Oven: A Essência da Itália no Brasil</h2>
          <p>
            Situado no coração de uma movimentada cidade brasileira, o Italian
            Oven é um restaurante que se destaca por oferecer uma autêntica
            experiência da culinária italiana. Desde sua inauguração, o Italian
            Oven tem se dedicado a trazer o sabor e a tradição da Itália para
            seus clientes, combinando ingredientes frescos e receitas clássicas
            com um ambiente acolhedor e sofisticado.
          </p>

          <a href="/About">Ler mais</a>
        </div>
        <div className="image"></div>
      </section>

      <section className="pratos" id="Foods">
        <div className="cards" ref={cardsRef}>
          {Pratos.map((prato, index) => (
            <div
              className="card"
              key={index}
              style={{ backgroundImage: `url(${prato})` }}
            ></div>
          ))}
        </div>

        <div className="bullets">
          {Pratos.map((_, index) => (
            <div
              className="bullet"
              key={index}
              ref={(el) => (bulletsRef.current[index] = el)}
              onClick={() => setActualIndex(index)}
            ></div>
          ))}
        </div>
      </section>

      <section className="menu" id="Menu">
        <h2>Cardápio</h2>

        <div>
          <article>
            <h3>Aperitivos</h3>
            <ul>
              <li>
                <span>Crostini di Fegatini</span> <span>R$ 22,00</span>
              </li>
              <li>
                <span>Camarões ao Alho com Anchovas</span> <span>R$ 44,00</span>
              </li>
              <li>
                <span>Bruschetta al Pomodoro</span> <span>R$ 35,00</span>
              </li>
              <li>
                <span>Arancini di Riso</span> <span>R$ 25,00</span>
              </li>
            </ul>
          </article>
          <article>
            <h3>Massas</h3>
            <ul>
              <li>
                <span>Lasanha de Frango</span> <span>R$ 25,00</span>
              </li>
              <li>
                <span>Lasanha alla Bolognese</span> <span>R$ 25,00</span>
              </li>
              <li>
                <span>Lasanha de Calabresa</span> <span>R$ 25,00</span>
              </li>
              <li>
                <span>Spaghetti alla Carbonara</span> <span>R$ 40,00</span>
              </li>
            </ul>
          </article>
          <article>
            <h3>Pizza</h3>
            <ul>
              <li>
                <span>Calabresa</span> <span>R$ 25,00</span>
              </li>
              <li>
                <span>Portuguesa</span> <span>R$ 30,00</span>
              </li>
              <li>
                <span>Mussarela</span> <span>R$ 25,00</span>
              </li>
              <li>
                <span>Frango com Catupiry</span> <span>R$ 30,00</span>
              </li>
            </ul>
          </article>
          <article>
            <h3>Pratos Principais</h3>
            <ul>
              <li>
                <span>Risotto ai Funghi</span> <span>R$ 55,00</span>
              </li>
              <li>
                <span>Ossobuco alla Milanese</span> <span>R$ 75,00</span>
              </li>
              <li>
                <span>Saltimbocca alla Romana</span> <span>R$ 65,00</span>
              </li>
              <li>
                <span>Pollo al Limone</span> <span>R$ 50,00</span>
              </li>
            </ul>
          </article>
          <article>
            <h3>Sobremesa</h3>
            <ul>
              <li>
                <span>Tiramisù</span> <span>R$ 25,00</span>
              </li>
              <li>
                <span>Panna Cotta al Cioccolato</span> <span>R$ 20,00</span>
              </li>
              <li>
                <span>Cannoli Siciliani</span> <span>R$ 18,00</span>
              </li>
              <li>
                <span>Torta Caprese</span> <span>R$ 30,00</span>
              </li>
            </ul>
          </article>
          <article>
            <h3>Bebidas</h3>
            <ul>
              <li>
                <span>Coca-cola</span> <span>R$ 5,00</span>
              </li>
              <li>
                <span>Fanta</span> <span>R$ 5,00</span>
              </li>
              <li>
                <span>Guarana</span> <span>R$ 5,00</span>
              </li>
              <li>
                <span>Agua</span> <span>R$ 3,00</span>
              </li>
              <li>
                <span>Aperol Spritz</span>
                <span>R$28,00</span>
              </li>
              <li>
                <span>Negroni</span> <span>R$ 30,00</span>
              </li>
              <li>
                <span>Limoncello</span> <span>R$ 18,00</span>
              </li>
              <li>
                <span>Caffè Espresso</span> <span>R$ 10,00</span>
              </li>
            </ul>
          </article>
        </div>
        <div className="bg01"></div>
        <div className="bg02"></div>
      </section>

      <section className="services">
        <h2>Comodidades</h2>
        <article>
          <div>
            <CiDeliveryTruck />
            <p>Delivery</p>
          </div>
          <div>
            <PiHamburger />
            <p>Retirada</p>
          </div>
          <div>
            <MdOutlinePayment />
            <p>Multiplas formas de pagamento</p>
          </div>
          <div>
            <LuPartyPopper />
            <p>Festas e eventos</p>
          </div>
        </article>
      </section>

      <Footer />
    </>
  );
}
