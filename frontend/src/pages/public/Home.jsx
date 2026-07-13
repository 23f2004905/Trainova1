import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  Menu,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const growthData = [
  { month: "Jan", score: 58 },
  { month: "Feb", score: 63 },
  { month: "Mar", score: 61 },
  { month: "Apr", score: 70 },
  { month: "May", score: 76 },
  { month: "Jun", score: 82 },
];

const features = [
  {
    icon: Users,
    title: "Workforce Management",
    description:
      "Centralize employee profiles, departments and workforce information in one intelligent workspace.",
  },
  {
    icon: BrainCircuit,
    title: "Competency Intelligence",
    description:
      "Identify critical skill gaps through structured self and manager competency assessments.",
  },
  {
    icon: GraduationCap,
    title: "Training Management",
    description:
      "Create, assign and monitor training programs with clear progress and proficiency tracking.",
  },
  {
    icon: Zap,
    title: "Smart Recommendations",
    description:
      "Map identified competency gaps to relevant courses and targeted development opportunities.",
  },
  {
    icon: BarChart3,
    title: "Workforce Analytics",
    description:
      "Transform training and competency data into actionable workforce development insights.",
  },
  {
    icon: Building2,
    title: "Department Insights",
    description:
      "Compare skill gaps, training completion and workforce development across departments.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Assess",
    description:
      "Employees and managers evaluate competency levels through structured assessments.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "Trainova calculates proficiency gaps against required competency levels.",
  },
  {
    number: "03",
    title: "Recommend",
    description:
      "Relevant training courses are mapped to the employee's identified development needs.",
  },
  {
    number: "04",
    title: "Track",
    description:
      "Monitor learning progress, proficiency growth and training outcomes over time.",
  },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="home-page">
      <nav className="landing-navbar">
        <div className="landing-container nav-content">
          <Link to="/" className="brand" onClick={closeMenu}>
            <div className="brand-icon">
              <TrendingUp size={22} />
            </div>

            <span>Trainova</span>
          </Link>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
            <a href="#workflow" onClick={closeMenu}>
              How It Works
            </a>
            <a href="#analytics" onClick={closeMenu}>
              Analytics
            </a>

            <div className="mobile-nav-actions">
              <Link
                to="/login"
                className="nav-login"
                onClick={closeMenu}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="primary-button"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="nav-actions">
            <Link to="/login" className="nav-login">
              Login
            </Link>

            <Link to="/register" className="primary-button nav-cta">
              Get Started
              <ArrowRight size={17} />
            </Link>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="landing-container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <Sparkles size={15} />
                Smarter workforce development
              </div>

              <h1>
                Identify skill gaps.
                <span> Build stronger teams.</span>
              </h1>

              <p className="hero-description">
                Transform competency data into targeted training plans,
                measurable growth and a workforce ready for what's next.
              </p>

              <div className="hero-actions">
                <Link to="/register" className="primary-button hero-primary">
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <a href="#features" className="secondary-button">
                  Explore Platform
                </a>
              </div>

              <div className="hero-trust">
                <span>
                  <Check size={16} />
                  Competency Intelligence
                </span>

                <span>
                  <Check size={16} />
                  Smart Training Mapping
                </span>

                <span>
                  <Check size={16} />
                  Real-time Analytics
                </span>
              </div>
            </div>

            <div className="hero-dashboard-wrapper">
              <div className="floating-badge floating-badge-top">
                <div className="floating-icon success-icon">
                  <TrendingUp size={18} />
                </div>

                <div>
                  <strong>+18%</strong>
                  <span>Competency growth</span>
                </div>
              </div>

              <div className="dashboard-preview">
                <div className="preview-header">
                  <div>
                    <span className="preview-label">
                      Workforce Intelligence
                    </span>
                    <h3>Development overview</h3>
                  </div>

                  <div className="preview-avatar">NM</div>
                </div>

                <div className="preview-stats">
                  <div className="preview-stat">
                    <div className="preview-stat-heading">
                      <span>Training completion</span>
                      <TrendingUp size={15} />
                    </div>

                    <strong>82%</strong>

                    <div className="mini-progress">
                      <span style={{ width: "82%" }} />
                    </div>
                  </div>

                  <div className="preview-stat">
                    <div className="preview-stat-heading">
                      <span>Open skill gaps</span>
                      <TrendingDown size={15} />
                    </div>

                    <strong>38</strong>
                    <small>8 resolved this month</small>
                  </div>
                </div>

                <div className="preview-chart">
                  <div className="preview-section-title">
                    <div>
                      <span>Competency growth</span>
                      <strong>Average proficiency</strong>
                    </div>

                    <span className="positive-change">+12.4%</span>
                  </div>

                  <ResponsiveContainer width="100%" height={175}>
                    <AreaChart data={growthData}>
                      <defs>
                        <linearGradient
                          id="heroArea"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#5b6cff"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#5b6cff"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#e9edf7"
                      />

                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#8a94a7", fontSize: 11 }}
                      />

                      <YAxis hide domain={[50, 90]} />

                      <Tooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "1px solid #e8ebf4",
                          boxShadow: "0 10px 30px rgba(35, 44, 90, 0.12)",
                        }}
                      />

                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="#5b6cff"
                        strokeWidth={3}
                        fill="url(#heroArea)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="skill-gap-preview">
                  <div className="preview-section-title">
                    <div>
                      <span>Priority insights</span>
                      <strong>Top skill gaps</strong>
                    </div>

                    <ChevronRight size={18} />
                  </div>

                  <div className="skill-row">
                    <span>Process Control</span>
                    <div className="skill-bar">
                      <span style={{ width: "88%" }} />
                    </div>
                    <strong>18</strong>
                  </div>

                  <div className="skill-row">
                    <span>Quality Control</span>
                    <div className="skill-bar">
                      <span style={{ width: "68%" }} />
                    </div>
                    <strong>14</strong>
                  </div>

                  <div className="skill-row">
                    <span>Equipment Safety</span>
                    <div className="skill-bar">
                      <span style={{ width: "52%" }} />
                    </div>
                    <strong>11</strong>
                  </div>
                </div>
              </div>

              <div className="floating-badge floating-badge-bottom">
                <div className="floating-icon alert-icon">
                  <Target size={18} />
                </div>

                <div>
                  <strong>12 gaps resolved</strong>
                  <span>This quarter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="landing-container impact-grid">
            <div className="impact-item">
              <strong>500+</strong>
              <span>Employees empowered</span>
            </div>

            <div className="impact-item">
              <strong>92%</strong>
              <span>Training completion</span>
            </div>

            <div className="impact-item">
              <strong>35%</strong>
              <span>Skill gap reduction</span>
            </div>

            <div className="impact-item">
              <strong>4.6/5</strong>
              <span>Average proficiency</span>
            </div>
          </div>
        </section>

        <section className="problem-section">
          <div className="landing-container problem-grid">
            <div className="section-heading left-heading">
              <div className="eyebrow">
                <Target size={15} />
                The workforce challenge
              </div>

              <h2>
                Training shouldn't be
                <span> guesswork.</span>
              </h2>

              <p>
                Traditional training programs struggle when organizations
                cannot connect workforce capability with actual development
                needs.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-list">
                <div className="problem-item">
                  <span>01</span>
                  <p>Who actually needs training?</p>
                </div>

                <div className="problem-item">
                  <span>02</span>
                  <p>Which competency is missing?</p>
                </div>

                <div className="problem-item">
                  <span>03</span>
                  <p>Which course should be assigned?</p>
                </div>

                <div className="problem-item">
                  <span>04</span>
                  <p>Is training improving performance?</p>
                </div>
              </div>

              <div className="solution-note">
                <Sparkles size={21} />

                <p>
                  <strong>Trainova connects competency assessment</strong>
                  with targeted workforce training and measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="landing-container">
            <div className="section-heading centered-heading">
              <div className="eyebrow">
                <Sparkles size={15} />
                One intelligent platform
              </div>

              <h2>
                Everything you need to build a
                <span> stronger workforce.</span>
              </h2>

              <p>
                From employee management to competency intelligence, Trainova
                connects every stage of workforce development.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article className="feature-card" key={feature.title}>
                    <div className="feature-icon">
                      <Icon size={23} />
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>

                    <span className="feature-link">
                      Learn more
                      <ArrowRight size={15} />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="landing-container">
            <div className="section-heading centered-heading">
              <div className="eyebrow light-eyebrow">
                <Zap size={15} />
                How Trainova works
              </div>

              <h2>
                From skill gaps to
                <span> measurable growth.</span>
              </h2>

              <p>
                A structured workforce development cycle that turns assessment
                data into targeted action.
              </p>
            </div>

            <div className="workflow-grid">
              {workflow.map((step, index) => (
                <article className="workflow-card" key={step.number}>
                  <span className="workflow-number">{step.number}</span>

                  <div className="workflow-icon">
                    {index === 0 && <BrainCircuit size={24} />}
                    {index === 1 && <Target size={24} />}
                    {index === 2 && <Sparkles size={24} />}
                    {index === 3 && <TrendingUp size={24} />}
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {index < workflow.length - 1 && (
                    <div className="workflow-arrow">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="analytics-section" id="analytics">
          <div className="landing-container analytics-grid">
            <div className="analytics-content">
              <div className="eyebrow">
                <BarChart3 size={15} />
                Workforce analytics
              </div>

              <h2>
                Make workforce decisions
                <span> with data.</span>
              </h2>

              <p>
                See where competency gaps exist, measure training progress and
                understand how workforce capability evolves over time.
              </p>

              <div className="analytics-benefits">
                <div>
                  <Check size={17} />
                  <span>Department-level competency insights</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>Training completion and progress monitoring</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>Skill gap severity and trend analysis</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>Actionable workforce development recommendations</span>
                </div>
              </div>

              <Link to="/register" className="primary-button analytics-button">
                Explore workforce intelligence
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="analytics-card">
              <div className="analytics-card-header">
                <div>
                  <span>Training intelligence</span>
                  <h3>Completion trend</h3>
                </div>

                <div className="analytics-change">
                  <TrendingUp size={15} />
                  24.1%
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient
                      id="analyticsArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#6d5dfc"
                        stopOpacity={0.35}
                      />
                      <stop
                        offset="95%"
                        stopColor="#6d5dfc"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="4 4"
                    vertical={false}
                    stroke="#e8ebf3"
                  />

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#7f8899", fontSize: 12 }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#7f8899", fontSize: 12 }}
                    domain={[40, 100]}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e8ebf3",
                      boxShadow: "0 12px 35px rgba(32, 40, 82, 0.12)",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="#6d5dfc"
                    strokeWidth={3}
                    fill="url(#analyticsArea)"
                  />
                </AreaChart>
              </ResponsiveContainer>

              <div className="analytics-mini-cards">
                <div>
                  <span>Current completion</span>
                  <strong>82%</strong>
                </div>

                <div>
                  <span>Employees trained</span>
                  <strong>394</strong>
                </div>

                <div>
                  <span>Gaps resolved</span>
                  <strong>38</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="landing-container">
            <div className="cta-card">
              <div className="cta-glow" />

              <div className="cta-content">
                <div className="eyebrow light-eyebrow">
                  <Sparkles size={15} />
                  Build capability that matters
                </div>

                <h2>Ready to build a stronger workforce?</h2>

                <p>
                  Turn competency gaps into targeted training and measurable
                  workforce growth.
                </p>

                <Link to="/register" className="cta-button">
                  Start with Trainova
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="landing-container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand footer-logo">
              <div className="brand-icon">
                <TrendingUp size={22} />
              </div>

              <span>Trainova</span>
            </Link>

            <p>
              Workforce Training & Competency Intelligence for organizations
              building stronger, future-ready teams.
            </p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#analytics">Analytics</a>
            <a href="#workflow">How It Works</a>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>
            <span>Employees</span>
            <span>Departments</span>
            <span>Training</span>
            <span>Competency</span>
          </div>

          <div className="footer-column">
            <h4>Access</h4>
            <Link to="/login">Sign In</Link>
            <Link to="/register">Create Account</Link>
          </div>
        </div>

        <div className="landing-container footer-bottom">
          <span>© 2026 Trainova. Workforce intelligence platform.</span>
          <span>Built for the CoReCo Technologies technical assignment.</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;