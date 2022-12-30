import React from 'react';
import { useNavigate } from 'react-router-dom';

const Stories = () => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('/ArticlePage');
    }
    return (
        <div className='stories' onClick={openArticle}>
            <p className='j_2 s_2'>Catch waves with an adventure guide</p><br />
            <p className='j_3'>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces</p><br />
            <div className='j_4'>
                <b>Tech</b>
                <span className='g_2'> / TODAY AT 11:54</span>
            </div>
        </div>
    );
}

export default Stories;