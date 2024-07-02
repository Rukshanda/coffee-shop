

import supabase from "./supabase"

export async function addOrderHistory({ userID, itemsID }) {
  const order = {
    userID: userID, // Ensure userID is a UUID here
    itemsID,
    liked_at: new Date(),
  };

  const { data, error } = await supabase.from("userHistory").insert([order]);

  if (error) {
    console.error("Error adding order history:", error);
    throw error;
  }

  return data;
}

 

export async function getOrderHistory(userID) {
  const { data, error } = await supabase
    .from('userHistory')
    .select('*')
    .eq('userID', userID);

  if (error) {
    console.error('Error fetching order history:', error);
    throw error;
  }

  return data;
}
