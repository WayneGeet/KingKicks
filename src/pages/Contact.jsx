import React, {useRef, useContext, useState, useEffect} from 'react';
import Map, {GeolocateControl, FullscreenControl, NavigationControl, Marker} from "react-map-gl";
import {RestaurantContext} from "../Context";
// import "./Mapbox.css";
import hotel from ".././images/hotel.png";

const Contact = () => {

    // building a geojson that'll be used in the map to show the location of the stores
    


    const [...info] = useContext(RestaurantContext);
    const lon = info[2];
    const lat = info[4];
    const [restaurants, setRestaurants] = useState([])

    const mapRef = useRef();    
    useEffect(()=>{
        getData()
    },[])


    const getData = async () =>{
        const fetching = await fetch(`https://api.spoonacular.com/food/restaurants/search?apiKey=${process.env.REACT_APP_API_KEY}&budget=1&distance=2&lat=37&lng=-122`);
        const restaurant_json = await fetching.json();
        const data = await restaurant_json["restaurants"]
        console.log(data)
        setRestaurants(()=>data)
    }
    
    const flyer = (lat, lon) =>{
        mapRef.current.flyTo(lat, lon)
    }

    // const locationGenerator = function

    
  return (
    <div>
        {/* <h4 style={{color:"black"}}>this is the contact page</h4> */}

        <article className="map">
            <Map
            ref={mapRef}
            initialViewState={{
                longitude: -122,
                latitude: 37,
                zoom: 15
            }}
            style={{
                width:"90vw",
                height:"90vh"
            }}
            mapStyle="mapbox://styles/wayne-geet/cld0c6fb2003314qm2coqihkl"
            mapboxAccessToken="pk.eyJ1Ijoid2F5bmUtZ2VldCIsImEiOiJjbGY1Z3YxemIwa3dlNDBvNHQwdnQ5MndqIn0.vMaKQfodULOneKKcdhyl4g"
            onLoad={()=>{  
                flyer(lat, lon)}}
            >  
            {restaurants.map((hotels, i) =>{
                return(
                    <Marker
                    key={i}
                    latitude={hotels.address.lat}
                    longitude={hotels.address.lon}>
                        <img src={hotel} alt="hotel" />
                    
                </Marker>
                )
            })}
                <GeolocateControl/>
                <FullscreenControl/>
                <NavigationControl/>
                

            </Map>
            
        </article>
    </div>
  )
}

export default Contact