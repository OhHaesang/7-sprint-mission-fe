import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import "../style-react.css";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const [sort, setSort] = useState("latest");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    async function loadData() {
      const data = await fetchProducts({ page, pageSize, keyword, sort });
      setProducts(data.list); // list로 저장
    }
    loadData();
  }, [page, pageSize, keyword, sort]);

  // 앞에 3개는 베스트 상품, 나머지는 일반 상품으로 나누기
  const bestItems = products.slice(0, 3);
  const onSaleItems = products.slice(3);

  return (
    <main className="product-page">
      <section className="product-controls">
        <input
          type="text"
          placeholder="상품명 입력"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="latest">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </section>

      <section>
        <h2 className="section-title">베스트 상품</h2>
        <ul className="product-list">
          {bestItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-title">판매 중인 상품</h2>
        <ul className="product-list">
          {onSaleItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>

      <Pagination page={page} setPage={setPage} />
    </main>
  );
}
