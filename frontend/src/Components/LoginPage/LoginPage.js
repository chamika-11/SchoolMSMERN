// src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Add your authentication logic here
            console.log('Admin login attempt:', formData);
            
            // Redirect to admin dashboard after successful login
            navigate('/admin-dashboard');
            
        } catch (err) {
            setError('Invalid administrator credentials');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-left">
                    <div className="school-info">
                        <h1>Hatharaliyadda Primary School</h1>
                        <p>Administration Portal</p>
                    </div>
                </div>

                <div className="login-right">
                    <div className="login-form-container">
                        <div className="admin-login-header">
                            <i className="fas fa-user-shield"></i>
                            <h2>Administrator Login</h2>
                            <p className="login-subtitle">Access the school management system</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Admin Username</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-user"></i>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter admin username"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-with-icon">
                                    <i className="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-options">
                                <label className="remember-me">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                    />
                                    Remember me
                                </label>
                                <a href="/forgot-password" className="forgot-password">
                                    Forgot Password?
                                </a>
                            </div>

                            {error && <div className="error-message">{error}</div>}

                            <button 
                                type="submit" 
                                className={`login-button ${isLoading ? 'loading' : ''}`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="loading-spinner"></span>
                                ) : 'Login to Dashboard'}
                            </button>
                        </form>

                        <div className="security-notice">
                            <i className="fas fa-shield-alt"></i>
                            <p>This is a secure system and unauthorized access is prohibited</p>
                        </div>

                        <div className="help-section">
                            <p>Need technical support?</p>
                            <a href="tel:+94123456789">
                                <i className="fas fa-phone"></i> +94 123 456 789
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;