import React, { useState } from 'react';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Heart,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  PawPrint,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { LanguageSelector } from '../components/LanguageSelector';
import { BuddyAvatar, LunaAvatar } from '../assets/illustrations';

export const LoginView = ({ onLoginSuccess, addToast }) => {
  const { t } = useLanguage();
  const { login, quickLogin, register } = useAuth();

  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('Dog');

  const [formError, setFormError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    setFormError('');

    if (!email || !password) {
      setFormError(t('auth.invalidCredentials', 'Please enter a valid email and password.'));
      return;
    }

    const loggedUser = login(email, password);
    if (addToast) {
      addToast(
        `${t('auth.loginSuccess', 'Welcome back,')} ${loggedUser.name}! 🐾`,
        "Buddy's real-time vitals and records are synchronized."
      );
    }
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setFormError('');

    if (!email || !password || !name) {
      setFormError(t('auth.invalidCredentials', 'Please fill in all required fields.'));
      return;
    }

    const newUser = register({
      name,
      email,
      password,
      petName: petName || 'Buddy',
      petType: petType || 'Dog'
    });

    if (addToast) {
      addToast(
        `${t('auth.registerSuccess', 'Account created successfully!')} ${newUser.name}! 🐶`,
        `Welcome to Little Paws! Added ${newUser.petName} to your pet family.`
      );
    }
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const handleQuickDemo = (type) => {
    const loggedUser = quickLogin(type);
    if (addToast) {
      addToast(
        `⚡ Quick Demo Login: ${loggedUser.name}`,
        `Switched active account to ${loggedUser.name} (${loggedUser.petName}'s parent).`
      );
    }
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const handleForgotPassword = () => {
    if (addToast) {
      addToast(
        'Password Reset Requested 🔐',
        t('auth.forgotSent', 'Password reset instructions sent to your email address.'),
        'info'
      );
    }
  };

  return (
    <div className="auth-container">
      {/* Top Bar on Login Page */}
      <div className="auth-top-bar">
        <div className="auth-brand-pill">
          <img src="/logo.png" alt="Little Paws Logo" className="auth-brand-logo brand-logo-round" />
          <span className="auth-brand-name">Little Paws</span>
        </div>
        <LanguageSelector compact={false} />
      </div>

      <div className="auth-card-wrapper">
        {/* Left / Main Card: Auth Form */}
        <div className="auth-main-card">
          {/* Header & Mode Switch Tabs */}
          <div className="auth-header">
            <h1 className="auth-title">
              {mode === 'signin' ? t('auth.welcomeBack') : t('auth.joinTitle')}
            </h1>
            <p className="auth-subtitle">
              {mode === 'signin' ? t('auth.welcomeSubtitle') : t('auth.joinSubtitle')}
            </p>
          </div>

          <div className="auth-tabs-row">
            <button
              type="button"
              className={`auth-tab-btn ${mode === 'signin' ? 'active' : ''}`}
              onClick={() => {
                setMode('signin');
                setFormError('');
              }}
              id="tab-sign-in"
            >
              {t('auth.tabSignIn')}
            </button>
            <button
              type="button"
              className={`auth-tab-btn ${mode === 'signup' ? 'active' : ''}`}
              onClick={() => {
                setMode('signup');
                setFormError('');
              }}
              id="tab-sign-up"
            >
              {t('auth.tabSignUp')}
            </button>
          </div>

          {/* Error Banner */}
          {formError && <div className="auth-error-alert">{formError}</div>}

          {/* Quick Demo Section (Featured for 1-Click Testing) */}
          <div className="demo-login-box">
            <div className="demo-login-label">
              <Sparkles size={14} color="var(--primary)" />
              <span>{t('auth.quickDemoHeader')}</span>
            </div>
            <div className="demo-login-actions">
              <button
                type="button"
                className="btn-demo-account btn-demo-sarah"
                onClick={() => handleQuickDemo('sarah')}
                id="btn-demo-sarah"
              >
                <BuddyAvatar size={24} />
                <span>{t('auth.demoSarahBtn')}</span>
              </button>
              <button
                type="button"
                className="btn-demo-account btn-demo-guest"
                onClick={() => handleQuickDemo('guest')}
                id="btn-demo-guest"
              >
                <LunaAvatar size={24} />
                <span>{t('auth.demoGuestBtn')}</span>
              </button>
            </div>
          </div>

          <div className="auth-divider">
            <span>{t('auth.orSocial')}</span>
          </div>

          {/* Sign In Form */}
          {mode === 'signin' ? (
            <form onSubmit={handleSignIn} className="auth-form" id="form-sign-in">
              <div className="form-group">
                <label className="form-label" htmlFor="signin-email">
                  {t('auth.emailLabel')}
                </label>
                <div className="input-with-icon-wrapper">
                  <Mail size={18} className="field-icon" />
                  <input
                    type="email"
                    id="signin-email"
                    className="form-input with-icon"
                    placeholder={t('auth.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-label-row">
                  <label className="form-label" htmlFor="signin-password">
                    {t('auth.passwordLabel')}
                  </label>
                  <button
                    type="button"
                    className="auth-link-text"
                    onClick={handleForgotPassword}
                  >
                    {t('auth.forgotPassword')}
                  </button>
                </div>
                <div className="input-with-icon-wrapper">
                  <Lock size={18} className="field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="signin-password"
                    className="form-input with-icon"
                    placeholder={t('auth.passwordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="field-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="auth-options-row">
                <label className="auth-checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>{t('auth.rememberMe')}</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary auth-submit-btn" id="btn-submit-signin">
                <span>{t('auth.signInBtn')}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            /* Sign Up Form */
            <form onSubmit={handleSignUp} className="auth-form" id="form-sign-up">
              <div className="form-group">
                <label className="form-label" htmlFor="signup-name">
                  {t('auth.nameLabel')}
                </label>
                <div className="input-with-icon-wrapper">
                  <User size={18} className="field-icon" />
                  <input
                    type="text"
                    id="signup-name"
                    className="form-input with-icon"
                    placeholder={t('auth.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="signup-email">
                  {t('auth.emailLabel')}
                </label>
                <div className="input-with-icon-wrapper">
                  <Mail size={18} className="field-icon" />
                  <input
                    type="email"
                    id="signup-email"
                    className="form-input with-icon"
                    placeholder={t('auth.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="signup-password">
                  {t('auth.passwordLabel')}
                </label>
                <div className="input-with-icon-wrapper">
                  <Lock size={18} className="field-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="signup-password"
                    className="form-input with-icon"
                    placeholder={t('auth.passwordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="field-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="auth-two-col-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="signup-petname">
                    {t('auth.petNameLabel')}
                  </label>
                  <div className="input-with-icon-wrapper">
                    <PawPrint size={18} className="field-icon" />
                    <input
                      type="text"
                      id="signup-petname"
                      className="form-input with-icon"
                      placeholder={t('auth.petNamePlaceholder')}
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="signup-pettype">
                    {t('auth.petTypeLabel')}
                  </label>
                  <select
                    id="signup-pettype"
                    className="form-select"
                    value={petType}
                    onChange={(e) => setPetType(e.target.value)}
                  >
                    <option value="Dog">{t('auth.petDog')}</option>
                    <option value="Cat">{t('auth.petCat')}</option>
                    <option value="Bird">{t('auth.petBird')}</option>
                    <option value="Other">{t('auth.petOther')}</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary auth-submit-btn" id="btn-submit-signup">
                <span>{t('auth.signUpBtn')}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          )}

          {/* Social Sign-In buttons */}
          <div className="auth-social-buttons-grid">
            <button
              type="button"
              className="btn-social"
              onClick={() => handleQuickDemo('sarah')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>{t('auth.googleLogin')}</span>
            </button>
            <button
              type="button"
              className="btn-social"
              onClick={() => handleQuickDemo('guest')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.62-.75 1.04-1.8 1.01-2.85-.92.04-2.02.61-2.67 1.37-.56.65-.99 1.7-1.01 2.76 1.03.08 2.05-.53 2.67-1.28" />
              </svg>
              <span>{t('auth.appleLogin')}</span>
            </button>
          </div>
        </div>

        {/* Right Feature Showcase Card */}
        <div className="auth-feature-card">
          <div className="auth-feature-badge">
            <Heart size={14} color="var(--accent)" fill="var(--accent)" />
            <span>{t('auth.tagline')}</span>
          </div>

          <div className="auth-feature-portrait-wrapper">
            <BuddyAvatar size={120} />
            <div className="auth-feature-pulse">
              <span className="live-pulse-dot" />
              <span>Collar Active • 98 bpm</span>
            </div>
          </div>

          <h3 className="auth-feature-heading">
            Everything your pet needs, unified in one warm home.
          </h3>
          <p className="auth-feature-desc">
            From smart vaccination reminders and 24/7 emergency dispatch to daily nutrition logs and verified luxury boarding.
          </p>

          <div className="auth-feature-list">
            <div className="auth-feature-item">
              <CheckCircle2 size={18} color="var(--primary)" />
              <span>{t('auth.badgeTrust')}</span>
            </div>
            <div className="auth-feature-item">
              <ShieldCheck size={18} color="var(--primary)" />
              <span>{t('auth.badgeSecurity')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
