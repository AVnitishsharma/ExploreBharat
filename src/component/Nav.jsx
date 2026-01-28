import { Link } from 'react-router-dom'
import NavaSearch from './NavaSearch'

const Nav = () => {
  return (
    <nav>
      <h1>ExploreBharat</h1>
      <ul className="middile">
        <Link to="/" className="navhome">Home</Link>
        <li className="populars">Popular
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
              <Link to="/tajmahal">Taj Mahal - Agra (Uttar Pradesh)</Link>
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
        <li className="thingstodo">ThingsToGo
          <div className="dropdown">
            <ul className="unisco">
              <h2>Unesco Heritage Sites</h2>
              <Link to="/tajmahal">Taj Mahal – Agra (Uttar Pradesh)</Link>
              <li>Jaipur (Rajasthan)</li>
              <li>Udaipur (Rajasthan)</li>
              <li>Lal Kila(delhi)</li>
              <li>Hampi (Karnataka)</li>
              <li>Khajuraho (Madhya Pradesh)</li>
              <li>Bodhgya (Bihar)</li>
            </ul>
            <ul className="states">
              <h2>States</h2>
              <Link to="/bihar">Bihar</Link>
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
              <br />
              <h2>Statues</h2>
              <li>Statue of Unity</li>
              <li>Statue of Liberty</li>
              <li>Statue of Unity</li>
              <li>Statue of Liberty</li>
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
        <li className="trips">Trips
          <div className="dropdown">
            <ul>
              <h2>Trips</h2>
              <li>Femaily Trips</li>
              <li>Group Trips</li>
              <li>Couple Trips</li>
              <li>Solo Travel</li>
              <li>Honeymoon</li>
            </ul>
          </div>
        </li>
        <li className="hotels">Hotels/Stay
          <div className="dropdown">
            <ul>
              <h2>Hotels</h2>
              <li>5 Star</li>
              <li>4 Star</li>
              <li>3 Star</li>
              <li>2 Star</li>
              <li>1 Star</li>
            </ul>
            <ul>
              <h2>Stay</h2>
              <li>Resorts</li>
              <li>Guest Houses</li>
              <li>Hostels</li>
              <li>HomeStay</li>
              <li>Motels</li>
              <li>Resorts</li>
              <li>Guest Houses</li>
            </ul>
          </div>
        </li>
        <li className="foodculture">Food&Culture
          <div className="dropdown">
            <ul>
              <h2>Indian Food</h2>
              <li>North Indian</li>
              <li>South Indian</li>
              <li>Bihari</li>
              <li>Punjabi</li>
              <li>Rajasthani</li>
              <li>Bengali</li>
              <li>Gujarati</li>
              <li>Kerala</li>
              <li>Tamil</li>
              <li>Andhra</li>
            </ul>
            <ul>
              <h2>Festivals</h2>
              <li>Diwali</li>
              <li>Holi</li>
              <li>Chath Puja</li>
              <li>Navratri</li>
              <li>Ganesh Chaturthi</li>
              <li>Christmas</li>
              <li>Eid</li>
            </ul>
            <ul>
              <h2>Culture</h2>
              <li>Art</li>
              <li>Architecture</li>
              <li>Music</li>
              <li>History</li>
              <li>Art</li>
              <li>Architecture</li>
            </ul>
            <ul>
              <h2>Local Traditions</h2>
              <li>Wedding</li>
              <li>Funeral</li>
              <li>Baptism</li>
              <li>Wedding</li>
              <li>Funeral</li>
              <li>Baptism</li>
            </ul>
          </div>
        </li>
        <li className="gallery">Gallery
          <div className="dropdown">
            <ul>
              <h2>Gallery</h2>
              <li>Photos</li>
              <li>Video</li>
            </ul>
            <ul>
              <h2>Travel Story</h2>
              <li>Photos</li>
              <li>Video</li>
            </ul>
            <ul>
              <h2>Hidden Places</h2>
              <li>Photos</li>
              <li>Video</li>
            </ul>
          </div>
        </li>
        <li className="aboutindia">AboutIndia
          <div className="dropdown">
            <ul>
              <h2>About India</h2>
              <li>History</li>
              <li>Culture</li>
              <li>Geography</li>
              <li>Languages</li>
              <li>Map of India</li>
            </ul>
          </div>
        </li>
        <li className="travelguide">TravelGuide</li>
        <li className="support">Support</li>
      </ul>
      <div className="right">
        <NavaSearch />
        <div className="language">
          <i class="ri-translate-2"></i>
        </div>
        <div className="id">N</div>
      </div>
    </nav>
  )
}

export default Nav