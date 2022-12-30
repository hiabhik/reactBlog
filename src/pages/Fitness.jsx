import React from 'react';
import Home1 from '../components/Home1';
import Post from '../components/Post';

const Bollywood = () => {
    return (
        <div className='Bollywood'>
            <div className='B1'>
                <p className='B1_1'>Fitness</p>
                <Home1 /><br /><hr />
                <Home1 /><br /><hr />
                <Home1 /><br /><hr />
                <Home1 /><br /><hr />
                <Home1 /><br /><hr />
                <Home1 /><br /><hr />
                <Home1 /><br />
                <div className='g_2'>
                    <span className="material-symbols-outlined">south</span>
                    LOAD MORE
                </div>
            </div>
            <div className='B2'>
                <p className='B1_1'>Top Posts</p><br />
                <img id='B2_1' src="https://wallpaperaccess.com/full/43613.jpg" alt="" />
                <div className="B2_2">
                    <div>
                        <h4>Catch waves with an <br /> adventure guide</h4> <br />
                        <div>
                            <b>Travel</b>
                            <span className='g_2'> / August 21, 2017</span>
                        </div>
                    </div>
                    <h1 style={{color:"lightGrey"}}>1</h1>
                </div>
                <br /><hr />
                <Post serial='2' /><br /><hr />
                <Post serial='3' /><br /><hr />
                <Post serial='4' /><br /><br /><br /><br />
                <div className="B2_3">Advertisement</div>
            </div>
        </div>
    );
}

export default Bollywood;