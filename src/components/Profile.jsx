import React, { useEffect, useState } from "react";
import { getOrderHistory } from "../services/apiHistory";
import { updateCurrentUser, getCurrentUser } from "../services/apiAuth";
import { getProductsByIds } from "../services/apiProducts";
import Loader from "./Loader";

function Profile() {
  const [user, setUser] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      const currentUser = await getCurrentUser();
      console.log("Current User:", currentUser); // Debugging log
      setUser(currentUser);
      setFullName(currentUser?.user_metadata?.fullName || "");

      if (currentUser?.id) {
        fetchOrderHistory(currentUser.id);
      }
    }

    async function fetchOrderHistory(userId) {
      const orders = await getOrderHistory(userId);
      const ordersWithProducts = await Promise.all(
        orders.map(async (order) => {
          const itemsIDArray = Array.isArray(order.itemsID)
            ? order.itemsID
            : [order.itemsID];
          const products = await getProductsByIds(itemsIDArray);
          return { ...order, products };
        })
      );
      setOrderHistory(ordersWithProducts);
    }

    fetchUserData();
  }, []);

  const handleUpdateName = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateCurrentUser({ fullName });
      const updatedUser = await getCurrentUser();
      setUser(updatedUser);
      setFullName(updatedUser.user_metadata.fullName); // Ensure the state is updated with the new name
    } catch (error) {
      console.error("Error updating user name:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {user ? (
        <div>
          <div className="text-center mt-[20px]">
          <p className="text-center profile-name">{fullName}</p>{" "}
          {/* Use fullName state */}
          <p className="text-center profile-email">{user.email}</p>
          </div>
          <div className="profilesDetails-sec">
         
          <form onSubmit={handleUpdateName} className="flex flex-row items-center updateSec">
            <label className="text-[1.1rem] profile-text flex items-center">
             <span>
             Update Name:
              </span> 
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
                className="profile-text updateInput"
              />
            </label>
            <button type="submit" disabled={loading} className="profile-text update-btn">
              {loading ? "Updating..." : "Update Name"}
            </button>
          </form>
          <div className="mt-[30px]">
          <h2 className="profile-text">Order History</h2>
          <ul>
            {orderHistory.map((order) => (
              <li key={order.id}>
                <ul>
                  {order.products.map((product) => (
                    <li
                      key={product.id}
                      className="flex justify-between items-center profile-text oderedItem"
                    >  
                    <div className="w-[100px] h-[80px] profProduct-img">
                    <img src={product.pic} alt=""  className="w-full h-full"/>

                      </div> 
                      <p className="flex justify-around items-center w-[400px]">
                        <span>Order ID:</span>
                        <span>{order.id}</span>
                      </p>
                      <p className="flex justify-around items-center w-[400px]">
                        <span>Prodcut:</span>
                        <span>{product.name}</span>
                      </p>
                      <p className="flex justify-around items-center w-[400px]">
                        <span>Price:</span>
                        <span>${product.price}.00</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          </div>
         
        </div>
          </div>
  
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Profile;
