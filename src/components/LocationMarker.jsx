import React from "react";
import { Icon, InlineIcon  } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import volcanoIcon from '@iconify-icons/fxemoji/volcano';
import snowmanIcon from '@iconify/icons-mdi/snowman';
import stormIcon from '@iconify-icons/whh/storm';
import iceIcon from '@iconify-icons/noto/ice';
import homeFlood from '@iconify/icons-mdi/home-flood';
import earthquakeIcon from '@iconify-icons/openmoji/earthquake';
import droughtIcon from '@iconify-icons/carbon/drought';

const LocationMarker = ({ id,lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            
            {(() => {
  
                switch (id) {
                    case 8:
                        return (
                            <Icon icon={locationIcon} className="location-icon-wildfire" />
                        )

                    case 12:
                        return (
                            <Icon icon={volcanoIcon} className="location-icon-volcano" />
                        )

                    case 17:
                        return (
                            <Icon icon={snowmanIcon} className="location-icon-snow" />
                        )

                    case 10:
                        return (
                            <Icon icon={stormIcon} className="location-icon-storm" />
                        )

                    case 15:
                        return (
                            <Icon icon={iceIcon} className="location-icon-ice" />
                        )
                    
                    case 9:
                        return (
                            <Icon icon={homeFlood} className="location-icon-flood" />
                        )
                    case 16:
                        return (
                            <Icon icon={earthquakeIcon} className="location-icon-earthquake" />
                        )


                    case 6:
                        return (
                            <Icon icon={droughtIcon} className="location-icon-drought" />
                        )
                        
                    default:
                        return;
                }

            })()}
        </div>
    )
}

export default LocationMarker