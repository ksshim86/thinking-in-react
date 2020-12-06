import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable (props) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = filterText => {
        setFilterText(filterText);
    }

    const handleInStockChange = inStockOnly => {
        setInStockOnly(inStockOnly);
    }

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                handleFilterTextChange={handleFilterTextChange}
                handleInStockChange={handleInStockChange}
            />
            <ProductTable 
                products={props.products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default FilterableProductTable;