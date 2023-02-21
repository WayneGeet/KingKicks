import React, {useRef} from 'react';
import Map from "react-map-gl";


const Contact = () => {
    const mapRef = useRef();
    console.log(mapRef)
  return (
    <div>
        <h4 style={{color:"black"}}>this is the contact page</h4>
        <article className="map">
            <Map
            ref={mapRef}
            initialViewState={{
                longitude:-100,
                latitude:20,
                zoom:9
            }}
            style={{
                width:"50vw",
                height:"40vh"
            }}
            mapStyle="mapbox://styles/wayne-geet/cld0c6fb2003314qm2coqihkl"
            mapboxAccessToken="pk.eyJ1Ijoid2F5bmUtZ2VldCIsImEiOiJjbGVlcHhkYmUwMXE0NDdwOHA4YmZyYnhiIn0.uY22xdKnBcVPvPowTe8ZOQ"
            
            />
            {/* {console.log(mapRef.current)} */}
        </article>
    </div>
  )
}

export default Contact