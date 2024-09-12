import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { setSelectedCategory } from '../../features/product/productSlice';

function CatagorySelector() {
  const catagories = useSelector((state) => state.products.categories); //change in future by me state.products
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  ); 
  const title = selectedCategory;
  const dispatch = useDispatch();
  const handleMouseEnter = (e) => {
    dispatch(setSelectedCategory(e.target.innerText));
  };
  return (
    <div className="dropdown mb-3 mb-lg-0">
      <button
        className="btn btn-outline-success text-white dropdown-toggle"
        type="button"
        id="dropDownButton1"
        data-bs-toggle="dropdown"
      >
        {title}
      </button>
      <ul className="dropdown-menu">
        {catagories.map((data) => {
          return (
            <li onMouseEnter={handleMouseEnter} key={data}>
              <a href="#" className="dropdown-item pointer">
                {data}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CatagorySelector
