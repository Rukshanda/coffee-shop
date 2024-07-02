import React, { useState, useEffect } from "react";
import { FaCartArrowDown, FaDollarSign } from "react-icons/fa6";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from "../services/apiAuth";
import { getProducts } from "../services/apiProducts";
import { getCartItem, insertOrUpdateCartItem } from "../services/apiCart";

function Products() {
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]); // State to keep track of selected items

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userData = await getCurrentUser();
        console.log('Fetched user data:', userData);
        if (userData) {
          console.log('User ID:', userData.id); // Log userData.id before setting userId
          setUserId(userData.id); // Ensure userId is treated as a string
        } else {
          console.error('User data is invalid:', userData);
        }
      } catch (error) {
        console.error("Error getting user ID:", error);
      } finally {
        setLoading(false); // Set loading to false once user ID is fetched
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setItems(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    if (userId) {
      try {
        await insertOrUpdateCartItem({ productId, user_id: userId });
        const cartData = await getCartItem();
        console.log(cartData);
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, productId]); // Update selected items
        toast.success("Item added to cart!");
      } catch (error) {
        console.error("Error adding product to cart:", error.message);
        toast.error("Error adding product to cart.");
      }
    } else {
      toast.error("Please log in to add items to the cart.");
    }
  };

  return (
    <div className="products-sec">
      <h1>Our Coffees</h1>
      <ul className="products-list--box">
        {items.map((el, index) => (
          <li key={index} id={el.id}>
            <div className="product-box">
              <div className="product-img">
                <img src={el.pic} alt="" />
              </div>
              <div className="product-name text-center">
                <h3>{el.name}</h3>
              </div>
              <div className="product-det flex items-center justify-between">
                <div 
                  className={`addTocart-btn ${selectedItems.includes(el.id) ? 'selectedCart' : ''}`} 
                  onClick={() => addToCart(el.id)}
                >
                  <FaCartArrowDown />
                </div>
                <div className="product-price flex items-center">
                  <h4 className="text-[1.7rem]">{el.price}.00</h4>
                  <FaDollarSign className="dollar" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
     </div>
  );
}

export default Products;
