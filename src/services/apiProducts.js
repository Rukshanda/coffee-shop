import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error);
  }

  return data;
}

 
export async function getProductsByIds(ids) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .in("id", ids);

  if (error) {
    console.error('Error fetching products:', error);
    throw error;
  }

  return data;
}

