import React from 'react';
import Mask from '../pages/Images/Mask.png';

const MoreArticle = () => {
    return (
        <div className="A3_2">
            <p className='lgText'>Also tagged Reactjs</p><br />
            <img className='A3_2_1' src="https://wallpaperaccess.com/full/36644.jpg" alt="" />
            <div>
                <p className='j_2'>Clash of Titan <br /> Overnight Adventure</p><br />
                <div className="A2_1">
                    <img src={Mask} alt="mask" className='mask' />
                    <div>
                        <p className='A2_1_1'>Dmitry Nozhenko</p>
                        <p className='lgText'>Aug 10- 4 min read</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreArticle;