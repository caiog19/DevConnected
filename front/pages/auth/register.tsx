import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { register } from '../../services/authService';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register({ name, email, password });
      // Redirecionar o usuário para a página de login após cadastro bem-sucedido
      router.push('/auth/login');
    } catch (err) {
      setError('Erro ao cadastrar usuário');
    }
  };

  return (
    <div>
      <h1>Cadastrar</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button text="Cadastrar" type="submit" />
      </form>
    </div>
  );
};

export default Register;
