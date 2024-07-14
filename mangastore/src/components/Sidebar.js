import React, { useState } from "react";

const Sidebar = () => {
  const [selectedPriceFilters, setSelectedPriceFilters] = useState([]);
  const [selectedGenreFilters, setSelectedGenreFilters] = useState([]);

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

  const handleClearAll = () => {
    setSelectedPriceFilters([]);
    setSelectedGenreFilters([]);
  };

  return (
    <div className="sidebar" style={{ width: "300px", position: "absolute", paddingLeft: "20px", display: "inline-block" }}>
      <div className="filters">
        {/* Filter components */}
        <div className="row align-items-center">
          <div className="col-9">
            <h3>Filters</h3>
          </div>
          <div className="col-3 text-right">
            <button className="btn btn-danger btn-sm" onClick={handleClearAll} style={{width: "70px"}}>Clear All</button>
          </div>
        </div>
        <hr />
        <div className="most-popular">
          <h3>Most Popular</h3>
          <ul className="list-unstyled">
            {['Beserk', 'Jo Jo bizarre adventures', 'Vagabond', 'One Piece', 'Monster', 'Slam Dunk', 'Vinland Saga', 'Fullmetal Alchemist', 'Haikyuu'].map(title => (
              <li key={title}><a href="#" style={{textDecoration: "none", color: "black"}}>{title}</a></li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="filter-section">
          <h4>Price</h4>
          {['200-860', '860-1520', '1520-2180', '2180-2840', '2840-3500'].map(priceRange => (
            <div key={priceRange} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={priceRange}
                id={`price-${priceRange}`}
                checked={selectedPriceFilters.includes(priceRange)}
                onChange={handlePriceFilterChange}
              />
              <label className="form-check-label" htmlFor={`price-${priceRange}`}>{priceRange}</label>
            </div>
          ))}
        </div>
        <hr />
        <div className="filter-section">
          <h4>Genre</h4>
          {['action', 'adventure', 'comedy', 'drama', 'fantasy', 'horror', 'mystery', 'romance', 'sci-fi'].map(genre => (
            <div key={genre} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={genre}
                id={`genre-${genre}`}
                checked={selectedGenreFilters.includes(genre)}
                onChange={handleGenreFilterChange}
              />
              <label className="form-check-label" htmlFor={`genre-${genre}`}>{genre}</label>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;