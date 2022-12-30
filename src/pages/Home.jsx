import React from 'react';
import Castle from '../components/Castle';
import Home1 from '../components/Home1';
import Home2 from '../components/Home2';
import Joshua from '../components/Joshua';
import Stories from '../components/Stories';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
    const navigate = useNavigate();
    const openArticle = () => {
        navigate('./ArticlePage');
    }

    return (
        <>
        <Carousel />
        <br /><br />

        <p className='latest'>The Latest</p>
        <div className="Bollywood">
            <Joshua />
            <Joshua />
            <Joshua />
        </div>

        <p className='latest'>Latest Articles</p>
        <div className='Bollywood'>
            <div className='B1'>
                <hr />
                <Home1 />
                <br /><hr />
                <Home2 />
                <br /><hr />
                <Home2 />
                <br /><hr />
                <Home2 />
                <div className='g_2 load'>
                <span className="material-symbols-outlined">south</span>
                    LOAD MORE
                </div>
                <br /><br /><br /><br /><br /><br />
                <div className="latArt">
                    <p id='la1'>Title of vertical gallery</p>
                    <span id='la2'>Travel / August 21, 2017</span>
                </div>
            </div>
            <div className='B2'>
                <div className="Adv">Advertisement</div><br /><br /><br />
                <h2>Top Posts</h2>
                <div onClick={openArticle}>
                    <img id='B2_1' src="https://wallpaperaccess.com/full/36630.jpg" alt="" />
                    <div className="B2_2 B-res">
                        <div>
                            <h4>Catch waves with an <br /> adventure guide</h4> <br />
                            <div>
                                <b>Travel</b>
                                <span className='g_2'> / August 21, 2017</span>
                            </div>
                        </div>
                        <h1 style={{color:"lightGrey"}}>1</h1>
                    </div>
                </div><br /><hr />
                <Castle serial="2" /><br /><hr />
                <Castle serial="3" /><br /><hr />
                <Castle serial="4" />
            </div>
        </div>

        <p className='latest'>Latest Stories</p>
        <br /><hr style={{width:"80%", margin:"auto"}}/>
        <div className="Bollywood">
            <Stories /><hr className='horiz' />
            <Stories /><hr className='horiz' />
            <Stories />
        </div>
        <hr style={{width:"80%", margin:"auto"}}/><br/><br/>
        
        <div className='view'>
            VIEW MORE
            <span className="material-symbols-outlined">trending_flat</span>
        </div>
        </>
    );
}

export default Home;