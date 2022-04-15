import './CheckoutCard.css'
export default function CheckoutCard() {
  return (
    <div className="checkout-card">
      <div className='checkout-card-image'>
        image
      </div>
      <div className="checkout-card-non-image">
        <div>Title</div>
        <div>Price</div>
        <div>Quantity</div>
      </div>
    </div>
  )
}