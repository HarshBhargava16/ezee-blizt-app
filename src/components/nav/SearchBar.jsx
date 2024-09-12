import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { setSearchTerm } from '../../features/product/productSlice';
function SearchBar() {
const searchTerm = useSelector((state)=>state.products.searchTerm);
const dispatch = useDispatch();

    const handleSubmit = (e)=>
    {
        e.preventDefault;
    }
    const handleChange = (e)=>
    {
        dispatch(setSearchTerm(e.target.value));
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex ms-md-0 ms-lg-3">
        <input type="search" value={searchTerm} onChange={handleChange} className="form-control ms-md-auto me-2"placeholder='Search Products...'/>
      </form>
    </div>
  )
}

export default SearchBar
