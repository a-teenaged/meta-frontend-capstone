import { Link } from "react-router-dom";
import React from "react";
import bannerImg from '../images/restauranfood.jpg'


const Header = () => {
    return (
       <header className='header'>
        <section>
            <div className='banner'>
                <h2>
                    Little Lemon
                </h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranian restaurant, focused on recipes served with a modern twist</p>
                <Link to ="/booking">
                    <button aria-label = 'On Click'>Reserve Table</button>
                    </Link>

                <div className='banner-img'>
                    <img src={bannerImg} alt =''/>
                </div>
            </div>
        </section>
       </header>
    )
};

export default Header;