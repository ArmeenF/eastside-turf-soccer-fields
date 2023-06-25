import React, { useState } from 'react';
import redmondImage from './images/Redmond.png';
import { redmondSoccerFields } from './redmondFields';

const Redmond = () => {
    const [showFields, setShowFields] = useState(false);

    const handleToggleFields = () => {
        setShowFields(!showFields);
    };

    return (
        <div className="city-info">
            <img src={redmondImage} alt="Redmond" className="city-image" />
            <div>
                <h1 className="city-info-info">Fields</h1>
                <p className="city-info-info header-other-names-bold">----------</p>
            </div>
            {showFields && (
                <div>
                    {redmondSoccerFields.map((field, index) => (
                        <div key={index}>
                            <p className="city-info-info header">
                                {field.name} - Click <a href={field.scheduleLink}>Here</a> For Schedule
                            </p>
                            <p className="city-info-info header-other-names">
                                <a href={field.addressLink}>Address</a>
                            </p>
                            <button className="show-map-button button">
                                {field.showMap ? 'Hide Map' : 'Show Map'}
                            </button>
                            {field.showMap && (
                                <iframe
                                    src={field.mapEmbedUrl}
                                    width="600"
                                    height="450"
                                    title={field.name}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <button className="show-fields-button button" onClick={handleToggleFields}>
                {showFields ? 'Hide Fields' : 'Show Fields'}
            </button>
        </div>
    );
};

export default Redmond;
