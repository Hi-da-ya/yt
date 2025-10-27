import './Home.css'

const Home = () => {
  const handleCtaClick = (action) => {
    // Add analytics tracking
    console.log(`CTA clicked: ${action}`);
    // Add navigation logic - you can replace this with your router
    switch(action) {
      case 'watch_show':
        window.location.href = '/show';
        break;
      case 'learn_school':
        window.location.href = '/school';
        break;
      case 'peek_show':
        window.location.href = '/show#episodes';
        break;
      case 'join_school':
        window.location.href = '/school#courses';
        break;
      case 'follow_journey':
        window.location.href = '/experiments';
        break;
      case 'explore_school':
        window.location.href = '/school';
        break;
      default:
        break;
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" aria-label="Main hero section">
        <div className="hero-content">
          <h1 className="hero-headline">Where African Tech Gets Real</h1>
          <p className="hero-subheadline">
            We go beyond the hype. Through our show, we uncover the true stories of
            building in Africa. At YT School, we teach the skills that actually 
            work on the ground. In our lab, we test what truly scales.
          </p>
          <div className="hero-ctas">
            <button 
              className="cta-primary"
              onClick={() => handleCtaClick('watch_show')}
              aria-label="Watch our tech show"
            >
              Watch The Show
            </button>
            <button 
              className="cta-secondary"
              onClick={() => handleCtaClick('learn_school')}
              aria-label="Learn more about YT School"
            >
              Learn more about YT School
            </button>
          </div>
          <div className="scroll-indicator" aria-hidden="true">
            <span>Scroll to explore</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="pillars" aria-label="Our three core pillars">
        <div className="pillars-container">
          <h2 className="pillars-title">The Three Pillars</h2>
          
          <div className="pillars-grid">
            {/* YT Show Pillar */}
            <div className="pillar" data-pillar="show">
              <div className="pillar-content">
                <div className="pillar-icon" aria-hidden="true"></div>
                <h3 className="pillar-title">Behind The Tech Success Curtains</h3>
                <p className="pillar-body">
                  We showcase Africa's most inspiring Tech stories, while getting the raw view behind the curtains: the failures, the pivots, the hard-won lessons.
                  This is the mentorship you wish you had.
                  These are the people you can hang out with in your room, when it all feels a little much, knowing they too were exactly where you were.
                </p>
                <button 
                  className="pillar-cta"
                  onClick={() => handleCtaClick('peek_show')}
                  aria-label="Explore our tech stories"
                >
                  Watch Episodes
                </button>
              </div>
            </div>

            {/* YT School Pillar */}
            <div className="pillar" data-pillar="school">
              <div className="pillar-content">
                <div className="pillar-icon" aria-hidden="true"></div>
                <h3 className="pillar-title">Skills That Work 'Kwa Ground'</h3>
                <p className="pillar-body">
                  Tired of theory that fails in practice? We use performance art and 
                  real-world simulation to teach product sense, no-code automation, and 
                  essential tech skills. Learn by doing, in contexts that mirror Africa's 
                  unique challenges.
                </p>
                <button 
                  className="pillar-cta"
                  onClick={() => handleCtaClick('join_school')}
                  aria-label="Join YT School courses"
                >
                  Join Courses
                </button>
              </div>
            </div>

            {/* Experiments Pillar */}
            <div className="pillar" data-pillar="experiments">
              <div className="pillar-content">
                <div className="pillar-icon" aria-hidden="true"></div>
                <h3 className="pillar-title">The African Tech Thesis</h3>
                <p className="pillar-body">
                  What business models actually work here? We're building, testing, and 
                  validating tech ventures in real-time to answer one critical question: 
                  What does it take to build a scalable tech business in Africa?
                </p>
                <button 
                  className="pillar-cta"
                  onClick={() => handleCtaClick('follow_journey')}
                  aria-label="Follow our tech experiments"
                >
                  Follow Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Bar */}
      <section className="final-cta" aria-label="Ready to get started?">
        <div className="final-cta-content">
          <h2 className="final-cta-text">Ready to move beyond theory and into practice?</h2>
          <p className="final-cta-subtext">Join 2,000+ builders already learning and building with us</p>
          <button 
            className="final-cta-button"
            onClick={() => handleCtaClick('explore_school')}
            aria-label="Explore YT School programs"
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
