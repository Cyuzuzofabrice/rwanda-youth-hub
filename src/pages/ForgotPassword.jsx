import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { Mail, ArrowLeft } from 'lucide-react'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [generalError, setGeneralError] = useState('')

  const validateForm = () => {
    const newErrors = {}

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors({})
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
        // Mock password reset - in real app, this would send email
        setSubmitted(true)
        setLoading(false)
      } catch (error) {
        setGeneralError('An error occurred. Please try again.')
        setLoading(false)
      }
    }, 500)
  }

  if (submitted) {
    return (
      <MainLayout>
        <div className="max-w-md mx-auto px-4 py-12">
          <div className="card p-8 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} className="text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-2">Check your email</h1>
            <p className="text-neutral-600 mb-6">
              We've sent a password reset link to <strong>{email}</strong>. Please check your email and follow the instructions to reset your password.
            </p>
            <div className="space-y-3">
              <button onClick={() => navigate('/login')} className="btn-primary w-full">
                Back to Login
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline w-full"
              >
                Try another email
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-md mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 text-primary hover:underline font-600 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Login
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Reset password</h1>
          <p className="text-neutral-600">Enter your email address and we'll send you a link to reset your password</p>
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
                value={email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input-field pl-10"
              />
            </div>
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {/* Back to Sign Up */}
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

export default ForgotPassword
