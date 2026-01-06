
const Nav = () => {
  return (
    <nav>
      <h1>ExploreBharat</h1>
      <ul className="middile">
        <li className="navhome">Home</li>
        <li className="populars">
          Popular
          <div className="dropdown">
            <ul className="hillstations">
              <h2>Hill Stations</h2>
              <li>Shimla (Himachal Pradesh)</li>
              <li>Manali (Himachal Pradesh)</li>
              <li>Mussoorie (Uttarakhand)</li>
              <li>Nainital (Uttarakhand)</li>
              <li>Darjeeling (West Bengal)</li>
              <li>Ooty (Tamil Nadu)</li>
              <li>Mount Abu (Rajasthan)</li>
            </ul>
            <ul className="beaches">
              <h2>Beaches</h2>
              <li>Goa</li>
              <li>Kovalam (Kerala)</li>
              <li>Varkala (Kerala)</li>
              <li>Puri (Odisha)</li>
              <li>Andaman & Nicobar Islands</li>
              <li>Diu (Gujarat)</li>
            </ul>
            <ul className="hiistorical">
              <h2>Historical Places</h2>
              <li>Taj Mahal – Agra (Uttar Pradesh)</li>
              <li>Jaipur (Rajasthan)</li>
              <li>Udaipur (Rajasthan)</li>
              <li>Lal Kila(delhi)</li>
              <li>Hampi (Karnataka)</li>
              <li>Khajuraho (Madhya Pradesh)</li>
            </ul>
            <ul className="hillstations">
              <h2>Religious / Spiritual Places</h2>
              <li>Ayodhya (Uttar Pradesh)</li>
              <li>Haridwar (Uttarakhand)</li>
              <li>Rishikesh (Uttarakhand)</li>
              <li>Tirupati (Andhra Pradesh)</li>
              <li>Vaishno Devi (Jammu & Kashmir)</li>
              <li>Amritsar – Golden Temple (Punjab)</li>
              <li>Bodh Gaya (Bihar)</li>
            </ul>
            <ul className="hillstations">
              <h2>Nature & Wildlife</h2>
              <li>Kerala (Backwaters)</li>
              <li>Kaziranga National Park (Assam)</li>
              <li>Jim Corbett National Park (Uttarakhand)</li>
              <li>Sundarbans (West Bengal)</li>
              <li>Ladakh</li>
            </ul>
          </div>
        </li>
        <li className="thingstodo">
          ThingsToDo
          <div className="dropdown">
            <ul className="unisco">
              <h2>Unesco Heritage Sites</h2>
              <li>Taj Mahal – Agra (Uttar Pradesh)</li>
              <li>Jaipur (Rajasthan)</li>
              <li>Udaipur (Rajasthan)</li>
              <li>Lal Kila(delhi)</li>
              <li>Hampi (Karnataka)</li>
              <li>Khajuraho (Madhya Pradesh)</li>
              <li>Bodhgya (Bihar)</li>
            </ul>
            <ul className="states">
              <h2>States</h2>
              <li>Bihar</li>
              <li>Uttar Pradesh</li>
              <li>Rajasthan</li>
              <li>Madhya Pradesh</li>
              <li>Uttarakhand</li>
              <li>Assam</li>
              <li>West Bengal</li>
              <li>Andhra Pradesh</li>
              <li>Karnataka</li>
              <li>Kerala</li>
              <li>Tamil Nadu</li>
              <li>Punjab</li>
            </ul>
            <ul className="city">
              <h2>Cities</h2>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Kolkata</li>
              <li>Bangalore</li>
              <li>Hyderabad</li>
              <li>Pune</li>
              <li>Jaipur</li>
            </ul>
            <ul className="adventure">
              <h2>Adventure</h2>
              <li>Trekking</li>
              <li>Paragliding</li>
              <li>Parasailing</li>
              <li>Zip Line</li>
              <li>Scuba Diving</li>
              <li>Canoeing</li>
              <li>Kayaking</li>
            </ul>
            <ul className="spinritual">
              <h2>Spiritual</h2>
              <li>Temples</li>
              <li>Yoga</li>
              <li>Ashrms</li>
            </ul>
            <ul className="beaches">
              <h2>Beaches</h2>
              <li>Goa</li>
              <li>Kovalam (Kerala)</li>
              <li>Varkala (Kerala)</li>
              <li>Puri (Odisha)</li>
            </ul>
            <ul className="wildlife">
              <h2>Wildlife</h2>
              <li>Kerala (Backwaters)</li>
              <li>Kaziranga National Park (Assam)</li>
              <li>Jim Corbett National Park (Uttarakhand)</li>
              <li>Sundarbans (West Bengal)</li>
            </ul>
          </div>
        </li>
        <li className="packages">Packages/Trips</li>
        <li className="hotels">Hotels/Stay</li>
        <li className="foodculture">Food&Culture</li>
        <li className="blog">Blog</li>
        <li className="aboutindia">AboutIndia</li>
        <li className="travelguide">TravelGuide</li>
        <li className="support">Support</li>
      </ul>
      <div className="right">
        <i className="ri-search-line"></i>
        <div className="language">En</div>
        <div className="id">N</div>
      </div>
    </nav>
  )
}

export default Nav