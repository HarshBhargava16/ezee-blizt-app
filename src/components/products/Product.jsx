import React from "react";
import { useNavigate } from "react-router-dom";
import Productbutton from "./Productbutton";
import Price from "../extra/Price";
function Product(props) {
  const { product } = props;
  const nav = useNavigate();
  const imagPath = "/images/" + product.id + ".jpg";

  const handleClick = () => {
    nav(`/single/${product.id}`);
  };
  return (
    <div className="col">
      <div className="card h-100" id="product">
        <img
          src={imagPath}
          onClick={handleClick}
          title={product.title}
          alt=""
          className="card-img-top pointer"
        />
        <div className="card-body p-4 ">
          <div className="text-center">
            <h6 className="fw-bolder">{product.title}</h6>
            <span><Price value={product.price}/></span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <Productbutton  product={product}/>
        </div>
      </div>
    </div>
  );
}

export default Product;
