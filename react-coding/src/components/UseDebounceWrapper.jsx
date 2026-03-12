import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/customHooks/useDebounce";

const UseDebounceWrapper = () => {
  const [query, setQuery] = useState("");
  const [productList, setProductList] = useState([]);
  const debouncedQuery = useDebounce(query, 200);

  console.log(query);

  async function fetchProducts(currQuery, signal) {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${currQuery}&limit=10`,
        { signal },
      );
      const result = await res.json();

      setProductList(result.products);
    } catch (err) {
      console.log("Some Error occurred !!!");
    }
  }

  useEffect(() => {
    
    if (debouncedQuery.length === 0 || debouncedQuery === "") return;

    const abortController = new AbortController();
    const { signal } = abortController;
    fetchProducts(debouncedQuery, signal);

    return () => abortController.abort();
  }, [debouncedQuery]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleClear() {
    setQuery("");
    setProductList([]);
  }

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0px" }}>
        <input
          style={{ margin: "10px" }}
          type="text"
          onChange={(e) => handleChange(e)}
          value={query}
        />
        <button onClick={handleClear}>Clear</button>
        <div>Query - {query}</div>
        <div>Debounced Query - {debouncedQuery}</div>

        <ul>
          {productList?.length > 0 &&
            productList?.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default UseDebounceWrapper;
