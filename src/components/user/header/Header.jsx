import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "../../../../public/logo.svg";
import "./header.scss";

export default function Header() {
  const [expanded, setExpanded] = useState(false); // Start collapsed

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Navbar expanded={expanded} className="top-header" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} width="150" className="d-inline-block align-center" alt="Logo" />
        </Navbar.Brand>        
        <Nav className="language-dropdown">
          <NavDropdown title="EN" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#language1">English</NavDropdown.Item>
            <NavDropdown.Item href="#language2">Arabic</NavDropdown.Item>
            <NavDropdown.Item href="#language3">Spanish</NavDropdown.Item>
            <NavDropdown.Item href="#language4">Hindi</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
        <Navbar.Collapse className="top-navigation" id="navbarScroll">
          <Nav id="navbarScroll">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Tours" id="tours-dropdown">
              <NavDropdown title="City Tours" id="city-tours-dropdown">
                <NavDropdown.Item href="#">New York City Tour</NavDropdown.Item>
                <NavDropdown.Item href="#">Paris Sightseeing</NavDropdown.Item>
                <NavDropdown.Item href="#">Tokyo City Experience</NavDropdown.Item>
                <NavDropdown.Item href="#">Rome Historical Tour</NavDropdown.Item>
                <NavDropdown.Item href="#">London Walking Tour</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Adventure Tours" id="adventure-tours-dropdown">
                <NavDropdown.Item href="#">Amazon Rainforest Trek</NavDropdown.Item>
                <NavDropdown.Item href="#">Grand Canyon Rafting</NavDropdown.Item>
                <NavDropdown.Item href="#">Costa Rica Zip Line Adventure</NavDropdown.Item>
                <NavDropdown.Item href="#">Safari in Kenya</NavDropdown.Item>
                <NavDropdown.Item href="#">Bungee Jumping in New Zealand</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Cultural Tours" id="cultural-tours-dropdown">
                <NavDropdown.Item href="#">Cultural Immersion in India</NavDropdown.Item>
                <NavDropdown.Item href="#">Traditional Japan Experience</NavDropdown.Item>
                <NavDropdown.Item href="#">Mayan Ruins Tour in Mexico</NavDropdown.Item>
                <NavDropdown.Item href="#">Explore Egyptian Heritage</NavDropdown.Item>
                <NavDropdown.Item href="#">Greek Islands Cultural Tour</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Food Tours" id="food-tours-dropdown">
                <NavDropdown.Item href="#">Italian Culinary Tour</NavDropdown.Item>
                <NavDropdown.Item href="#">Street Food Tour in Bangkok</NavDropdown.Item>
                <NavDropdown.Item href="#">Wine Tasting in Napa Valley</NavDropdown.Item>
                <NavDropdown.Item href="#">Sushi Making Class in Tokyo</NavDropdown.Item>
                <NavDropdown.Item href="#">Cooking Class in Tuscany</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Wildlife Tours" id="wildlife-tours-dropdown">
                <NavDropdown.Item href="#">Galapagos Islands Wildlife Tour</NavDropdown.Item>
                <NavDropdown.Item href="#">Antarctic Cruise Expedition</NavDropdown.Item>
                <NavDropdown.Item href="#">Safari in South Africa</NavDropdown.Item>
                <NavDropdown.Item href="#">Polar Bear Viewing in Canada</NavDropdown.Item>
                <NavDropdown.Item href="#">Bird Watching in Costa Rica</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/list">View All Tours</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Destinations" id="destinations-dropdown">
              <NavDropdown.Item href="#">Paris, France</NavDropdown.Item>
              <NavDropdown.Item href="#">Tokyo, Japan</NavDropdown.Item>
              <NavDropdown.Item href="#">New York, USA</NavDropdown.Item>
              <NavDropdown.Item href="#">Sydney, Australia</NavDropdown.Item>
              <NavDropdown.Item href="#">Cape Town, South Africa</NavDropdown.Item>
              <NavDropdown.Item href="#">Rio de Janeiro, Brazil</NavDropdown.Item>
              <NavDropdown.Item href="#">Barcelona, Spain</NavDropdown.Item>
              <NavDropdown.Item href="#">Dubai, UAE</NavDropdown.Item>
              <NavDropdown.Item href="#">Rome, Italy</NavDropdown.Item>
              <NavDropdown.Item href="#">Istanbul, Turkey</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">View All Destinations</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Activities" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Desert Safari</NavDropdown.Item>
              <NavDropdown.Item href="#">Sky Diving</NavDropdown.Item>
              <NavDropdown.Item href="#">Rowing</NavDropdown.Item>
              <NavDropdown.Item href="#">Bungee Jumping</NavDropdown.Item>
              <NavDropdown.Item href="#">Surfing</NavDropdown.Item>
              <NavDropdown title="Adventure" id="adventure-dropdown">
                <NavDropdown.Item href="#">Escape Room</NavDropdown.Item>
                <NavDropdown.Item href="#">Sea Diving</NavDropdown.Item>
                <NavDropdown.Item href="#">Snow Boarding</NavDropdown.Item>
                <NavDropdown.Item href="#">Sand Skating</NavDropdown.Item>
                <NavDropdown.Item href="#">Hiking Adventures</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Water Sports" id="water-sports-dropdown">
                <NavDropdown.Item href="#">Jet Skiing</NavDropdown.Item>
                <NavDropdown.Item href="#">Snorkeling</NavDropdown.Item>
                <NavDropdown.Item href="#">Wakeboarding</NavDropdown.Item>
                <NavDropdown.Item href="#">Kayaking</NavDropdown.Item>
                <NavDropdown.Item href="#">Fishing Expeditions</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Winter Sports" id="winter-sports-dropdown">
                <NavDropdown.Item href="#">Skiing</NavDropdown.Item>
                <NavDropdown.Item href="#">Snowshoeing</NavDropdown.Item>
                <NavDropdown.Item href="#">Ice Climbing</NavDropdown.Item>
                <NavDropdown.Item href="#">Sledding</NavDropdown.Item>
                <NavDropdown.Item href="#">Snowmobiling</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cultural Experiences" id="cultural-dropdown">
                <NavDropdown.Item href="#">Culinary Tours</NavDropdown.Item>
                <NavDropdown.Item href="#">Art Workshops</NavDropdown.Item>
                <NavDropdown.Item href="#">Historical Tours</NavDropdown.Item>
                <NavDropdown.Item href="#">Local Festivals</NavDropdown.Item>
                <NavDropdown.Item href="#">Traditional Dance Classes</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Outdoor Activities" id="outdoor-dropdown">
                <NavDropdown.Item href="#">Camping</NavDropdown.Item>
                <NavDropdown.Item href="#">Mountain Biking</NavDropdown.Item>
                <NavDropdown.Item href="#">Rock Climbing</NavDropdown.Item>
                <NavDropdown.Item href="#">ATV Riding</NavDropdown.Item>
                <NavDropdown.Item href="#">Bird Watching</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Nature Tours" id="nature-dropdown">
                <NavDropdown.Item href="#">Wildlife Safari</NavDropdown.Item>
                <NavDropdown.Item href="#">Nature Photography</NavDropdown.Item>
                <NavDropdown.Item href="#">Botanical Tours</NavDropdown.Item>
                <NavDropdown.Item href="#">Stargazing</NavDropdown.Item>
                <NavDropdown.Item href="#">Forest Hikes</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Health & Wellness" id="wellness-dropdown">
                <NavDropdown.Item href="#">Yoga Retreats</NavDropdown.Item>
                <NavDropdown.Item href="#">Spa Days</NavDropdown.Item>
                <NavDropdown.Item href="#">Meditation Workshops</NavDropdown.Item>
                <NavDropdown.Item href="#">Fitness Boot Camps</NavDropdown.Item>
                <NavDropdown.Item href="#">Wellness Cruises</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Family Activities" id="family-dropdown">
                <NavDropdown.Item href="#">Amusement Parks</NavDropdown.Item>
                <NavDropdown.Item href="#">Zoo Visits</NavDropdown.Item>
                <NavDropdown.Item href="#">Family Cooking Classes</NavDropdown.Item>
                <NavDropdown.Item href="#">Aquarium Tours</NavDropdown.Item>
                <NavDropdown.Item href="#">Kids Adventure Camps</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Unique Experiences" id="unique-dropdown">
                <NavDropdown.Item href="#">Hot Air Ballooning</NavDropdown.Item>
                <NavDropdown.Item href="#">Helicopter Tours</NavDropdown.Item>
                <NavDropdown.Item href="#">Escape Room Challenges</NavDropdown.Item>
                <NavDropdown.Item href="#">Glamping</NavDropdown.Item>
                <NavDropdown.Item href="#">Luxury Yacht Cruises</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">View All Activities</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">My Bookings</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#" className="btn btn-black-lg-square">Sign in
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15L15 8L8 1M15 8L1 8" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
