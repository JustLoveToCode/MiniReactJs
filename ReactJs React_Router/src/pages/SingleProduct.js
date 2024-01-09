import {Link, useParams} from 'react-router-dom';
import products from '../data';


const SingleProduct = () => {
  const {productId}= useParams();
  // Using the find method to find the product.id that matches the productId
  const product=products.find((product)=>
    product.id===productId);
  const {image, name}=product
  return (
    <section className='section product'>
      <img src={image} alt={name}/>
      <h5>{name}</h5>
      <Link to="/products">Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
