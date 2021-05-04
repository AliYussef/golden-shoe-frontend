import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imagePath, brand, price, name, productId }) => {
    return (
        <div className="product">
            <img src={imagePath} alt={name} />

            <div className="product__info">
                <p className="info__name">{name}</p>

                <p className="info__description">{brand}</p>

                <p className="info__price">€{price}</p>

                <Link to={`/product/${productId}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    );
};

export default Product;