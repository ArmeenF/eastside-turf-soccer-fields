import './about.css';
import { FaFutbol } from 'react-icons/fa';

const About = () => {
    return (
        <div className='center'>
            <h1><u><a href="/" style={{color: 'black'}}>Welcome to our website!</a></u></h1>
            <div className='bounce futbol'>
                <FaFutbol />
            </div>
            <p className='size'>We understand the frustration of trying to find available turf fields, particularly soccer fields, on the Eastside of King County, Washington. It can be a daunting task to navigate through scattered information and unreliable sources. That's why we're here to help.</p>
            <p className='size'>Our goal is simple: to provide you with a seamless experience when it comes to viewing the availability and current reservations for turf fields. We aim to be your one-stop destination for all the information you need.</p>
            <p className='size'>By gathering and consolidating data from various sources, we have created a centralized hub that showcases the availability and reservations of turf fields across the cities in the Eastside of King County. With our user-friendly interface, you'll have quick and easy access to the information you seek.</p>
            <p className='size'>Whether you're an individual looking for a casual kick-around or a team seeking a regular practice spot, our website is designed to cater to your needs. We believe that finding and booking a turf field should be a hassle-free experience, and we're committed to making that a reality for you.</p>
            <p className='size'>Join us on our mission to enhance your turf field experience on the Eastside. We are dedicated to providing accurate, up-to-date information, ensuring that you have the resources to plan your activities conveniently.</p>
            <p className='bold size'>Together, let's make the process of finding and reserving turf fields as smooth as the game itself.</p>
        </div>
    );
};

export default About;