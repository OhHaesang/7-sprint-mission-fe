const BASE_URL = "https://panda-market-api.vercel.app";

export async function fetchProducts({
  page = 1,
  pageSize = 8,
  keyword = "",
  sort = "latest",
}) {
  const res = await fetch(
    `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}&sort=${sort}`
  );
  return res.json();
}
