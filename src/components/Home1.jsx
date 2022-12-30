import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className='Home' onClick={openArticle}>
            <img className='castle' src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/11/og34.jpg" alt="pic" />
            <div className='guide'>
                <h4>Catch waves with an <br /> adventure guide</h4> <br />
                <span className='g_2'>Gujarat is vastly underrated and it's a <br /> mystery to us why the region isn't more well-</    span><br />
                <div>
                    <b>Travel</b>
                    <span className='g_2'> / August 21, 2017</span>
                </div>
            </div>
        </div>
    );
}

export default Home1;