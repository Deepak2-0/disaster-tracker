import {React, useState} from 'react';
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import config from "./../config";

const Map = ({eventData,center, zoom}) => {

    let apiKey = config.apiKey;

    const [locationInfo, setLocationInfo] = useState(null);

    let [lat, lng] = [null, null];

    const markers = eventData.map((event,index)=>{

        if(Array.isArray(event.geometries[0].coordinates[0])){
            let temp = event.geometries[0].coordinates[0];
            lat = temp[0][1];
            lng = temp[0][0];
            // lat = event.geometries[0].coordinates[0][1];
            // lng = event.geometries[0].coordinates[0][0];
        }
        else{
            lat = event.geometries[0].coordinates[1];
            lng = event.geometries[0].coordinates[0];
        }

        return(

            <LocationMarker
                id={event.categories[0].id}
                // lat={event.geometries[0].coordinates[1]}
                // lng={event.geometries[0].coordinates[0]} 
                lat={lat}
                lng={lng}
                key={index}
                onClick={()=> setLocationInfo({id:event.id, type:event.categories[0].title,title:event.title})}
            />

            //console.log(event.geometries[0]);
        );
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
                    onClick = {()=> setLocationInfo(null)}
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
     zoom: 2  //1 means the non zoom as 20(general) max zoom 
}

export default Map;