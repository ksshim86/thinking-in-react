import {Component} from 'react';

class SearchBar extends Component {
    handleChange = e => {
        this.props.handleFilterTextChange(e.target.value);
    }

    handleChecked = e => {
        this.props.handleInStockChange(e.target.checked);
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleChange}/>
                <p>
                <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleChecked}/>
                {' '}
                Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;