import "./Bihar.css"

const Bihar = () => {
  const districts = [
    { 
      name: "Patna", 
      details: "Capital city, home to Golghar and ancient Pataliputra.",
      places: [
        { name: "Golghar", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/patna/golghar/Golghar_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" },
        { name: "Bihar Museum", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/patna/bihar_museum/Bihar_Museum_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" }
      ]
    },
    { 
      name: "Gaya", 
      details: "A holy city famous for the Vishnupad Temple and Pind Daan.",
      places: [
        { name: "Mahabodhi Temple", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/gaya/mahabodhi_temple/Mahabodhi_Temple_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" },
        { name: "Vishnupad Temple", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/gaya/vishnupad_temple/Vishnupad_Temple_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" }
      ]
    },
    { 
      name: "Nalanda", 
      details: "Famous for the ancient Nalanda University ruins.",
      places: [
        { name: "Nalanda University", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/nalanda_university/Nalanda_University_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" },
        { name: "Pawapuri", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/nalanda/pawapuri/Pawapuri_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" }
      ]
    },
    { 
      name: "Darbhanga", 
      details: "Cultural capital of Mithila, known for Makhana and Art.",
      places: [
        { name: "Darbhanga Fort", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Darbhanga_Fort.jpg/250px-Darbhanga_Fort.jpg" },
        { name: "Shyama Mai Temple", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Shyama_Mai_Temple_Darbhanga.jpg/250px-Shyama_Mai_Temple_Darbhanga.jpg" }
      ]
    },
    { 
      name: "Madhubani", 
      details: "World-famous for its traditional Madhubani paintings.",
      places: [
        { name: "Madhubani Art", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Madhubani_painting.jpg/250px-Madhubani_painting.jpg" },
        { name: "Kapileshwar Sthan", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Kapileshwar_Sthan.jpg/250px-Kapileshwar_Sthan.jpg" }
      ]
    },
    { 
      name: "Rohtas", 
      details: "Home to the historic Rohtasgarh Fort and Sher Shah Suri.",
      places: [
        { name: "Rohtasgarh Fort", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/rohtas/rohtasgarh_fort/Rohtasgarh_Fort_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" },
        { name: "Sher Shah Tomb", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/rohtas/sher_shah_suri_tomb/Sher_Shah_Suri_Tomb_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" }
      ]
    },
    { 
      name: "Bhagalpur", 
      details: "The 'Silk City', famous for Tussar Silk and Dolphins.",
      places: [
        { name: "Vikramshila", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/bhagalpur/vikramshila_gangetic_dolphin_sanctuary/Vikramshila_Gangetic_Dolphin_Sanctuary_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" },
        { name: "Mandar Hill", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/banka/mandar_hill/Mandar_Hill_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" }
      ]
    },
    { 
      name: "Vaishali", 
      details: "Birthplace of Lord Mahavira and the world's first republic.",
      places: [
        { name: "Ashokan Pillar", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/vaishali/ashokan_pillar/Ashokan_Pillar_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" },
        { name: "Vishwa Shanti Stupa", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/vaishali/vishwa_shanti_stupa/Vishwa_Shanti_Stupa_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" }
      ]
    },
    { 
      name: "Kaimur", 
      details: "Known for Kaimur Wildlife Sanctuary and waterfalls.",
      places: [
        { name: "Telhar Kund", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/kaimur/telhar_kund/Telhar_Kund_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" },
        { name: "Karkatgarh Waterfall", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/kaimur/karkatgarh_waterfall/Karkatgarh_Waterfall_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" }
      ]
    },
    { 
      name: "Aurangabad", 
      details: "Known for the Sun Temple at Deo.",
      places: [
        { name: "Deo Sun Temple", img: "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/aurangabad/deo_sun_temple/Deo_Sun_Temple_1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg" }
      ]
    },
    { name: "Siwan", details: "Historical significance, birthplace of Dr. Rajendra Prasad.", places: [] },
    { name: "Ara", details: "Known for its historical significance in the 1857 revolt.", places: [] },
    { name: "Muzaffarpur", details: "Known as the 'Land of Litchis' (Shahi Litchi).", places: [] },
    { name: "Purnia", details: "Oldest district in Bihar, known for its greenery.", places: [] },
    { name: "Buxar", details: "Historical city known for the Battle of Buxar and ancient temples.", places: [] },
    { name: "Nawada", details: "Famous for Kakolat Waterfall.", places: [] },
    { name: "Jehanabad", details: "Known for the Barabar Caves.", places: [] },
  ];

  return (
    <div className="bihar">
      <div className="top">
        <video src="https://tourism.bihar.gov.in/content/dam/bihar-tourism/videos/hero_audio_video/english/Bihar%20English.mp4" autoPlay loop muted ></video>
        <h2>Blissful<br />Bihar</h2>
      </div>
      <ul className="navbar">
        <li>Circuits</li>
        <li>Destinations</li>
        <li>Districts</li>
        <li>Tours</li>
        <li>Touch</li>
        <li>Seen</li>
        <li>Taste</li>
        <li>Event Calander</li>
        <li>About Bihar</li>
      </ul>
      <h3 className="topheading">A land of timeless <img src="https://i.pinimg.com/1200x/da/f9/42/daf942b031e3037eeef7c52befbcb4ea.jpg" alt="" /> ,<br /> <img src="https://i.pinimg.com/1200x/a9/11/0a/a9110a3e92a4bc69ef95ee77978e4218.jpg" alt="" /> Journeys and Rich <img src="https://i.pinimg.com/1200x/e2/4e/d2/e24ed248b9c2440b81e96b0d8a0ddc7f.jpg" alt="" /> experiences.</h3>
      <div className="topplaces">
        <div className="box">
          <h2>Top Places</h2>
        </div>
        <div className="box">
          <img src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2025/04/unnamed-26.jpg" alt="" />
          <h2>Mithila</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/736x/1b/cd/b4/1bcdb474499aa1cf050cf7e48ecbd9b9.jpg" alt="" />
          <h2>Mahabodhi Temple</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/1200x/08/55/e9/0855e9579ca78cc9ba9d08d1f56400f7.jpg" alt="" />
          <h2>Nalanda University</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/1200x/d7/c6/88/d7c68880a50f2210c44773205605a465.jpg" alt="" />
          <h2>The Grate Budha.Statue</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/736x/d8/90/77/d89077d2cd929502bb74538a325273c6.jpg" alt="" />
          <h2>Valmiki Tiger.Reserve</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/736x/b0/3b/d6/b03bd61d75a2d404c9cacc0c4478dbf4.jpg" alt="" />
          <h2>Bihar Museum</h2>
        </div>
        <div className="box">         
        </div>
      </div>
      <h2 className="hcategories">CATEGORIES</h2>
      <div className="biharcategory">
        <div className="box">
          <img src="https://i.pinimg.com/736x/c8/82/6b/c8826be12a20eccb568d745c38675f4c.jpg" alt="" />
          <h2>History</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/1200x/b6/c7/82/b6c7829b93b50d72baa9606efdb9d91d.jpg" alt="" />
          <h2>Spritual</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/736x/e1/8f/14/e18f148cef082e9ec8774cf859d9d6dc.jpg" alt="" />
          <h2>Advanters</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/736x/4e/5c/d7/4e5cd7c4ee87fb6f4de378cccf74212f.jpg" alt="" />
          <h2>Nature</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/736x/ff/c6/e0/ffc6e0ca61e2d13f4f59db1f8c36c01b.jpg" alt="" />
          <h2>Foods</h2>
        </div>
        <div className="box">
          <img src="https://i.pinimg.com/736x/4b/1e/34/4b1e34fd34dc508690c21e8dce33597f.jpg" alt="" />
          <h2>Culture</h2>
        </div>
        
      </div>
      <div className="bihardist">
        <h3>Districts</h3>
        <div className="box">
          {districts.map((dist, index) => (
            <div className="dist-card" key={index}>
              <h2>{dist.name}</h2>
              <div className="dist-popup">
                <h4>{dist.name}</h4>
                <p>{dist.details}</p>
                <div className="places-grid">
                  {dist.places && dist.places.map((place, i) => (
                    <div className="place-item" key={i}>
                      <img src={place.img} alt={place.name} />
                      <span>{place.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bihar