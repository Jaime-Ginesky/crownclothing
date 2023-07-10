import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles.js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;
    // const { addItemToCart } = useContext(CartContext)
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems); 

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
      <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
            Add to cart</Button>
    </ProductCardContainer>
)};

export default ProductCard;