import React from 'react';
import { useNavigate } from 'react-router-dom';

const Castle = (props) => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className="B2_2" onClick={openArticle}>
            <img className='castle2' src="https://wallpaperaccess.com/full/36636.jpg" alt="pic" />
            <div className='B2_2_1'>
                <h4>Catch waves with an <br /> adventure guide</h4> <br />
                <div>
                    <b>Travel</b>
                    <br /><br />
                    <span className='g_2'> / August 21, 2017</span>
                </div>
            </div>
            <h1 style={{color:"lightGrey"}}>{props.serial}</h1>
        </div>
    );
}

export default Castle;