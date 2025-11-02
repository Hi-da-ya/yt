import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './CourseDetail.css'

const courseData = {
  'product-mastery': {
    title: 'Product Mastery',
    subtitle: 'Learn to think, talk, and build like a Product Manager — for real.',
    duration: '5 days',
    description:
      "You’ve whispered it for months: “I want to work in tech, I know product might be for me.” Stop whispering. This is your NOW. Learn product sense, user research, and validation that works ‘kwa ground’. We train you to think like a PM — not just memorize frameworks.",
    icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    features: [
      'Learn the core PM fundamentals that actually get you hired.',
      'Master problem discovery, validation, and prioritization.',
      'Understand the African tech landscape — not just Silicon Valley.',
      'Work on real-life product chaos simulations.',
      'Build confidence, frameworks, and a job-ready portfolio.',
      'Graduate with a case study and micro-certification.'
    ],
    curriculum: [
      {
        Phase: 1,
        topic: 'Learn the Fundamentals That Actually Matter',
        details:
          'Go beyond theory. Understand how PMs think about problems, teams, and users. Learn frameworks you can apply on Day 1.'
      },
      {
        Phase: 2,
        topic: 'Experience Real PM Life Through Simulations',
        details:
          'Role-play real-world product chaos — ambiguous goals, feature creep, and conflicting stakeholders. Build your problem-solving muscle.'
      },
      {
        Phase: 3,
        topic: 'Build Practical Skills That Get You Hired',
        details:
          'Work through user stories, MVPs, and sprints. You’ll deliver results that hiring managers can see and trust.'
      },
      {
        Phase: 4,
        topic: 'Learn from PMs Who Are Winning in the Field',
        details:
          'Mentorship from real African PMs. Get insights into what makes products work here — not just in textbooks.'
      },
      {
        Phase: 5,
        topic: 'Create Your Hiring Package',
        details:
          'Build your product portfolio, write your case study, and learn how to tell your story in interviews.'
      },
      {
        Phase: 6,
        topic: 'Launch and Iterate',
        details:
          'Test your idea, gather feedback, and iterate fast. You’ll learn that no product is ever “done” — only improved.'
      }
    ]
  },
  'no-code-automation': {
    title: 'No Code Automation',
    subtitle: 'Build real tech without writing code.',
    duration: '3 days',
    description:
      'Automation is the new superpower. Learn to build workflows, automate tasks, and create business systems using tools like Zapier and Make — no coding required.',
    features: [
      'Automation fundamentals and best practices.',
      'Workflow design and optimization.',
      'African business use cases.',
      'Practical projects and templates.',
      'Platform mastery (Zapier, Make, Airtable, etc.)'
    ],
    curriculum: [
      {
        Phase: 1,
        topic: 'Introduction to No-Code Automation',
        details:
          'Learn the mindset and tools that let you automate like a pro. From Airtable to Zapier, we’ll get your hands dirty fast.'
      },
      {
        Phase: 2,
        topic: 'Department-Specific Solutions',
        details:
          'Build automations for marketing, HR, finance, and ops. Create systems that save time and money.'
      },
      {
        Phase: 3,
        topic: 'Scale & Governance',
        details:
          'Learn how to scale automation safely, manage permissions, and maintain consistency across your organization.'
      }
    ]
  },
  'art-of-pitching': {
    title: 'The Art of Pitching',
    subtitle: 'Tell your story. Move hearts. Win support.',
    duration: '3 days',
    description:
      'Learn how to pitch your startup or idea like a pro. Master storytelling, investor psychology, and presentation craft — made for African founders.',
    features: [
      'Learn to tell your story with confidence.',
      'Build investor-ready pitch decks.',
      'Understand persuasion and audience framing.',
      'African market context and storytelling style.',
      'Practice with feedback and templates.'
    ],
    curriculum: [
      {
        Phase: 1,
        topic: 'The Art of Storytelling',
        details:
          'Discover what makes stories unforgettable. Learn how to connect emotionally with your audience.'
      },
      {
        Phase: 2,
        topic: 'Building Your Pitch Deck',
        details:
          'Design a deck that says “invest in me” without saying a word. Craft slides that tell your story visually and persuasively.'
      },
      {
        Phase: 3,
        topic: 'Presentation Skills and Delivery',
        details:
          'Deliver with confidence. Overcome fear, use body language effectively, and own the room.'
      }
    ]
  }
}

const CourseDetail = () => {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [openPhase, setOpenPhase] = useState(null)
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
        <button onClick={() => navigate('/product-mastery')} className="btn-back">
          ← Back to Courses
        </button>

        <div className="course-detail-header">
          <div className="course-detail-icon">{course.icon}</div>
          <div className="course-detail-info">
            <h1 className="course-detail-title">{course.title}</h1>
            <p className="course-detail-subtitle">{course.subtitle}</p>
            <div className="course-meta">
              <span className="course-meta-badge">{course.duration}</span>
            </div>
          </div>
        </div>

        <div className="course-section">
          <h2>About This Course</h2>
          <p className="course-description-text">{course.description}</p>
        </div>

        <div className="course-section">
          <h2>What You'll Learn</h2>
          <ul className="course-learning-list">
            {course.features.map((feature, index) => (
              <li key={index}>✓ {feature}</li>
            ))}
          </ul>
        </div>

        <div className="course-section">
          <h2>Curriculum</h2>
          <div className="curriculum-list">
            {course.curriculum.map((module, index) => (
              <div
                key={index}
                className={`curriculum-item ${openPhase === index ? 'open' : ''}`}
                onClick={() => setOpenPhase(openPhase === index ? null : index)}
              >
                <div className="curriculum-header">
                  <div className="curriculum-number">Phase {module.Phase}</div>
                  <h3>{module.topic}</h3>
                </div>
                {openPhase === index && (
                  <p className="curriculum-details">{module.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="course-cta">
          <h3>Ready to Make the Jump?</h3>
          <p>Join the tribe of doers shaping Africa’s tech future — one skill at a time.</p>
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
