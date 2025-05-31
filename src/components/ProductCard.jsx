import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  console.log("product:", product);

  const defaultImage = "/assets/default.png"; // public 또는 src/assets에 넣은 기본 이미지 경로

  return (
    <li className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.imageUrl || defaultImage}
          alt={product.title}
          className="product-image"
        />
        <p className="product-title">{product.title}</p>
        <p className="product-price">
          {Number(product.price).toLocaleString()}원
        </p>
        <p className="product-like">💗 {product.favoriteCount}</p>
      </Link>
    </li>
  );
}
