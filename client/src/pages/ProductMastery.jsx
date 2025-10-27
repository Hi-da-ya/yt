import './ProductMastery.css'

const ProductMastery = () => {
  return (
    <div className="product-mastery-page">
      <div className="product-mastery-container">
        <h1 className="product-mastery-title">Product Mastery</h1>
        <p className="product-mastery-subtitle">Skills That Work 'Kwa Ground'</p>
        
        <div className="product-mastery-content">
          <div className="product-mastery-hero">
            <h2>Learn by Doing</h2>
            <p>
              Tired of theory that fails in practice? We use performance art and 
              real-world simulation to teach product sense, no-code automation, and 
              essential tech skills. Learn by doing, in contexts that mirror Africa's 
              unique challenges.
            </p>
          </div>
          
          <div className="product-mastery-features">
            <div className="feature-card">
              <h3>Product Sense</h3>
              <p>Develop intuition for what users actually need and want</p>
            </div>
            <div className="feature-card">
              <h3>No-Code Automation</h3>
              <p>Build powerful solutions without writing code</p>
            </div>
            <div className="feature-card">
              <h3>Real-World Context</h3>
              <p>Learn in environments that mirror African challenges</p>
            </div>
            <div className="feature-card">
              <h3>Performance Art</h3>
              <p>Engaging, interactive learning experiences</p>
            </div>
          </div>
          
          <div className="cta-section">
            <h3>Ready to Make the Jump?</h3>
            <p>Join our community of builders who are creating real impact</p>
            <button className="cta-button">Start Learning</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductMastery

