export default function Pagination({ page, setPage }) {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        이전
      </button>
      <span>{page}</span>
      <button onClick={() => setPage((prev) => prev + 1)}>다음</button>
    </div>
  );
}
