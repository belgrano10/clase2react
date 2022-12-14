import React from 'react';
import CartWidget from '../CartWidget';
import Select from '../Select';
import './style.css';
import { useState }  from 'react';
import {Link} from "react-router-dom";

const NavBar= () => {


    //Nombre del estado, settNombreDelEstado//
    const [navColor, setNavColor] = useState("#f3f3f3")
    //Consumimos el context desde la NavBar
    //const value = useContext(Shop)

    const onChangeColor = (event) => {
        const color = event.target.value;
        setNavColor(color)
    }


    console.log(navColor);


    return (
        <ul style={{
            backgroundColor: navColor
        }}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/men's clothing">Men's clothing</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Women's clothing</Link>
            </li>
            <li>
                <Link to="/category/electronics">Electonics</Link>
            </li>
            <li>
                <Link to="/category/jewelery">Jewelery</Link>
            </li>
            <CartWidget/>
            {/*<span>{value.mensaje}</span>*/}
            <Select handleColor={onChangeColor}/>
        </ul>
    );
};    


export default NavBar;