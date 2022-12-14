import React from 'react';

const Select = ({handleColor}) => {
    return (
        <select name='navColor' id='navColor' onChange={handleColor} value="#f3f3f3">
        <option value="blue">Blue</option>    
        <option value="Red">Red</option>   
        <option value="Black">Black</option>   
        <option value="#f3f3f3">Default</option>   
        </select>
    );
};

export default Select;