import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <>
          <div className="container">
            <h1 className="head">Order Total Rs {total} /- </h1>
            <p className="items">{cartList.length} Items in cart </p>
            <button type="button" className="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
