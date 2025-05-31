import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <ul className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ul>
  );
}
