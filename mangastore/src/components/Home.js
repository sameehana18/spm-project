import React, { useState, useEffect } from "react";
import Proptypes from "prop-types";

const Home = (props) => {
  const [books, setBooks] = useState([]);
  const [selectedPriceFilters, setSelectedPriceFilters] = useState([]);
  const [selectedGenreFilters, setSelectedGenreFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchBooks();
  }, [selectedPriceFilters, selectedGenreFilters, searchTerm]);

  const fetchBooks = async () => {
    let url = "http://127.0.0.1:8000/api/books";

    // Apply filters
    if (selectedPriceFilters.length > 0 || selectedGenreFilters.length > 0 || searchTerm) {
      const params = new URLSearchParams();
      if (selectedPriceFilters.length > 0) {
        params.append('price', selectedPriceFilters.join(","));
      }
      if (selectedGenreFilters.length > 0) {
        params.append('genre', selectedGenreFilters.join(","));
      }
      if (searchTerm) {
        params.append('search', searchTerm);
      }
      url += `?${params.toString()}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handlePriceFilterChange = (e) => {
    const value = e.target.value;
    if (selectedPriceFilters.includes(value)) {
      setSelectedPriceFilters(selectedPriceFilters.filter((filter) => filter !== value));
    } else {
      setSelectedPriceFilters([...selectedPriceFilters, value]);
    }
  };

  const handleGenreFilterChange = (e) => {
    const value = e.target.value;
    if (selectedGenreFilters.includes(value)) {
      setSelectedGenreFilters(selectedGenreFilters.filter((filter) => filter !== value));
    } else {
      setSelectedGenreFilters([...selectedGenreFilters, value]);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div className="container mt-5" style={{display: props.display, marginLeft: props.marginLeft, width: props.width}}>
  {/* <form className="d-flex me-4" role="search" style={{ paddingRight: "50px" }} onSubmit={handleSearch}>
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search your favorite books"
      aria-label="Search"
      style={{ width: "400px" }}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button className="btn btn-outline-success" type="submit">
      Search
    </button>
  </form> */}
  {/* Filter components */}
  {/* Display fetched books */}
  <div className="row">
    {books.map((book) => (
      <div key={book.id} className="col-md-6">
        <div className="card mb-3">
          <img src={book.image} alt={book.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">By: {book.author}</p>
            <p className="card-text">Price: {book.price}</p>
            {/* Add to cart and wishlist buttons */}
            <button className="btn btn-primary mx-1">Add to cart</button>
            <button className="btn btn-secondary">Add to Wishlist</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Home;
