import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="features-section">
            <h2 className="title">Eastside Soccer Field Locator</h2>
            <h3 className="title-lower">More cities/fields to come soon*</h3>
            <div className="button-container">
                <Link to="/kirkland" className="button-redirect">
                    <h3>Kirkland</h3>
                    <p>Kirkland Parks and Community</p>
                </Link>
                <Link to="/redmond" className="button-redirect">
                    <h3>Redmond</h3>
                    <p>Redmond Parks & Recreation</p>
                </Link>
                <Link to="/tbd" className="button-redirect">
                    <h3>TBD</h3>
                    <p>TBD.</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;