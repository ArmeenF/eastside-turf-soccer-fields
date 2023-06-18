import React, { useState } from 'react';
import './home.css';
import { FaChevronDown } from 'react-icons/fa';
import kirklandImage from './images/Kirkland.png';
import redmondImage from './images/Redmond.png';

const Home = () => {
    const [showCityInfo, setShowCityInfo] = useState({ kirkland: false, redmond: false });
    const [showMap, setShowMap] = useState(false); // New state for iframe visibility

    const handleCityClick = (city) => {
        setShowCityInfo({ ...showCityInfo, [city]: !showCityInfo[city] });

        // Reset the iframe visibility on city click
        setShowMap(false);
    };

    const handleShowMapClick = () => {
        setShowMap(!showMap);
    };

    return (
        <div className="home-container">
            <h1 className="page-title">-- Welcome to Our Cities --</h1>
            <h1 className="page-title-lower">Click a city to see the availability and supported reservations for turf fields.</h1>
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
                            <p className='city-info-info header'>Lakeview - Click <a href="https://secure.rec1.com/WA/city-of-kirkland/Lakeview-Elementary/6577cal">Here</a> For Schedule</p>
                            <p className='city-info-info header-other-names'>Other names: Lakeview Elementary, Google</p>
                            <p className='city-info-info header-other-names'><a href="https://goo.gl/maps/BG9fCFnWbfZr5TE26">Address</a></p>
                            <button className="show-map-button button" onClick={handleShowMapClick}>
                                {showMap ? 'Hide Map' : 'Show Map'}
                            </button>
                            {showMap && (
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1343.4135928757325!2d-122.20061533742911!3d47.668353494764354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013e01728085f%3A0x6c5821dad5367e3b!2sLakeview%20Elementary%20Sports%20Fields!5e0!3m2!1sen!2sus!4v1687050099318!5m2!1sen!2sus"
                                    width="600"
                                    height="450"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            )}
                        </div>
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
                            <p>City information for Redmond goes here...</p>
                        </div>
                    </div>
                )}
            </div>
            {/* Rest of the code... */}
        </div >
    );
};

export default Home;
