import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../../services/authService';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      // Redirecionar o usuário para a página principal após login bem-sucedido
      router.push('/');
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
