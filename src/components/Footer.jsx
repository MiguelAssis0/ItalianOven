import "../style/Footer.css";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Footer() {
  const position = [-22.9068, -43.1729];

  return (
    <footer id="Contact" className="footer">
      <section>
        <div className="footer-social">
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <FaInstagram />
              <a
                href="https://www.instagram.com/italiano.oven/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <FaFacebookSquare />
              <a href="https://www.facebook.com/italiano.oven/" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contato</h3>
          <ul>
            <li>
              <a href="mailto:QpTq5@example.com">QpTq5@example.com</a>
            </li>
          </ul>
          <form action="">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
        <div className="footer-location">
          <h3>Localização</h3>
          <ul style={{marginBottom: "20px"}}>
            <li>Rua João dos Santos, 200 - Vila Nova, Saquarema - RJ</li>
          </ul>
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
            dragging={false} 
            zoomControl={false} 
            scrollWheelZoom={false} 
            doubleClickZoom={false} 
            touchZoom={false} 
            keyboard={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Rio de Janeiro, Brasil.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
      <div className="footer-copyright">
        <p>Copyright © 2024 Italian Oven. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
