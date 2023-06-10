import React, { useEffect, useState } from "react";
import { Link} from 'react-router-dom';
import {FiArrowRight, FiPlus} from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css';
import Maps from '../images/map-marker.svg';  
import '../styles/pages/orphanages-maps.css';
import api from "../services/api";

const mapIcon = Leaflet.icon({
    iconUrl: Maps,
    iconSize:[58, 68],
    iconAnchor:[29,68],
    popupAnchor:[170, 2]

})

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {
      const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
     api.get('orphanages').then(response =>{
         setOrphanages(response.data);
     })
    }, [])
    return(
    <div id="page-map">
        <aside>
            <header>
                <img src={Maps} alt="Happy" />
                <h2>Escolha uma casa para doar no mapa</h2>
                <p>Muitas pessoas precisam da sua ajuda :)</p>
                <p>Projeto ADS - Ulbra Canoas</p>
            </header>
            <footer>
                <strong>Sapucaia do Sul</strong>
                <span>Rio Grande do Sul</span>
            </footer>
            
        </aside>
          
          <MapContainer
            // Endereço do Colégio Ulbra São Lucas, Sapucaia do Sul
           center={[-29.8169906,-51.144288]}
           zoom={15}
           style={{ width:'100%', height:'100%'}}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            {orphanages.map(orphanage =>{ 
                return(
            <Marker
                icon={mapIcon}
                position={[orphanage.latitude,orphanage.longitude]}
                key={orphanage.id}
            >
             <Popup closeButton= {false} minWidth={240} maxWidth={240} className="map-popup">
                 {orphanage.name}
                 <Link to={`/orphanages/${orphanage.id}`}>
                     <FiArrowRight size={20} color= "#FFF" />
                 </Link>
             </Popup>
             </Marker>
              )
            })}
          </MapContainer>
          
         <Link to="/orphanage/create" className="create-orphanage">
          <FiPlus size={32}  color="#FFF"/>
         </Link>
     </div>
    );
}


export default OrphanagesMap;
 