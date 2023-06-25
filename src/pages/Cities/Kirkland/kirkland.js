import React, { useState } from 'react';
import kirklandImage from './images/Kirkland.png';
import { kirklandSoccerFields } from './kirklandFields';
import './kirkland.css';

const Kirkland = () => {
    const [kirklandFields, setKirklandFields] = useState(kirklandSoccerFields);

    const handleShowMapClick = (index) => {
        const updatedFields = [...kirklandFields];
        updatedFields[index].showMap = !updatedFields[index].showMap;
        setKirklandFields(updatedFields);
    };

    return (
        <div>
            <img src={kirklandImage} alt="Kirkland" className="kirkland-image" />
            <div className="kirkland-content">
                {kirklandFields.map((field, index) => (
                    <div key={index}>
                        <p className="kirkland-field-schedule">
                            {field.name} - Click <a href={field.scheduleLink}>Here</a> For Schedule
                        </p>
                        <p className="kirkland-field-address">
                            <a href={field.addressLink}>Address</a>
                        </p>
                        <button className="button" onClick={() => handleShowMapClick(index)}>
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
        </div>
    );
};

export default Kirkland;
