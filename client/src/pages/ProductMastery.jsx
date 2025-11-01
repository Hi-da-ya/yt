import { useNavigate } from 'react-router-dom'
import './ProductMastery.css'

const ProductMastery = () => {
  const navigate = useNavigate()

  return (
    <div className="product-mastery-page">
      <div className="product-mastery-container">
        {/* Header Section */}
        <div className="product-mastery-header">
          <h1 className="product-mastery-title">Young Techiez School</h1>
          <p className="product-mastery-subtitle">Skills That Actually Work ‘Kwa Ground’</p>
          <p className="product-mastery-description">
            We’re done with empty theory.  
            Here, we learn by doing. We role-play real product chaos, automate like pros,  
            and tell stories that sell ideas.  
          </p>
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">

          {/* Product Mastery Course */}
          <div className="course-card course-card--featured">
            <div className="course-header">
              <div className="course-icon">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="course-badge">Featured</div>
            </div>

            <h3 className="course-title">Product Mastery</h3>
            <p className="course-description">
              You’ve whispered it for months: “I know Product might be for me.”  
              This is your sign to stop saying ‘soon’ — and start.  
              We’ll train you, coach you, and push you to think, talk, and act like a Product Manager.
            </p>

            <ul className="course-features">
              <li>✓ Product sense & fundamentals</li>
              <li>✓ Real African market case studies</li>
              <li>✓ Discovery, MVPs & stakeholder alignment</li>
              <li>✓ Role-play simulations + portfolio case study</li>
            </ul>

            <div className="course-footer">
              <span className="course-duration">5 days</span>
              <div className="course-actions">
                <button
                  className="course-btn-learn"
                  onClick={() => navigate('/course/product-mastery')}
                >
                  Learn More
                </button>
                <button className="course-btn bg-gradient-to-br from-[#FF4FA3] to-[#212121]">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* No Code Automation Course */}
          <div className="course-card">
            <div className="course-header">
              <div className="course-icon">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="course-title">No Code Automation</h3>
            <p className="course-description">
              You don’t need to code to build.  
              Learn to automate workflows, optimize processes, and launch MVPs faster than ever —  
              all without writing a single line of code.
            </p>
            <ul className="course-features">
              <li>✓ Automation & workflow design</li>
              <li>✓ Business process optimization</li>
              <li>✓ Hands-on projects with real tools</li>
              <li>✓ Build working prototypes in class</li>
            </ul>
            <div className="course-footer">
              <span className="course-duration">3 days</span>
              <div className="course-actions">
                <button
                  className="course-btn-learn"
                  onClick={() => navigate('/course/no-code-automation')}
                >
                  Learn More
                </button>
                <button className="course-btn bg-gradient-to-br from-[#FF4FA3] to-[#212121]">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* The Art of Pitching Course */}
          <div className="course-card">
            <div className="course-header">
              <div className="course-icon">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                </svg>
              </div>
            </div>
            <h3 className="course-title">The Art of Pitching</h3>
            <p className="course-description">
              Great ideas don’t sell themselves — storytellers do.  
              Learn to communicate like a founder, persuade like a marketer, and  
              pitch like your dream depends on it (because it just might).
            </p>
            <ul className="course-features">
              <li>✓ Storytelling & persuasion</li>
              <li>✓ Investor-ready pitch decks</li>
              <li>✓ African venture insights</li>
              <li>✓ Real pitch simulations</li>
            </ul>
            <div className="course-footer">
              <span className="course-duration">3 days</span>
              <div className="course-actions">
                <button
                  className="course-btn-learn"
                  onClick={() => navigate('/course/art-of-pitching')}
                >
                  Learn More
                </button>
                <button className="course-btn bg-gradient-to-br from-[#FF4FA3] to-[#212121]">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="cta-section bg-gradient-to-br from-[#FF4FA3] to-[#212121]">
          <h3>Ready to Make the Jump?</h3>
          <p>
            You don’t have to do it alone — join our tribe of makers, dreamers, and doers  
            shaping Africa’s digital future, one product at a time.
          </p>
          <button
            className="cta-btn"
            onClick={() => window.open('https://www.youtube.com/@Young_Techiez', '_blank')}
          >
            Watch the Show
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductMastery
