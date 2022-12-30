import React from 'react';
import { useNavigate } from 'react-router-dom';

const Joshua = () => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className="joshua" onClick={openArticle}>
                <img className='j_1' src="https://wallpaperaccess.com/full/43580.jpg" alt="" />
                <div>
                    <p className='j_2'>Joshua Tree <br /> Overnight Adventure</p><br />
                    <p className='j_3'>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p><br />
                    <div className='j_4'>
                        <b>Travel</b>
                            <span className='g_2'> / August 21, 2017</span>
                    </div>
                </div>
        </div>
    );
}

export default Joshua;