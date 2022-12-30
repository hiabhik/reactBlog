import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className="B2_2" onClick={openArticle}>
            <img className='castle2' src="https://wallpaperaccess.com/full/36628.jpg" alt="pic" />
            <div style={{fontSize: "small"}}>
                <h4>Catch waves with an <br /> adventure guide</h4> <br />
                <div>
                    <b>Travel</b>
                    <span className='g_2'> / August 21, 2017</span>
                </div>
            </div>
            <h1 style={{color:"lightGrey"}}>{props.serial}</h1>
        </div>
    );
}

export default Post;