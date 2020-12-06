import {Component} from 'react';

class ProductRow extends Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;

        return (
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    <p>{product.price}</p>
                </td>
            </tr>
        );
    }
}

export default ProductRow;