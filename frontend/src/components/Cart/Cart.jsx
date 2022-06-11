import { CartContext } from "../../Contexts/CartContext";
import { useContext } from "react";
import "./cart.css"
import { useNavigate } from "react-router";
const Cart = () => {
    const { myCart, total, addToCart, setTotal } = useContext(CartContext)
    const navigate = useNavigate()
    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}])
    }
    const handleGohome = () => {
        navigate('/')
    }
    return (
        <>
            <section className="cart-container">
                <div className="cart-header">CHECKOUT:</div>
                <div className="cart-items">
                    {console.log(myCart)}
                    {
                        myCart.slice(1).map((item) => {
                            return (
                                <div className="cart-item" key={item.id}>
                                    <img src={item.imageUrl} className="cart-item-img" alt="" />
                                    {item.name}: {item.price}$
                                </div>
                            )
                        })
                    }
                    <div className="cart-total">TOTAL: {total}$</div>
                </div>
                <button className="cart-checkout" onClick={handleCheckout}>DONE</button>
                <button className="cart-gohome" onClick={handleGohome}>Go Home</button>
            </section>
        </>
    );
}

export default Cart;