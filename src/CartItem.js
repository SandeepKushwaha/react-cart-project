import React from "react";
import './CartItem.css';

// class based component
class CartItem extends React.Component {

    /*
    constructor() { 
        super();
        this.state = {
            title: 'Smart Phone',
            price: 12999,
            quantity: 1,
            image: '',
        };
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }
    */

    // testing() {
    //     const promise = new Promise((resolve, reject) => { 
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     });

    //     promise.then(() => {
    //         // setState acts like a synchronus call
    //         // this.setState({ quantity: 100 });

    //         this.setState({ quantity: this.state.quantity + 10 });
    //         this.setState({ quantity: this.state.quantity + 10 });
    //         this.setState({ quantity: this.state.quantity + 10 });

    //         console.log('state', this.state);
    //     });
    // }

    // decreaseQuantity = () => {
    //     const { quantity } = this.state;
    //     this.setState((prevState) => {
    //         if (quantity === 1) {
    //             return;
    //         }

    //         return {
    //             quantity: prevState.quantity - 1,
    //         };
    //     }, () => {
    //         if (quantity === 1)
    //             console.log('minimum product count:', this.state.quantity);
    //         else
    //             console.log('this.state:', this.state);
    //     });
    // }

    // increaseQuantity = () => {
    //     // console.log('increase: called!');
    //     // console.log('This Object:', this);
    //     // console.log('This Object State:', this.state);

    //     // this.state.quantity += 1;
    //     // console.log('This Object:', this.state);
        
    //     // setState form 1. 
    //     // this.setState({ quantity: this.state.quantity+1 }, () => { /* call back */});
        
    //     // setState form 2. [If prevState required use this]
    //     this.setState((prevState) => { 
    //         return {
    //             quantity: prevState.quantity + 1,
    //         };
    //     }, () => {
    //         console.log('this.state:', this.state);
    //     });
    // }

    render() {
        console.log('this.props::', this.props);
        const { title, price, quantity, image } = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = this.props;
        return (
            <div className="card-item">
                <div className="left-block">
                    <img style={styles.image} src={ image } alt="" />
                </div>
                <div className="right-block">
                    <div style={styles.title}>{ title }</div>
                    <div style={styles.description}>Rs: { price }</div>
                    <div style={ {color: "#777"} }>Quantity: { quantity }</div>
                    <div className="card-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3161/3161837.png"
                            onClick={ () => onIncreaseQuantity(product) }
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/2040/2040522.png"
                            onClick={ () => onDecreaseQuantity(product) }
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                            onClick={ () => onDeleteProduct(product.id) }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 10,
        background: '#CCC',
    },
    title: {
        fontSize: 24,
    },
    description: {
        color: "#777",
    },
};

export default CartItem;