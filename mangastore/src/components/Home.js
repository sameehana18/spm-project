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

  return (
    <div className="container mt-5" style={{ display: props.display, marginLeft: props.marginLeft, width: props.width }}>
      {/* Filter components */}
      {/* Display fetched books */}
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={book.image} alt={book.title} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Home;