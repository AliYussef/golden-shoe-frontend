import "./ProductScreen.css";
import {useState, useEffect, forwardRef} from "react";
import {useSelector, useDispatch} from "react-redux";

// Actions
import {getProductDetails} from "../redux/actions/productActions";
import {addToCart} from "../redux/actions/cartActions";

const ProductScreen = ({match, history}) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product.id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch]);
//}, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product.id, qty));
        history.push(`/cart`);
    };

    return (
        <div className="productscreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productscreen__left">
                        <div className="left__image">
                            <img src={product.imagePath} alt={product.name}/>
                        </div>
                        <div className="left__info">
                            <p className="left__name">{product.name}</p>
                            <p>Price: ${product.price}</p>
                            <p>Brand: {product.brand}</p>
                        </div>
                    </div>
                    <div className="productscreen__right">
                        <div className="right__info">
                            <p>
                                Price:
                                <span>${product.price}</span>
                            </p>
                            <p>
                                Quantity
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {product.productVariants && [...Array(product.productVariants).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>

                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>
                                    Add To Cart
                                </button>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductScreen;