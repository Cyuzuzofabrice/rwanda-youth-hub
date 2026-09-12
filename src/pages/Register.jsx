import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { useAuth } from '../context/AuthContext'
import { Eye, EyeOff, Mail, Lock, User, MapPin } from 'lucide-react'

const Register = () => {
  const navigate = useNavigate()
  const { register, isAuthenticated } = useAuth()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    mainInterest: 'Finding a job',
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [generalError, setGeneralError] = useState('')

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  const mainInterestOptions = [
    'Finding a job',
    'Internship',
    'Learning',
    'Freelancing',
    'Teaching skills',
    'Finding collaborators',
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
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
        // Mock registration - in real app, this would call backend
        const userData = {
          fullName: formData.fullName,
          email: formData.email,
          location: formData.location,
          mainInterest: formData.mainInterest,
        }
        register(userData)
        setLoading(false)
        navigate('/dashboard')
      } catch (error) {
        setGeneralError('An error occurred during registration')
        setLoading(false)
      }
    }, 500)
  }

  return (
    <MainLayout>
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Get started</h1>
          <p className="text-neutral-600">Create your YouthHub account</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4 mb-6">
          {generalError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{generalError}</p>
            </div>
          )}

          {/* Full Name Field */}
          <div>
            <label className="label">Full name</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-3.5 text-neutral-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="input-field pl-10"
              />
            </div>
            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          </div>

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

          {/* Location Field */}
          <div>
            <label className="label">Location</label>
            <div className="relative">
              <MapPin size={18} className="absolute left-3 top-3.5 text-neutral-400" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Kigali"
                className="input-field pl-10"
              />
            </div>
            {errors.location && <p className="error-text">{errors.location}</p>}
          </div>

          {/* Main Interest Field */}
          <div>
            <label className="label">What interests you most?</label>
            <select
              name="mainInterest"
              value={formData.mainInterest}
              onChange={handleChange}
              className="input-field"
            >
              {mainInterestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
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

          {/* Confirm Password Field */}
          <div>
            <label className="label">Confirm password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-3.5 text-neutral-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="input-field pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 text-neutral-400 hover:text-neutral-600"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
          </div>

          {/* Terms */}
          <div className="text-xs text-neutral-600">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" required className="accent-primary mt-1 flex-shrink-0" />
              <span>
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        {/* Sign In Link */}
        <div className="text-center text-sm">
          <p className="text-neutral-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline font-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default Register
