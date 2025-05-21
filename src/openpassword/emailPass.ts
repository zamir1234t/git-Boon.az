import { useState, useEffect } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(localStorage.getItem('userRole') || null);
  const [promoCodes, setPromoCodes] = useState<
    { code: string; discount: string; description: string }[] | null
  >(null);

  
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleLogin = () => {
    setLoading(true);
    setError(null);
    setGreeting(null);

    if (!validateEmail(email)) {
      setError('Email должен содержать @ и заканчиваться на .com');
      setLoading(false);
      return false;
    }

    if (!validatePassword(password)) {
      setError('Пароль должен быть не короче 6 символов');
      setLoading(false);
      return false;
    }

    const userRole = email.startsWith('admin@') ? 'admin' : 'user';
    localStorage.setItem('loggedin', 'true');
    localStorage.setItem('userRole', userRole);
    setRole(userRole);
    setGreeting('Вы успешно зашли в свою учетную запись');
    setLoading(false);
    return true;
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    localStorage.removeItem('userRole');
    setEmail('');
    setPassword('');
    setGreeting(null);
    setError(null);
    setRole(null);
    setPromoCodes(null);
  };

  
  const fetchPromoCodes = () => {
    if (role !== 'admin') {
      setError('Доступ к промокодам запрещен');
      return;
    }
    const mockPromoCodes = [
      { code: 'case', discount: '10% off', description: 'Скидка 10% до 10% на весь заказ' },
      { code: 'abstarctRanODP', discount: 'Free Shipping', description: 'Бесплатная доставка' },
      { code: 'keYWellY', discount: '20 AZN off', description: 'скида до 20% на весь заказ' },
      { code: 'promo', discount: '20 AZN off', description: 'скида до 20% на весь заказ' },
      
    ];
    setPromoCodes(mockPromoCodes);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleLogout,
    loading,
    error,
    greeting,
    role,
    promoCodes,
    fetchPromoCodes,
  };
};