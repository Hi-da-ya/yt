import './Show.css'

const Show = () => {
  return (
    <div className="show-page">
      <div className="show-container">
        <h1 className="show-title">YT Show</h1>
        <p className="show-subtitle">Behind The Tech Success Curtains</p>
        
        <div className="show-content">
          <div className="show-hero">
            <h2>Coming Soon</h2>
            <p>
              We're working on bringing you the most inspiring African tech stories. 
              Get ready to see behind the curtains of success, failures, and hard-won lessons.
            </p>
          </div>
          
          <div className="show-features">
            <div className="feature-card">
              <h3>Real Stories</h3>
              <p>Authentic journeys of African tech entrepreneurs</p>
            </div>
            <div className="feature-card">
              <h3>Raw Insights</h3>
              <p>Unfiltered views of failures, pivots, and lessons learned</p>
            </div>
            <div className="feature-card">
              <h3>Mentorship</h3>
              <p>The guidance you wish you had, from people who've been there</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show

