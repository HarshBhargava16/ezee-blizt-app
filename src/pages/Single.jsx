import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import Productbutton from "../components/products/Productbutton";
import Line from "../components/extra/Line";
import Products from "../components/products/Products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSingleProduct } from "../features/product/productSlice";
import Price from "../components/extra/Price";
function Single() {
  const { id } = useParams();
  const singleSimilarProduct = useSelector(
    (state) => state.products.singleSimilarProduct
  );
  const single = useSelector((state) => state.products.single);
console.log(single);
  const product = data.find((product) => product.id === +id);
  const imagPath = "/images/" + single.id + ".jpg";
  const dispatch = useDispatch();
  
  useEffect(()=>
  {
      dispatch(setSingleProduct(id));
  },[id])

  return (
    <div
      id="single"
      className="row justify-content-center align-items-center text-white mx-auto"
    >
      <div className="col-md-6">
        <img
          src={imagPath}
          alt={product.single}
          className="card-img-top mb-5 mb-md-0 p-0 p-lg-5"
        />
      </div>
      <div className="col-md-6 text-center text-md-start">
        <h2 className="fs-1 fw-bold">{single.title}</h2>
        <div className="fs-5 mb-2 ">
          <Price value={single.price} />
        </div>
        <p className="lead">{single.description.substring(0,100)} </p>
        <Productbutton product={single} />
      </div>
      <Line />
      <h2 className="text-white my-4 text-center">
        {" "}
        Similar Product Like This
      </h2>
      <Products products={singleSimilarProduct} />
    </div>
  );
}

export default Single;
