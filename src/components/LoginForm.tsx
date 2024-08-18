import React, { useState, ChangeEvent, FormEvent } from 'react';

// 定义组件状态的接口
interface LoginFormState {
  email: string;
  password: string;
  error: string;
}

const LoginForm: React.FC = () => {
  // 使用 TypeScript 的类型定义状态
  const [state, setState] = useState<LoginFormState>({
    email: '',
    password: '',
    error: '',
  });

  // 处理输入更改
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  // 处理表单提交
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = state;

    // 简单的表单验证
    if (!email || !password) {
      setState(prevState => ({
        ...prevState,
        error: '请填写所有字段',
      }));
      return;
    }

    // 清除错误信息
    setState(prevState => ({
      ...prevState,
      error: '',
    }));

    // 这里可以处理登录逻辑，例如调用 API
    console.log('登录:', { email, password });
  };

  return (
    <div className="login-container">
      <h2>登录</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">邮箱:</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码:</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        {state.error && <p className="error">{state.error}</p>}
        <button type="submit">登录</button>
      </form>
    </div>
  );
}

export default LoginForm;
