import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const myFunction = () => {
        let x = document.getElementsByClassName('Navbar')[0];
        if(x.className === 'Navbar'){
            x.classList.add('responsive');
        }
        else{
            x.classList.remove('responsive');
        }
    }

    return (
        <div className="Navbar">
            <div className="N1">
                <span id="N1_1">The</span>
                <span id="N1_2">Siren</span>
            </div>
            <div className="N2">
                <NavLink to="/" className="title" >Home</NavLink>
                <NavLink to="/Bollywood" className="title" >Bollywood</NavLink>
                <NavLink to="/Technology" className="title" >Technology</NavLink>
                <NavLink to="/Hollywood" className="title" >Hollywood</NavLink>
                <NavLink to="/Fitness" className="title" >Fitness</NavLink>
                <NavLink to="/Food" className="title" >Food</NavLink>
            </div>
            <span className="material-symbols-outlined icon" onClick={myFunction}>menu</span>
        </div>
    );
}

export default Navbar;