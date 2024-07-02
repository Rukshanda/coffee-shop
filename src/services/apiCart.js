import supabase from "./supabase";

export async function insertCartItem({ productId, userId }) {
  const cartItem = {
    user_id: userId,  // Ensure this matches the column type in your database (UUID)
    itemsID: productId,
    quantity: 1,
    created_at: new Date(),
  };

  const { data, error } = await supabase.from("Cart").insert([cartItem]);

  if (error) {
    console.log(error);
  }

  return data;
}

export async function getCartItem() {
  let { data, error } = await supabase.from('Cart').select('*');

  if (error) {
    console.log(error);
  }

  return data;
}


 
export async function insertOrUpdateCartItem({ productId, user_id }) {
  // Check if the cart item already exists
  const { data: existingItems, error: selectError } = await supabase
    .from("Cart")
    .select("*")
    .eq("user_id", user_id)
    .eq("itemsID", productId);

  if (selectError) {
    console.log(selectError);
    return;
  }

  if (existingItems.length > 0) {
    // Item exists, update the quantity
    const existingItem = existingItems[0];
    const { data, error } = await supabase
      .from("Cart")
      .update({ quantity: existingItem.quantity + 1 })
      .eq("id", existingItem.id);

    if (error) {
      console.log(error);
    }

    return data;
  } else {
    // Item does not exist, insert a new item
    const cartItem = {
      user_id: user_id,  // Ensure this matches the column type in your database (UUID)
      itemsID: productId,
      quantity: 1,
      created_at: new Date(),
    };

    const { data, error } = await supabase.from("Cart").insert([cartItem]);

    if (error) {
      console.log(error);
    }

    return data;
  }
}


export const clearCart = async (user_id) => {
  const { error } = await supabase
    .from('Cart')
    .delete()
    .eq('user_id', user_id);

  if (error) {
    throw new Error(error.message);
  }
};



 
// Function to update the quantity or delete the cart item
export const updateOrDeleteCartItem = async (userId, productId) => {
  const { data: cartItems, error: fetchError } = await supabase
    .from("Cart")
    .select("*")
    .eq("user_id", userId)
    .eq("itemsID", productId);

  if (fetchError) {
    console.error(fetchError);
    return;
  }

  if (cartItems.length > 0) {
    const cartItem = cartItems[0];

    if (cartItem.quantity > 1) {
      const { data, error } = await supabase
        .from("Cart")
        .update({ quantity: cartItem.quantity - 1 })
        .eq("id", cartItem.id);

      if (error) {
        console.error(error);
        return;
      }

      return data;
    } else {
      const { error } = await supabase
        .from("Cart")
        .delete()
        .eq("id", cartItem.id);

      if (error) {
        console.error(error);
        return;
      }
    }
  }
};
