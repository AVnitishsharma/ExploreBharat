import Button from "../component/button"
import Sado from "../component/Sado"
import Search from "../component/Search"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
    <section className='home'>
      <h3>VISIT</h3>
      <h2>INDIA</h2>
      <h4>& Explore</h4>
    </section>
    <Sado/>

    <section className="trending">
      <p>India ke sabse khoobsurat tourist places ek hi jagah.</p>
      <Search />
      <br />
      <div className="trendingplaces">
        <h2>Popular Places</h2>
        <div className="places">
          <Link to="/tajmahal" className="card">
            <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
            <h2>Taj Mahal</h2>
          </Link>
          <div className="card">
            <img src="https://i.pinimg.com/736x/3d/05/c2/3d05c2ba1545eeb455bd2bfb80b51d32.jpg" alt="" />
            <h2>Mnali</h2>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/d5/52/7c/d5527cb84cc7109e6964d63ff3c55263.jpg" alt="" />
            <h2>Vnarsi</h2>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/43/67/15/436715001632a3003649ce65ed00f778.jpg" alt="" />
            <h2>Goa</h2>
          </div>
          <div className="card">
            <img src="https://i.pinimg.com/736x/af/59/c4/af59c46daee9ae20107c52ba04135f82.jpg" alt="" />
            <h2>Kerala</h2>
          </div>
        </div>
      </div>
      <Sado/>
    </section>
    
    <section className="category">
      <h2>Places By Categories</h2>
      <div className="categorycard">
        <div className="card">
          <img src="https://i.pinimg.com/736x/b6/f2/ac/b6f2ac2056213da2b6ee72f06c3d5a86.jpg" alt="" />
          <h2>Historical Places</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/1200x/93/d0/5b/93d05b299d870053053f0f71d403a1d2.jpg" alt="" />
          <h2>Religious Places</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/1200x/e9/de/32/e9de3281fdd96526fa27bd88ce0af6ea.jpg" alt="" />
          <h2>Hill Stations</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/1200x/41/39/cd/4139cd4f3582c53d080ee8db9c86a153.jpg" alt="" />
          <h2>Beaches</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/1200x/45/79/aa/4579aa94f2dfdf9013c6016751bb803b.jpg" alt="" />
          <h2>Nature Wildlife</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/7a/3e/f67a3e0a96ba728d80001bf6bd06ca03.jpg" alt="" />
          <h2>Adventure Places</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/8c/8a/8a/8c8a8afa908d1ab3855ac4a447a517e4.jpg" alt="" />
          <h2>Heritage Places</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/60/86/f7/6086f73e0fa2c3724a96cf119ab64bb0.jpg" alt="" />
          <h2>Desert Places</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/8a/4d/71/8a4d710d04bb0162afa5f7da406bd142.jpg" alt="" />
          <h2>waters Houseboat Places</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/1200x/4a/14/0b/4a140b9d9b5251ce28ca8d3fb724f9f6.jpg" alt="" />
          <h2>Modern City</h2>
        </div>
        
      </div>
    </section>

    <Sado/>
    <section className="india">
      <div className="info">
        <h2>India</h2>
        <p>India is a diverse country located in South Asia. It is known for its ancient history, rich culture, and natural beauty. India is often called the land of unity in diversity because people of many religions, languages, and traditions live together.
          
        The history of India is very old. The Indus Valley Civilization was one of the earliest civilizations in the world. Later, great empires like the Maurya, Gupta, and Mughal dynasties ruled the country. India gained independence in 1947 under the leadership of Mahatma Gandhi.
          
        India has a varied geography. The Himalayas are in the north, fertile plains lie in the center, and the Deccan Plateau is in the south. The country is surrounded by seas on three sides.
          
        Indian culture is colorful and rich. Festivals like Diwali, Holi, Eid, and Christmas are celebrated with joy. India is also famous for yoga, music, dance, and tourism. The Taj Mahal, Goa, Kerala, and the Himalayas attract visitors from all over the world.
        </p>
        <Button text="Read More" />
      </div>
      <div className="map">
        <img src="https://i.pinimg.com/1200x/c8/cc/36/c8cc36853208778a85995d11a00cf7a4.jpg" alt="" />
      </div>
    </section>
    <Sado/>
    </>
  )
}

export default Home