import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
} from "lucide-react";

const demoAccounts = [
  {
    role: "Admin",
    email: "admin@trainova.com",
    password: "admin123",
    icon: ShieldCheck,
  },
  {
    role: "Manager",
    email: "manager@trainova.com",
    password: "manager123",
    icon: BarChart3,
  },
  {
    role: "Employee",
    email: "employee@trainova.com",
    password: "employee123",
    icon: UserRound,
  },
];

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const useDemoAccount = (account) => {
    setFormData({
      email: account.email,
      password: account.password,
      remember: false,
    });

    setErrors({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      nextErrors.password = "Password is required.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      console.log("Login data ready for authentication:", formData);
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-showcase">
        <div className="auth-showcase-glow auth-glow-one" />
        <div className="auth-showcase-glow auth-glow-two" />

        <Link to="/" className="brand auth-brand">
          <div className="brand-icon">
            <TrendingUp size={22} />
          </div>
          <span>Trainova</span>
        </Link>

        <div className="auth-showcase-content">
          <div className="eyebrow auth-eyebrow">
            <Sparkles size={15} />
            Workforce intelligence
          </div>

          <h1>
            Build skills.
            <br />
            Bridge gaps.
            <br />
            <span>Grow teams.</span>
          </h1>

          <p>
            Connect competency intelligence with targeted training and turn
            workforce development into measurable growth.
          </p>

          <div className="auth-feature-list">
            <div>
              <CheckCircle2 size={19} />
              <span>Identify critical competency gaps</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Assign targeted workforce training</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Measure proficiency and development</span>
            </div>
          </div>
        </div>

        <div className="auth-insight-card">
          <div className="auth-insight-icon">
            <GraduationCap size={22} />
          </div>

          <div>
            <span>Training completion</span>
            <strong>82.4%</strong>
          </div>

          <div className="auth-insight-trend">
            <TrendingUp size={15} />
            12.4%
          </div>
        </div>

        <p className="auth-showcase-footer">
          Workforce Training & Competency Intelligence
        </p>
      </section>

      <section className="auth-form-section">
        <div className="auth-form-wrapper">
          <Link to="/" className="auth-back-link">
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <div className="auth-form-heading">
            <span>Welcome back</span>
            <h2>Sign in to your workspace</h2>
            <p>
              Access your workforce, training and competency intelligence.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="email">Email address</label>

              <div
                className={`auth-input-wrapper ${
                  errors.email ? "auth-input-error" : ""
                }`}
              >
                <UserRound size={18} />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              {errors.email && (
                <span className="auth-error-text">{errors.email}</span>
              )}
            </div>

            <div className="auth-field">
              <div className="auth-label-row">
                <label htmlFor="password">Password</label>
                <button type="button" className="auth-text-button">
                  Forgot password?
                </button>
              </div>

              <div
                className={`auth-input-wrapper ${
                  errors.password ? "auth-input-error" : ""
                }`}
              >
                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {errors.password && (
                <span className="auth-error-text">{errors.password}</span>
              )}
            </div>

            <label className="remember-control">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <span>Remember me on this device</span>
            </label>

            <button type="submit" className="auth-submit-button">
              Sign in
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-divider">
            <span>Demo access</span>
          </div>

          <div className="demo-account-grid">
            {demoAccounts.map((account) => {
              const Icon = account.icon;

              return (
                <button
                  type="button"
                  className="demo-account-card"
                  key={account.role}
                  onClick={() => useDemoAccount(account)}
                >
                  <div className="demo-account-icon">
                    <Icon size={18} />
                  </div>

                  <div>
                    <strong>{account.role}</strong>
                    <span>{account.email}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="auth-switch-text">
            Don't have an account?{" "}
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;