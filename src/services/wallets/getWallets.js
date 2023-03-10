import supabase from "../../supabaseClient.js";

export const getWallets = async (req, res) => {
  const query = supabase
    .from("wallets")
    .select("*", { count: "exact" })
    .order("isFav", { ascending: false });

  const { data, error, count } = await query;
  if (error) {
    res.status;
    res.send;
  }

  res.send({ data, count });
};
