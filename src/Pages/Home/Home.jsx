import './Home.css'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/HomePage.png'
import essentialStaples from '../../assets/EssentialStaples.png'
import luminaGold from '../../assets/LuminaGold.png'
import seasonalEdits from '../../assets/SeasonalEdits.png'
import ourPhilosophy from '../../assets/OurPhilosophy.png'

function Home() {
  return (
    <>
      
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="hero-subtitle">THE SPRING COLLECTION 2024</p>
          <h1 className="hero-title">
            Effortless Elegance, Curated for the Intentional Soul.
          </h1>
          <div className="d-flex gap-3 hero-buttons">
            <button className="btn btn-lumina-primary">SHOP NOW</button>
            <button className="btn btn-lumina-outline">DISCOVER MORE</button>
          </div>
        </div>
      </section>

      
      <section className="container py-5 collections-section">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="collections-heading">Featured Collections</h2>
          <Link to="/shop" className="view-all-link">VIEW ALL COLLECTIONS</Link>
        </div>

        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div
              className="collection-card large-card"
              style={{ backgroundImage: `url(${essentialStaples})` }}
            >
              <div className="collection-overlay"></div>
              <div className="collection-text">
                <h5>Essential Staples</h5>
                <p>Timeless pieces for every wardrobe.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="row g-3 h-100">
              <div className="col-12">
                <div
                  className="collection-card small-card"
                  style={{ backgroundImage: `url(${seasonalEdits})` }}
                >
                  <div className="collection-overlay"></div>
                  <div className="collection-text">
                    <h5>Seasonal Edits</h5>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div
                  className="collection-card small-card"
                  style={{ backgroundImage: `url(${luminaGold})` }}
                >
                  <div className="collection-overlay"></div>
                  <div className="collection-text">
                    <h5>Lumina Gold</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="philosophy-section">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6">
              <div className="philosophy-image-wrap">
                <img src={ourPhilosophy} alt="Our Philosophy" className="philosophy-main-img" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <p className="philosophy-label">OUR PHILOSOPHY</p>
              <h2 className="philosophy-heading">
                Design with purpose, worn with confidence.
              </h2>
              <p className="philosophy-text">
                LUMINA was founded on the belief that luxury should be felt, not
                just seen. Every piece in our collection is meticulously crafted
                from sustainably sourced materials, ensuring that our impact on
                the world is as beautiful as our aesthetic.
              </p>
              <p className="philosophy-text">
                We don't follow trends; we create foundations. Our designers focus
                on architectural silhouettes that transition effortlessly from
                dawn to dusk, allowing you to curate a life that is both
                functional and exquisite.
              </p>
              <Link to="/about" className="full-story-link">THE FULL STORY &gt;</Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="newsletter-section">
        <div className="container py-5 text-center">
          <h2 className="newsletter-heading">Join the Inner Circle</h2>
          <p className="newsletter-text">
            Be the first to access limited-edition releases and private seasonal
            sales. No noise, just inspiration.
          </p>

          <div className="newsletter-form mx-auto">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="newsletter-input"
            />
            <button className="newsletter-btn">SUBSCRIBE</button>
          </div>

          <div className="social-icons mt-5 d-flex justify-content-center gap-4">
            <div className="social-icon">
              <i className="bi bi-globe"></i>
              <span>INSTAGRAM</span>
            </div>
            <div className="social-icon">
              <i className="bi bi-share"></i>
              <span>PINTEREST</span>
            </div>
            <div className="social-icon">
              <i className="bi bi-play-circle"></i>
              <span>TIKTOK</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home