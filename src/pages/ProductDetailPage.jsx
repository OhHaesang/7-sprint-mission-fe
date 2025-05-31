import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://panda-market-api.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} width="300" />
      <p>{product.description}</p>
      <p>{Number(product.price).toLocaleString()}원</p>
      <p>좋아요 ♥ {product.favoriteCount}</p>
    </div>
  );
}
