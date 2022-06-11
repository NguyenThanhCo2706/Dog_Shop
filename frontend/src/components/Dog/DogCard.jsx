import { useState, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./dog.css"
const DogCard = (props) => {
    const { dog } = props;
    const { addToCart, setTotal } = useContext(CartContext)
    const [isAdded, setAdded] = useState(false);
    const handleOnClick = () => {
        setAdded(true)
        const newItem = {
            id: dog.id,
            name: dog.name,
            price: dog.price,
            imageUrl: dog.imageUrl
        }
        addToCart((item) => [...item, newItem])
        setTotal((total) => total += (Number(dog.price)))
    }
    return (
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{dog.name}</p>
                    <p>{dog.breed}</p>
                </div>
                <div className="dogs-img-container">
                    <img className="dogs-img" src={dog.imageUrl} alt={`picture of: ${dog.name}`} />
                </div>
                <div className="dogs-desc">{dog.description}</div>
                <div className="dogs-price">{dog.price}</div>
                {isAdded ? (
                    <button className="dogs-btn-disabled">ADDED</button>
                ) : (
                    <button className="dogs-btn" onClick={handleOnClick}>ADD TO CART</button>
                )}
            </section>
        </>
    );
}

export default DogCard;