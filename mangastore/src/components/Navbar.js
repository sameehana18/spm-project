import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Best Sellers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Box Sets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <form
            className="d-flex me-4"
            role="search"
            style={{ paddingRight: "50px" }}
            onSubmit={handleSearch}
          >
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
          </form>
          {/* Other navbar content */}
          <div className="position-relative d-flex">
            <div className="ms-2" style={{ paddingRight: "3px" }}>
              <div className="dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="Links/circle-user-solid.svg"
                    alt="Account"
                    width="25"
                    height="25"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/account">
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/orders">
                      Your Orders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/wishlist">
                      Your Wishlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ms-2" style={{ paddingRight: "7px" }}>
              <a className="nav-link" href="/cart">
                <img
                  src="Links/cart-shopping-solid.svg"
                  alt="Cart"
                  width="25"
                  height="25"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
