import {React, useState} from 'react';
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import config from "./../config";

const Map = ({eventData,center, zoom}) => {

    let apiKey = config.apiKey;

    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map((event,index)=>{
        //console.log(event);
        if(event.categories[0].id === 8){

            return(

                <LocationMarker
                    lat={event.geometries[0].coordinates[1]}
                    lng={event.geometries[0].coordinates[0]} 
                    key={index}
                    onClick={()=> setLocationInfo({id:event.id, title:event.title})}
                />

                //console.log(event.geometries[0]);

            );
        }
        return null;

    });

    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{key:apiKey}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
            {markers}
            </GoogleMapReact>
            {locationInfo && 
                <LocationInfoBox 
                    info={locationInfo}
                />}
        </div>
    )
}

Map.defaultProps = {
    center:{
        // lat:42.3265, //for california
        // lng:-122.8756
        // lat:26.7271, //for siliguri
        // lng:88.3953
        lat:39.5501, //for colorado
        lng:-105.7821
    },
     zoom: 4  //1 means the non zoom as 20(general) max zoom 
}

export default Map;