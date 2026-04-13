import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("tesla");
  const [query, setQuery] = useState("tesla"); // committed search term
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  function fetchdata(searchQuery) {
    setLoading(true);
    setError("");

    // 🔑 Replace YOUR_API_KEY with your actual NewsAPI key
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2026-02-28&sortBy=publishedAt&apiKey=ddbaf0341dba49618ee7b46ffdd55a01"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "ok") {
          throw new Error("API Error");
        }
        setNews(data.articles || []);
        setCurrentPage(1); // reset to page 1 on new search
        setLoading(false);
      })
      .catch(() => {
        setError("Data Not available");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchdata(query);
  }, [query]); // re-fetch whenever committed query changes

  // Pagination calculations
  const totalPages = Math.ceil(news.length / itemPerPage);
  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);

  // Handlers
  const handleSearch = () => {
    if (search.trim() === "") return;
    setQuery(search.trim()); // commits the search → triggers useEffect
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const goToPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const goToNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>{error}</h1>;
  if (news.length === 0) return <h2>No News Found</h2>;

  return (
    <div>
      <h3>Latest News</h3>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>

      {/* News cards */}
      {currentNews.map((item, index) => (
        <NewsCard key={index} news={item} />
      ))}

      {/* Pagination controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px" }}>
        <button onClick={goToPrev} disabled={currentPage === 1}>
          ← Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={goToNext} disabled={currentPage === totalPages}>
          Next →
        </button>
      </div>
    </div>
  );
}