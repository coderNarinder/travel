import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import MultiDatePicker from 'react-multi-date-picker';
import "./index.css";
import filter from "./../../../../public/icons8-filter-30.png";
import { Row } from 'react-bootstrap';

const AdvancedSearch = () => {
  const [location, setLocation] = useState('');
  const [guestCount, setGuestCount] = useState(1); // Default value as an integer
  const [dates, setDates] = useState([null, null]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const options = [
    'Chandigarh, India',
    'Dubai',
    'Rome, Italy',
    'Washington, DC',
  ];

  const handleDateChange = (newDates) => {
    if (!newDates || newDates.length < 1) return;

    const [checkIn, checkOut] = newDates;

    const checkInDate = checkIn ? new Date(checkIn) : null;
    const checkOutDate = checkOut ? new Date(checkOut) : null;

    if (checkInDate && (!checkOutDate || checkOutDate <= checkInDate)) {
      setDates([checkIn, null]);
    } else {
      setDates(newDates);
    }
  };

  const toggleDropdown = () => setShowDropdown(prev => !prev);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <div className="box-search-advance">     
        <div id="link-list" class="tab-filter-wrap mt-4 mb-0">
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link active">Half-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Full-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Hop on Hop Off Buses<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Multi-day Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">City Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Cultural Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Sightseeing Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Private and Luxury<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Adventure Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Photography Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Safaris<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Night Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Trolly Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
            <a href="/Dubai/d828-ttd" class="tab-filter-chip link">Religious Tours<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="icon__UJ21"><path d="M12.47 13.53a.75.75 0 001.06-1.06L9.06 8l4.47-4.47a.75.75 0 10-1.06-1.06L8 6.94 3.53 2.47a.75.75 0 00-1.06 1.06L6.94 8l-4.47 4.47a.75.75 0 101.06 1.06L8 9.06l4.47 4.47z"></path></svg></a>
        </div>
        <Row className="box-bottom-search">
            <div className="item-search item-search-one position-relative">
                <div className="dropdown">
                <button 
                    className="btn dropdown-toggle" 
                    onClick={toggleDropdown}
                    aria-expanded={showDropdown}
                >
                    {location || 'Select Location'}
                </button>
                {showDropdown && (
                    <div className="dropdown-menu show">
                    <Form.Control
                        type="text"
                        placeholder="Enter your location"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {filteredOptions.map((option, index) => (
                        <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                            setLocation(option);
                            setShowDropdown(false);
                            setSearchTerm('');
                        }}
                        >
                        {option}
                        </div>
                    ))}
                    </div>
                )}
                </div>
                <Form.Control
                    type="text"
                    placeholder="Search for Activities or Tours"
                />
            </div>
            <div className="item-search">
                <MultiDatePicker
                value={dates}
                onChange={handleDateChange}
                range
                format="DD MM YYYY"
                placeholder="Select Date"
                className="search-input"
                minDate={new Date()}
                numberOfMonths={2}
                />
            </div>
            <div className="item-search bd-none">
                <button className="btn btn-black-lg-square nav-link w-100 h-100">
                <img src={filter} alt="" />
                  Advanced
                </button>
            </div>
            <div className="item-search bd-none d-flex justify-content-end">
                <button className="btn btn-black-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                Search
                </button>
            </div>
        </Row>
      </div>
    </Container>
  );
};

export default AdvancedSearch;
