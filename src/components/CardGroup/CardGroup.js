import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id:1, name:"Mack Book", price:17272},
        {id:2, name:"Mack Pro", price:13272},
        {id:3, name:"Mack Screen", price:37272}
    ]
    return (
            <div className="card-group">
                    {
                        products.map(product => <Card key={product.id} product={product}/>)
                    }
            </div>    
        
    );
};

export default CardGroup;