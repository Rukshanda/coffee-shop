import React, { useEffect, useState } from "react";
import { getCartItem, clearCart, updateOrDeleteCartItem } from "../services/apiCart";
import { getProducts } from "../services/apiProducts";
import { addOrderHistory } from "../services/apiHistory"; // New service for adding order history
import { FaArrowRight, FaTrash } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentUser } from "../services/apiAuth";
import Loader from "./Loader";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [matchingProducts, setMatchingProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [userID, setUserID] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const shippingCost = 5;

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userData = await getCurrentUser();
        console.log('Fetched user data:', userData);
        if (userData && userData.id) {
          setUserID(userData.id);
        } else {
          console.error('User data is invalid:', userData);
        }
        setLoading(false); // Set loading to false once user ID is fetched
      } catch (error) {
        console.error("Error getting user ID:", error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartData = await getCartItem();
        const productData = await getProducts();

        console.log("Cart Data:", cartData);
        console.log("Product Data:", productData);

        setCartItems(cartData);
        setProducts(productData);

        const matches = productData
          .map((product) => {
            const cartItem = cartData.find(
              (item) => item.itemsID === product.id
            );
            if (cartItem) {
              return { ...product, quantity: cartItem.quantity };
            }
            return null;
          })
          .filter((product) => product !== null);

        setMatchingProducts(matches);
        console.log("Matching Products:", matches);

        const subtotal = matches.reduce((acc, product) => {
          return acc + product.price * product.quantity;
        }, 0);

        setSubtotal(subtotal);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const total = subtotal + shippingCost;

  const handleCheckout = async () => {
    if (!address || !phoneNumber || !selectedPaymentMethod) {
      toast.error("Please fill out all fields and select a payment method.");
      return;
    }

    try {
      await Promise.all(
        matchingProducts.map(async (product) => {
          await addOrderHistory({ userID, itemsID: product.id });
        })
      );

      await clearCart(userID);

      toast.success("Your order has been placed!");

      setCartItems([]);
      setMatchingProducts([]);
      setSubtotal(0);
      setAddress("");
      setPhoneNumber("");
      setSelectedPaymentMethod("");
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleDelete = async (productId) => {
    try {
      await updateOrDeleteCartItem(userID, productId);

      const updatedCartItems = await getCartItem();
      setCartItems(updatedCartItems);

      const updatedMatches = products
        .map((product) => {
          const cartItem = updatedCartItems.find(
            (item) => item.itemsID === product.id
          );
          if (cartItem) {
            return { ...product, quantity: cartItem.quantity };
          }
          return null;
        })
        .filter((product) => product !== null);

      setMatchingProducts(updatedMatches);

      const updatedSubtotal = updatedMatches.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);

      setSubtotal(updatedSubtotal);
    } catch (error) {
      console.error("Error updating or deleting cart item:", error);
      toast.error("An error occurred while updating the cart. Please try again.");
    }
  };

  if (loading) {
    return <Loader/>;
  }

  return (
    <div className="cart-sec">
      <h1>Your Shopping Cart</h1>

      <div className="shopping-cart m-[20px] p-[20px] flex justify-between">
        <div className="shoppingCart-box flex flex-row w-[60%]">
          <div className="shoppingCart-items w-[100%]">
            {matchingProducts.length > 0 ? (
              matchingProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-row w-[100%] justify-around items-center mt-[20px] mb-[20px] shopCart-Item"
                >
                  <div className="shopCart-imgBox w-[20%]">
                    <div className="w-[80px] h-[80px] cartImg-bg">
                      <img src={product.pic} alt="" className="w-full h-full" />
                    </div>
                  </div>

                  <div className="shopCart-text flex flex-row justify-between items-center w-[70%]">
                    <h3>{product.name}</h3>
                    <p>${product.price}.00</p>
                    <p>Quantity: {product.quantity}</p>
                    <button className="delete-btn" onClick={() => handleDelete(product.id)}>
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching products found in the cart.</p>
            )}
          </div>
        </div>

        <div className="paymentMethod-box w-[35%]">
          <h2>Payment Details</h2>
          <div className="paymetMethod mt-[20px] mb-[20px]">
            <div className="payment-details">
              <h3>Payment Methods</h3>
              <div className="flex flex-col mt-[20px]">
                <button
                  className={`payment-btn ${selectedPaymentMethod === "cash" ? "selected" : ""}`}
                  onClick={() => handlePaymentMethodSelect("cash")}
                >
                  Through Cash
                </button>
                <button
                  className={`payment-btn ${selectedPaymentMethod === "card" ? "selected" : ""}`}
                  onClick={() => handlePaymentMethodSelect("card")}
                >
                  Through Card
                </button>
              </div>
            </div>

            <div className="user-info mt-[20px] mb-[20px]">
              <h3>User Info</h3>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="total-details">
            <div className="flex justify-between ">
              <span>Subtotal</span>
              <span>${subtotal}.00</span>
            </div>
            <div className="flex justify-between ">
              <span>Shipping</span> <span>${shippingCost}.00</span>{" "}
            </div>
            <div className="flex justify-between ">
              <span>Total</span> <span>${total}.00</span>
            </div>
          </div>

          <div className="CheckOut-btn mt-[20px]">
            <button onClick={handleCheckout} className="w-[100%] flex flex-row justify-between items-center">
              <span>CHECKOUT</span>
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cart;
