// src/pages/ProductDetailPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style-react.css"; // 스타일 경로 맞게 조정

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await fetch(
          `https://panda-market-api.vercel.app/products/${id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      }
    }

    loadProduct();
  }, [id]);

  if (!product) return <p>상품 정보를 불러오는 중입니다...</p>;

  return (
    <main className="detail-container">
      <div className="detail-card">
        <img
          className="detail-image"
          src={product.imageUrl}
          alt={product.title}
        />
        <div className="detail-info">
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-price">
            {Number(product.price).toLocaleString()}원
          </p>
          <p className="detail-likes">❤️ {product.favoriteCount}</p>
          <p className="detail-description">{product.description}</p>
        </div>
      </div>
    </main>
  );
}
