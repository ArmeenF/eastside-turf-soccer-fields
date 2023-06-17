import React, { useState } from 'react';
import './home.css';
import { FaChevronDown } from 'react-icons/fa';
import kirklandImage from './images/Kirkland.png';
import redmondImage from './images/Redmond.png';

const Home = () => {
    const [showCityInfo, setShowCityInfo] = useState({ kirkland: false, redmond: false });

    const handleCityClick = (city) => {
        setShowCityInfo({ ...showCityInfo, [city]: !showCityInfo[city] });
    };

    return (
        <div className="home-container">
            <h1 className="page-title">-- Welcome to Our Cities --</h1>
            <h1 className="page-title-lower">Click a city to see the availability and currently supported reservations for turf fields.</h1>
            <div className="city">
                <div className="city-name" onClick={() => handleCityClick('kirkland')}>
                    Kirkland <FaChevronDown className="icon-chevron" />
                </div>
                {showCityInfo['kirkland'] && (
                    <div className="city-info">
                        <img src={kirklandImage} alt="Kirkland" className="city-image" />
                        <div>
                            <p>City information for Kirkland goes here...</p>
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
        </div>
    );
};

export default Home;
