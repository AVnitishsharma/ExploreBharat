import Sado from "../component/Sado"

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
      <div className="search">
        <p>India ke sabse khoobsurat tourist places ek hi jagah.</p>
        <input type="text" placeholder="Search places, states, destinations…" />
        <button>Explore Now</button>
      </div>
      <div className="trendingplaces">
        <h2>Popular Places</h2>
        <div className="places">
          <div className="card">
            <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
            <h2>Taj Mahal</h2>
          </div>
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
      <h2>Categories to visit</h2>
      <div className="categorycard">
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        <div className="card">
          <img src="https://i.pinimg.com/736x/f6/4a/06/f64a06a319573ceb8c195887c9e38bb1.jpg" alt="" />
          <h2>Taj Mahal</h2>
        </div>
        
      </div>
    </section>
    </>
  )
}

export default Home