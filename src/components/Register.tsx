import React, { useEffect, useState } from 'react';
import { useLogin } from '../openpassword/emailPass';
import './register.scss';

interface RegisterProps {
  isVisible: boolean;
  onclose: () => void;
  showPassword: boolean;
  togglePassword: () => void;
  onOpen: () => void;
}

function Register({
  isVisible,
  onclose,
  showPassword,
  togglePassword,
  onOpen,
}: RegisterProps) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleLogout,
    loading,
    error,
    greeting, 
  } = useLogin();

  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedin') === 'true';
    if (isLoggedIn) {
      setAuthError('Вы уже вошли в учётную запись');
    } else {
      setAuthError(null);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isLoggedIn = localStorage.getItem('loggedin') === 'true';
    if (isLoggedIn) {
      setAuthError('Вы уже вошли в учётную запись');
      return;
    }

    const isSuccess = handleLogin();

    if (isSuccess) {
      setAuthError(null);
      setTimeout(() => {
        onclose();
      }, 1500);
    }
  };

  const onLogout = () => {
    handleLogout();
    setAuthError(null);
  };

  const isLoggedIn = localStorage.getItem('loggedin') === 'true';

  return (
    <div className="register">
      <i className="fa-solid fa-circle-user" onClick={onOpen}>
        <span>войти</span>
      </i>

      {isVisible && (
        <div className="register-menu">
          <div className="register-content">
            <button className="close-btn" onClick={onclose}>×</button>
            <h3>Личный кабинет</h3>
            {authError && <div className="error">{authError}</div>}
            {isLoggedIn ? (
              <div>
                <div className="success">{greeting || 'Вы вошли в систему'}</div>
                <button className="logout-btn" onClick={onLogout}>
                  Выйти
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!!authError}
                />
                <div className="password-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={!!authError}
                    className="password-input"
                  />
                  <i
                    className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-icon`}
                    onClick={togglePassword}
                  ></i>
                </div>
                <button type="submit" disabled={loading || !!authError}>
                  {loading ? 'Вход...' : 'Войти'}
                </button>
              </form>
            )}
            {error && <div className="error">{error}</div>}
            {!isLoggedIn && greeting && <div className="success">{greeting}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;