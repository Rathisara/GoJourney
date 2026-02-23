import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import {
  Menu,
  X,
  ArrowRight,
  Star,
  Download,
  Play,
  CheckCircle,
  Zap,
  Lock,
  Smartphone,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [lotterySpinning, setLotterySpinning] = useState(false);
  const [lotteryResult, setLotteryResult] = useState(null);
  const [fairnessScore, setFairnessScore] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLotteryClick = () => {
    setLotterySpinning(true);
    setTimeout(() => {
      setLotteryResult(Math.random() > 0.5 ? 'selected' : 'waitlist');
      setLotterySpinning(false);
    }, 2000);
  };

  const calculateFairnessScore = () => {
    const speed = document.getElementById('speedSelect')?.value || '4g';
    const frequency = document.getElementById('frequencySelect')?.value || 'monthly';
    
    let currentChance = 15;
    let newChance = 40;
    
    if (speed === 'fiber') currentChance = 45;
    if (speed === '5g') currentChance = 35;
    
    if (frequency === 'weekly') newChance = 60;
    if (frequency === 'daily') newChance = 80;
    
    const improvement = Math.round((newChance / currentChance - 1) * 100);
    setFairnessScore({
      current: currentChance,
      new: newChance,
      improvement: improvement
    });
  };

  const problems = [
    {
      icon: '🚂',
      title: '1000+ SEATS CHAOS',
      description: '1200 seats, 24 coaches, same numbers - finding your seat feels like a treasure hunt without clues.'
    },
    {
      icon: '⏰',
      title: '10 AM RUSH',
      description: 'Lakhs of users, same time, same server. Fast internet wins. Fairness loses.'
    },
    {
      icon: '🧩',
      title: 'QUOTA CONFUSION',
      description: 'Tatkal? Ladies? Senior? RAC? WL? Normal passengers need a railway degree to understand.'
    },
    {
      icon: '🤝',
      title: 'SEAT CONFLICT',
      description: 'Chennai to Coimbatore passenger vs Coimbatore to Salem passenger. Same seat. Real fight.'
    },
    {
      icon: '⚡',
      title: 'NET SPEED BIAS',
      description: 'Jio Fiber users get seats. 4G users get waitlist. Is this digital India or digital divide?'
    },
    {
      icon: '💬',
      title: 'ONBOARD ARGUMENTS',
      description: 'Confusion, arguments, tension - your journey starts with stress before train moves.'
    }
  ];

  const solutions = [
    {
      icon: '📱',
      title: 'Dynamic Coach Layout',
      description: 'No more seat numbers. QR code-enabled seats with color-coded zones. Scan. Sit. Relax.',
      tag: 'Paperless'
    },
    {
      icon: '🎰',
      title: 'FairPlay Lottery System',
      description: '15-min registration. Random selection. 5-min exclusive booking window. Fast net? Slow net? Same chance.',
      tag: 'Equal Opportunity'
    },
    {
      icon: '🤖',
      title: 'Smart Quota AI',
      description: 'One-click smart booking. AI analyzes all quotas and books the best available option automatically.',
      tag: 'Intelligent'
    },
    {
      icon: '⛓️',
      title: 'SeatChain AI',
      description: 'Multi-stop seats? No problem. Blockchain-inspired chain algorithm with auto-notifications for smooth handover.',
      tag: 'Conflict-Free'
    },
    {
      icon: '⚖️',
      title: 'Weighted Random',
      description: 'Loyalty points + random selection = Perfect fairness. Frequent travellers get better odds, but everyone gets a chance.',
      tag: 'Fair & Rewarding'
    },
    {
      icon: '🔍',
      title: 'Coach Pilot AR',
      description: 'AR navigation inside train. Find your seat in seconds. Report issues instantly. TTE gets live dashboard.',
      tag: 'Augmented Reality'
    }
  ];

  const steps = [
    {
      icon: '📋',
      title: 'Register Once',
      description: 'Fill details once. Choose train. Click "Register for Lottery". That\'s it. No 10 AM panic.'
    },
    {
      icon: '🎲',
      title: 'Get Your Slot',
      description: 'Lottery runs at 10:15 AM. Win? Get 5-min exclusive window. Lose? Try next train. Fair for all.'
    },
    {
      icon: '✅',
      title: 'Smart Boarding',
      description: 'Board train. Scan coach QR. Follow colored zone. Scan seat QR. Confirm. Relax. Journey starts.'
    }
  ];

  const features = [
    {
      title: 'SMART COACH MAP',
      description: 'Each coach divided into color zones (Red, Blue, Green, Yellow). Your ticket shows zone. Follow LED lights to your berth. No number confusion.'
    },
    {
      title: 'LIVE SEAT CHAIN',
      description: 'Every seat has a chain. Current passenger. Next passenger. Boarding station. Alighting station. TTE sees all. Passengers get notifications.'
    },
    {
      title: 'AR COACH NAVIGATION',
      description: 'Point your camera. See blue line on floor. Follow to your seat. Even in crowded coach, find your way.'
    },
    {
      title: 'TTE SMART DASHBOARD',
      description: 'TTEs get live updates. Red = Occupied. Yellow = Vacating soon. Green = Available. No manual checking. No arguments.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya',
      role: 'Software Engineer',
      rating: 5,
      quote: 'I used to get panic attacks at 9:55 AM. Now? I register and forget. Got confirmed ticket in first lottery attempt. Fair for everyone.',
      avatar: '👩‍💼'
    },
    {
      name: 'Kumar',
      role: 'Daily Commuter',
      rating: 5,
      quote: 'Erode to Salem daily travel. SeatChain AI is life saver. No more fights with Coimbatore passengers. Notifications remind me to vacate. Smooth.',
      avatar: '👨‍💼'
    },
    {
      name: 'Rajesh',
      role: 'TTE (Southern Railway)',
      rating: 5,
      quote: '30 years of service. Arguments were daily routine. Now? Dashboard shows everything. Passengers manage themselves. Best thing happened to railways.',
      avatar: '👨‍✈️'
    }
  ];

  const stats = [
    { label: 'Happy Passengers', value: '2.5 Cr+' },
    { label: 'Conflict-Free Journeys', value: '98.7%' },
    { label: 'Server Uptime', value: '100%' },
    { label: 'Fair Algorithm', value: '✓' }
  ];

  const comparison = [
    { feature: 'Booking Stress', current: 'High (10 AM rush)', nextgen: 'Zero (Lottery)' },
    { feature: 'Seat Finding', current: 'Confusing numbers', nextgen: 'QR + Color zones' },
    { feature: 'Multi-stop Conflict', current: 'Daily fights', nextgen: 'Auto notifications' },
    { feature: 'Internet Speed Bias', current: 'Unfair advantage', nextgen: 'Equal chance' },
    { feature: 'TTE Workload', current: 'Manual checking', nextgen: 'Live dashboard' }
  ];

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🚆</span>
            <span className="logo-text">NextGen IRCTC</span>
          </div>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#problems" className="nav-link">Problems</a>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button className="nav-cta">Book Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-blur"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Booking a train ticket should be exciting, not exhausting.</h1>
          <p className="hero-subtitle">Introducing India's first smart railway reservation system with AI-powered fairness, QR-enabled seats, and zero-conflict travel.</p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">Book Now</button>
            <button className="btn btn-outline">See How It Works</button>
          </div>

          <div className="hero-elements">
            <div className="floating-element" style={{ animation: 'float 4s ease-in-out infinite' }}>🚂</div>
            <div className="floating-element" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}>📱</div>
            <div className="floating-element" style={{ animation: 'float 6s ease-in-out infinite 1s' }}>✅</div>
          </div>
        </div>
      </section>

      {/* News Banner */}
      <section className="news-banner">
        <p>Featured in: <strong>Economic Times • YourStory • TechCrunch</strong></p>
      </section>

      {/* Problems Section */}
      <section id="problems" className="problems">
        <div className="container">
          <h2 className="section-title">Indian Railways is amazing. But booking? Honestly, it's broken.</h2>
          <p className="section-subtitle">We feel your pain. Here are the 6 problems we're solving.</p>

          <div className="problems-grid">
            {problems.map((problem, index) => (
              <div key={index} className="problem-card" style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards` }}>
                <div className="problem-icon">{problem.icon}</div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions">
        <div className="container">
          <h2 className="section-title">Six Problems. Six Smart Solutions. One Platform.</h2>
          <p className="section-subtitle">NextGen IRCTC reimagines railway reservation from scratch.</p>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card" style={{ animation: `scaleUp 0.6s ease-out ${index * 0.1}s backwards` }}>
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <span className="feature-tag">{solution.tag}</span>
              </div>
            ))}
          </div>

          {/* Live Demo Widget */}
          <div className="lottery-demo">
            <h3>Try FairPlay Lottery</h3>
            <p>See how everyone gets an equal chance</p>
            <button 
              className="btn btn-primary"
              onClick={handleLotteryClick}
              disabled={lotterySpinning}
            >
              {lotterySpinning ? '🎰 Spinning...' : '🎰 Try Your Luck'}
            </button>
            {lotteryResult && (
              <div className={`lottery-result ${lotteryResult}`}>
                {lotteryResult === 'selected' ? (
                  <p>✅ Congratulations! You got a confirmed seat!</p>
                ) : (
                  <p>⏳ On waitlist. Try next train - your turn will come!</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">Booking Made Simple. Travel Made Smart.</h2>
          <p className="section-subtitle">3 steps to your stress-free journey</p>

          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">STEP {index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < steps.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>

          <div className="fairplay-timeline">
            <h3>How FairPlay Works:</h3>
            <div className="timeline">
              <div className="timeline-item">
                <strong>9:45 AM</strong>
                <p>Registration opens (15 min window)</p>
              </div>
              <div className="timeline-item">
                <strong>10:00 AM</strong>
                <p>Registration closes</p>
              </div>
              <div className="timeline-item">
                <strong>10:15 AM</strong>
                <p>Random lottery draw</p>
              </div>
              <div className="timeline-item">
                <strong>10:15-11:30 AM</strong>
                <p>Staggered booking windows</p>
              </div>
            </div>
            <p className="timeline-note">No rush. No server crash. Pure luck + loyalty.</p>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Features That Make Us Different</h2>

          <div className="feature-tabs">
            <div className="tab-buttons">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {feature.title}
                </button>
              ))}
            </div>

            <div className="tab-content">
              <div className="feature-description">
                <h3>{features[activeTab].title}</h3>
                <p>{features[activeTab].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title">Built on Modern Technology</h2>
          <p className="section-subtitle">Secure. Scalable. Smart.</p>

          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🤖</div>
              <h3>AI & MACHINE LEARNING</h3>
              <p>Smart quota optimization</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">⛓️</div>
              <h3>BLOCKCHAIN INSPIRED</h3>
              <p>Seat chain algorithm</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🔍</div>
              <h3>AUGMENTED REALITY</h3>
              <p>Coach navigation</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">📢</div>
              <h3>REAL-TIME NOTIFICATIONS</h3>
              <p>Geo-fenced alerts</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🔐</div>
              <h3>SECURE AADHAAR</h3>
              <p>One person, one entry</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">☁️</div>
              <h3>CLOUD SCALABLE</h3>
              <p>Handles 10 lakhs+ users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison">
        <div className="container">
          <h2 className="section-title">How We Compare</h2>
          
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Current IRCTC</th>
                  <th>NextGen IRCTC</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index}>
                    <td><strong>{row.feature}</strong></td>
                    <td>{row.current}</td>
                    <td className="nextgen">{row.nextgen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Travellers Love NextGen IRCTC</h2>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FF9933" color="#FF9933" />
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="container">
          <h2 className="section-title">Numbers Don't Lie</h2>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fairness Calculator */}
      <section className="fairness-calculator">
        <div className="container">
          <h2>Check Your Fairness Score</h2>
          <p>See how much better NextGen is for you</p>

          <div className="calculator-form">
            <div className="form-group">
              <label>Your Internet Speed:</label>
              <select id="speedSelect">
                <option value="4g">4G Mobile</option>
                <option value="5g">5G Network</option>
                <option value="fiber">Fiber Broadband</option>
              </select>
            </div>

            <div className="form-group">
              <label>Travel Frequency:</label>
              <select id="frequencySelect">
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="daily">Daily</option>
              </select>
            </div>

            <button className="btn btn-primary" onClick={calculateFairnessScore}>
              Calculate Score
            </button>
          </div>

          {fairnessScore && (
            <div className="fairness-result">
              <p>With your profile: <strong>{fairnessScore.current}%</strong> current chance</p>
              <p>With NextGen: <strong>{fairnessScore.new}%</strong> new chance</p>
              <p className="improvement">🚀 <strong>{fairnessScore.improvement}x better!</strong></p>
            </div>
          )}
        </div>
      </section>

      {/* Download App */}
      <section className="download-app">
        <div className="container">
          <h2 className="section-title">Your NextGen Journey Starts Here</h2>
          <p className="section-subtitle">Available on iOS and Android</p>

          <div className="download-buttons">
            <button className="app-store-btn google">
              <span>🔗</span> Google Play Store
            </button>
            <button className="app-store-btn apple">
              <span>🔗</span> Apple App Store
            </button>
          </div>

          <div className="qr-code">
            <p>Quick Download</p>
            <div className="qr-placeholder">
              <span>📱</span>
              <p>QR Code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">About Us</a></li>
                <li><a href="#solutions">How It Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#refund">Refund Policy</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Social Media</h4>
              <div className="social-links">
                <a href="#twitter"><Twitter size={20} /></a>
                <a href="#facebook"><Facebook size={20} /></a>
                <a href="#instagram"><Instagram size={20} /></a>
                <a href="#youtube"><Youtube size={20} /></a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Trust Badges</h4>
              <div className="badges">
                <span className="badge">✓ 256-bit Encrypted</span>
                <span className="badge">✓ ISO Certified</span>
                <span className="badge">🇮🇳 Made in India</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 NextGen IRCTC. Reimagining Indian Railways.</p>
            <p className="made-with">Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
