import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Home = (props) => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = props.booksPerPage; // Number of books to display per page
  const totalBooks = books.length;

  useEffect(() => {
    fetchBooks();
  }, [currentPage, props.searchTerm]);

  const fetchBooks = async () => {
    let url = `http://127.0.0.1:8000/api/books?search=${props.searchTerm}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Logic to get books for the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Logic for changing page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <div className="container mt-5" style={{ display: props.display, marginLeft: props.marginLeft, width: props.width }}>
        {/* Display fetched books */}
        <div className="row">
          {currentBooks.map((book) => (
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
        {/* Pagination buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-success mx-2" onClick={prevPage} disabled={currentPage === 1}>&larr; Previous</button>
          <button className="btn btn-success mx-2" onClick={nextPage} disabled={indexOfLastBook >= totalBooks}>Next &rarr;</button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  booksPerPage: PropTypes.number.isRequired,
  display: PropTypes.string,
  marginLeft: PropTypes.string,
  width: PropTypes.string,
  searchTerm: PropTypes.string.isRequired
};

export default Home;
