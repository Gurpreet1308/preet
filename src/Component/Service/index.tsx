"use client";

export default function Service() {
  return (
    <section className="amenities-section">
      <h5 className="subtitle">Discover our All</h5>
      <h2 className="title">Featured Amenities</h2>

      <div className="amenities-grid service">
        <div className="amenity-card">
          <img src="/dinner.svg" alt="Dining" className="amenity-icon" />
          <h3 className="amenity-title">Gourmet Dining</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas molestiae necessitatibus totam facere exercitationem cum dignissimos recusandae repellat.</p>
        </div>

        <div className="amenity-card">
          <img src="/air-conditioner.svg" alt="Air Condition" className="amenity-icon" />
          <h3 className="amenity-title">Air Condition</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas molestiae necessitatibus totam facere exercitationem cum dignissimos recusandae repellat.</p>
        </div>

        <div className="amenity-card">
          <img src="/digital-door.svg" alt="Smart Lock" className="amenity-icon" />
          <h3 className="amenity-title">Smart Lock</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas molestiae necessitatibus totam facere exercitationem cum dignissimos recusandae repellat.</p>
        </div>

        <div className="amenity-card">
          <img src="/weightlifter.svg" alt="Gym Center" className="amenity-icon" />
          <h3 className="amenity-title">Gym Center</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas molestiae necessitatibus totam facere exercitationem cum dignissimos recusandae repellat.</p>
        </div>

        <div className="amenity-card">
          <img src="/speed.svg" alt="Speed Internet" className="amenity-icon" />
          <h3 className="amenity-title">Speed Internet</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas molestiae necessitatibus totam facere exercitationem cum dignissimos recusandae repellat.</p>
        </div>

        <div className="amenity-card">
          <img src="/wine-glass.svg" alt="Liquor Bar" className="amenity-icon" />
          <h3 className="amenity-title">Liquor Bar</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas molestiae necessitatibus totam facere exercitationem cum dignissimos recusandae repellat.</p>
        </div>
      </div>

      <button className="view-btn">View Full Menu</button>
    </section>
  );
}
