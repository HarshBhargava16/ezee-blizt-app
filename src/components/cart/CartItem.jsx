import React from 'react'
import Price from '../extra/Price';
import { useDispatch } from 'react-redux';
import { setQuantity } from '../../features/cart/cartSlice';
function CartItem(props) {
  const dispatch = useDispatch();

    const item = props.item;
    
    const handleClick = (qty) =>
      {
        dispatch(setQuantity({item,qty}))
      }

  return (
    <li className="list-group-item">
      <div className="my-0 d-flex justify-content-between align-items-center">
        <span className="fw-bolder fs-6 me-auto ">
          {item.title}(<Price value={item.price} />)
        </span>
        <div className="btn-group">
          <button
            onClick={() => {
              handleClick(-1);
            }}
            className="btn border"
          >
            -
          </button>
          <button className="btn border" disabled>
            {item.quantity}
          </button>
          <button
            onClick={() => {
              handleClick(1);
            }}
            className="btn border"
          >
            +
          </button>
        </div>
      </div>
      <p className="text-muted mb-0 col-3 w-100 description">
        {item.description}
      </p>
    </li>
  );
}

export default CartItem
