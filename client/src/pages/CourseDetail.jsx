import { useParams, useNavigate } from 'react-router-dom'
import './CourseDetail.css'

const courseData = {
  'product-mastery': {
    title: 'Product Mastery',
    subtitle: 'Master the art of building products that users actually need',
    duration: '5 days',
    description: 'Learn product sense, user research, and how to validate ideas in African markets. This comprehensive course combines theory with real-world applications.',
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    features: [
      'User research & validation methodologies',
      'Product-market fit strategies',
      'African market insights and case studies',
      'Hands-on projects and real-world applications',
      'One-on-one mentorship',
      'Community support'
    ],
    curriculum: [
      { Phase: 1, topic: ' Learn the Fundamentals That Actually Matter'},
      { Phase: 2, topic: 'Experience Real PM Life Through Immersive Simulations'},
      { Phase: 3, topic: 'Build Practical Skills That Get You Hired', },
      { Phase: 4, topic: 'Learn from PMs Who Are Winning in the Field' },
      { Phase: 5, topic: 'Create Your Hiring Package' },
      { Phase: 6, topic: 'Launch and Iteration'}
    ]
  },
  'no-code-automation': {
    title: 'No Code Automation',
    subtitle: 'Build powerful solutions without writing code',
    duration: '3 days',
    description: 'Master automation tools, workflows, and create business applications using no-code platforms. Perfect for non-technical founders and business owners.',
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    ),
    features: [
      'Automation fundamentals and best practices',
      'Workflow design and optimization',
      'Business process automation',
      'Real-world case studies from African businesses',
      'Hands-on projects',
      'Platform mastery (Zapier, Make, etc.)'
    ],
    curriculum: [
      { Phase: 1, topic: 'Introduction to No-Code Automation'},
      { Phase: 2, topic: 'Department-Specific Solutions'},
      { Phase: 3, topic: 'Scale & Governance'},

    ]
  },
  'art-of-pitching': {
    title: 'The Art of Pitching',
    subtitle: 'Perfect your pitch and win over investors, partners, and customers',
    duration: '3 days',
    description: 'Learn storytelling, persuasion techniques, and how to present your African tech venture. From investor pitches to customer presentations.',
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
      </svg>
    ),
    features: [
      'Storytelling fundamentals',
      'Investor pitch decks and presentations',
      'Persuasion techniques for different audiences',
      'African market context and case studies',
      'Practice sessions with feedback',
      'Templates and frameworks'
    ],
    curriculum: [
      { Phase: 1, topic: 'The Art of Storytelling' },
      { Phase: 2, topic: 'Building Your Pitch Deck'},
      { Phase: 3, topic: 'Presentation Skills and Delivery' }
    ]
  }
}

const CourseDetail = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const course = courseData[courseId]

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="course-not-found">
          <h2>Course not found</h2>
          <button onClick={() => navigate('/product-mastery')} className="btn-back">
            Back to Courses
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="course-detail-page">
      <div className="course-detail-container">
        {/* Back Button */}
        <button onClick={() => navigate('/product-mastery')} className="btn-back">
          ← Back to Courses
        </button>

        {/* Course Header */}
        <div className="course-detail-header">
          <div className="course-detail-icon">
            {course.icon}
          </div>
          <div className="course-detail-info">
            <h1 className="course-detail-title">{course.title}</h1>
            <p className="course-detail-subtitle">{course.subtitle}</p>
            <div className="course-meta">
              <span className="course-meta-badge">{course.duration}</span>
             
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="course-section">
          <h2>About This Course</h2>
          <p className="course-description-text">{course.description}</p>
        </div>

        {/* What You'll Learn */}
        <div className="course-section">
          <h2>What You'll Learn</h2>
          <ul className="course-learning-list">
            {course.features.map((feature, index) => (
              <li key={index}>✓ {feature}</li>
            ))}
          </ul>
        </div>

        {/* Curriculum */}
        <div className="course-section">
          <h2>Curriculum</h2>
          <div className="curriculum-list">
            {course.curriculum.map((module, index) => (
              <div key={index} className="curriculum-item">
                <div className="curriculum-number">Phase {module.Phase}</div>
                <div className="curriculum-content">
                  <h3>{module.topic}</h3>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="course-cta">
          <h3>Ready to Start?</h3>
          <p>Join now and transform your skills</p>
          <div className="course-cta-actions">
            <button className="btn-enroll">Enroll Now</button>
            <button className="btn-wishlist">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
