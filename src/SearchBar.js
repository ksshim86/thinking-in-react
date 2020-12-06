import React from 'react';

function SearchBar (props) {
    const handleChange = e => {
        props.handleFilterTextChange(e.target.value);
    }

    const handleChecked = e => {
        props.handleInStockChange(e.target.checked);
    }

    return (
        <form>
            <input type="text" placeholder="Search..." value={props.filterText} onChange={handleChange}/>
            <p>
            <input type="checkbox" checked={props.inStockOnly} onChange={handleChecked}/>
            {' '}
            Only show products in stock
            </p>
        </form>
    );
}

export default SearchBar;