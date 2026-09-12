import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { useAuth } from '../context/AuthContext'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'

const Login = () => {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [generalError, setGeneralError] = useState('')

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
    if (generalError) {
      setGeneralError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setGeneralError('')

    if (!validateForm()) {
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      try {
        // Mock authentication - in real app, this would call backend
        const userData = {
          id: Date.now().toString(),
          email: formData.email,
          fullName: formData.email.split('@')[0],
          location: 'Rwanda',
          mainInterest: 'Career Growth',
        }
        login(userData)
        setLoading(false)
        navigate('/dashboard')
      } catch (error) {
        setGeneralError('Invalid email or password')
        setLoading(false)
      }
    }, 500)
  }

  return (
    <MainLayout>
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Welcome back</h1>
          <p className="text-neutral-600">Sign in to your YouthHub account</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4 mb-6">
          {generalError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{generalError}</p>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="label">Email address</label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3.5 text-neutral-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input-field pl-10"
              />
            </div>
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-3.5 text-neutral-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="input-field pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-neutral-400 hover:text-neutral-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-primary" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-primary hover:underline font-600">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          <p className="text-neutral-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline font-600">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default Login
