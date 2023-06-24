import React, { useState } from 'react';
import './home.css';
import { FaChevronDown } from 'react-icons/fa';
import kirklandImage from './images/Kirkland.png';
import redmondImage from './images/Redmond.png';
import { kirklandSoccerFields, redmondSoccerFields } from './soccerFields.js';

const Home = () => {
    const [showCityInfo, setShowCityInfo] = useState({ kirkland: false, redmond: false });
    const [kirklandFields, setKirklandFields] = useState(kirklandSoccerFields);
    const [redmondFields, setRedmondFields] = useState(redmondSoccerFields);

    const handleCityClick = (city) => {
        setShowCityInfo({ ...showCityInfo, [city]: !showCityInfo[city] });
    };

    const handleShowMapClick = (city, index) => {
        if (city === 'kirkland') {
            const updatedFields = [...kirklandFields];
            updatedFields[index].showMap = !updatedFields[index].showMap;
            setKirklandFields(updatedFields);
        } else if (city === 'redmond') {
            const updatedFields = [...redmondFields];
            updatedFields[index].showMap = !updatedFields[index].showMap;
            setRedmondFields(updatedFields);
        }
    };

    return (
        <div className="home-container">
            <h1 className="page-title">Eastside Soccer Field Locator</h1>
            <h3 className="page-title-lower-Detail">More cities/fields to come soon*</h3>
            <div className="city">
                <div className="city-name" onClick={() => handleCityClick('kirkland')}>
                    Kirkland <FaChevronDown className="icon-chevron" />
                </div>
                {showCityInfo['kirkland'] && (
                    <div className="city-info">
                        <img src={kirklandImage} alt="Kirkland" className="city-image" />
                        <div>
                            <h1 className='city-info-info'>Fields</h1>
                            <p className='city-info-info header-other-names-bold'>----------</p>
                        </div>
                        {kirklandFields.map((field, index) => (
                            <div key={index}>
                                <p className='city-info-info header'>{field.name} - Click <a href={field.scheduleLink}>Here</a> For Schedule</p>
                                <p className='city-info-info header-other-names'><a href={field.addressLink}>Address</a></p>
                                <button className="show-map-button button" onClick={() => handleShowMapClick('kirkland', index)}>
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
            </div>
            <div className="city">
                <div className="city-name" onClick={() => handleCityClick('redmond')}>
                    Redmond <FaChevronDown className="icon-chevron" />
                </div>
                {showCityInfo['redmond'] && (
                    <div className="city-info">
                        <img src={redmondImage} alt="Redmond" className="city-image" />
                        <div>
                            <h1 className='city-info-info'>Fields</h1>
                            <p className='city-info-info header-other-names-bold'>----------</p>
                        </div>
                        {redmondFields.map((field, index) => (
                            <div key={index}>
                                <p className='city-info-info header'>{field.name} - Click <a href={field.scheduleLink}>Here</a> For Schedule</p>
                                <p className='city-info-info header-other-names'><a href={field.addressLink}>Address</a></p>
                                <button className="show-map-button button" onClick={() => handleShowMapClick('redmond', index)}>
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
            </div>
            {/* Rest of the code... */}
        </div>
    );
};

export default Home;
