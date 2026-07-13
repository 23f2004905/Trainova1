import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  Sparkles,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

const roles = [
  {
    value: "manager",
    title: "Manager",
    description: "Assess teams and manage development",
    icon: BarChart3,
  },
  {
    value: "employee",
    title: "Employee",
    description: "Track training and competency growth",
    icon: GraduationCap,
  },
];

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "employee",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const selectRole = (role) => {
    setFormData((previous) => ({
      ...previous,
      role,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Work email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.organization.trim()) {
      nextErrors.organization = "Organization name is required.";
    }

    if (!formData.password) {
      nextErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      nextErrors.password = "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      console.log("Registration data ready for API:", formData);
    }
  };

  return (
    <div className="auth-page register-page">
      <section className="auth-showcase register-showcase">
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
            Develop workforce capability
          </div>

          <h1>
            Turn potential into
            <span> progress.</span>
          </h1>

          <p>
            Join a connected workspace where competency gaps become targeted
            learning opportunities and measurable workforce growth.
          </p>

          <div className="register-journey">
            <div className="journey-item">
              <div className="journey-icon">
                <Users size={19} />
              </div>
              <div>
                <strong>Understand capability</strong>
                <span>Build structured workforce competency profiles.</span>
              </div>
            </div>

            <div className="journey-line" />

            <div className="journey-item">
              <div className="journey-icon">
                <BarChart3 size={19} />
              </div>
              <div>
                <strong>Identify development needs</strong>
                <span>Measure skill gaps against required proficiency.</span>
              </div>
            </div>

            <div className="journey-line" />

            <div className="journey-item">
              <div className="journey-icon">
                <GraduationCap size={19} />
              </div>
              <div>
                <strong>Build stronger teams</strong>
                <span>Connect gaps with targeted workforce training.</span>
              </div>
            </div>
          </div>
        </div>

        <p className="auth-showcase-footer">
          Smarter training. Stronger capability.
        </p>
      </section>

      <section className="auth-form-section register-form-section">
        <div className="auth-form-wrapper register-form-wrapper">
          <Link to="/" className="auth-back-link">
            <ArrowLeft size={17} />
            Back to home
          </Link>

          <div className="auth-form-heading">
            <span>Create your account</span>
            <h2>Join your Trainova workspace</h2>
            <p>
              Start building a more capable and development-focused workforce.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="register-field-grid">
              <div className="auth-field">
                <label htmlFor="name">Full name</label>

                <div
                  className={`auth-input-wrapper ${
                    errors.name ? "auth-input-error" : ""
                  }`}
                >
                  <UserRound size={18} />
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                {errors.name && (
                  <span className="auth-error-text">{errors.name}</span>
                )}
              </div>

              <div className="auth-field">
                <label htmlFor="register-email">Work email</label>

                <div
                  className={`auth-input-wrapper ${
                    errors.email ? "auth-input-error" : ""
                  }`}
                >
                  <Mail size={18} />
                  <input
                    id="register-email"
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
            </div>

            <div className="auth-field">
              <label htmlFor="organization">Organization name</label>

              <div
                className={`auth-input-wrapper ${
                  errors.organization ? "auth-input-error" : ""
                }`}
              >
                <Building2 size={18} />
                <input
                  id="organization"
                  type="text"
                  name="organization"
                  placeholder="Your organization"
                  value={formData.organization}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

              {errors.organization && (
                <span className="auth-error-text">
                  {errors.organization}
                </span>
              )}
            </div>

            <div className="auth-field">
              <label>Choose your role</label>

              <div className="role-selection-grid">
                {roles.map((role) => {
                  const Icon = role.icon;
                  const isSelected = formData.role === role.value;

                  return (
                    <button
                      type="button"
                      className={`role-selection-card ${
                        isSelected ? "role-selection-active" : ""
                      }`}
                      key={role.value}
                      onClick={() => selectRole(role.value)}
                    >
                      <div className="role-selection-icon">
                        <Icon size={20} />
                      </div>

                      <div>
                        <strong>{role.title}</strong>
                        <span>{role.description}</span>
                      </div>

                      <div className="role-check">
                        {isSelected && <CheckCircle2 size={18} />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="admin-security-note">
                <LockKeyhole size={14} />
                Administrator accounts are provisioned securely by the system.
              </p>
            </div>

            <div className="register-field-grid">
              <div className="auth-field">
                <label htmlFor="register-password">Password</label>

                <div
                  className={`auth-input-wrapper ${
                    errors.password ? "auth-input-error" : ""
                  }`}
                >
                  <LockKeyhole size={18} />

                  <input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Minimum 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <span className="auth-error-text">{errors.password}</span>
                )}
              </div>

              <div className="auth-field">
                <label htmlFor="confirm-password">Confirm password</label>

                <div
                  className={`auth-input-wrapper ${
                    errors.confirmPassword ? "auth-input-error" : ""
                  }`}
                >
                  <LockKeyhole size={18} />

                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Repeat your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword((previous) => !previous)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <span className="auth-error-text">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>

            <button type="submit" className="auth-submit-button">
              Create account
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="auth-switch-text">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Register;