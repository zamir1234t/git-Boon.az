import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [greating, setGreating] = useState<string | null>(null);

  const handleLogin = () => {
    setLoading(true);
    setError(null);
    setGreating(null);

    if (email === 'ysif@good.com' && password === 'ironstark') {
      localStorage.setItem('loggedin', 'true');
      setGreating('вы успешно зашли в свою учетную запесь ');
      setLoading(false);
      return true;
    } else {
      setError('Проверьте все ли вы правильно написали');
      setLoading(false);
      return false;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    loading,
    error,
    greating
  };
};