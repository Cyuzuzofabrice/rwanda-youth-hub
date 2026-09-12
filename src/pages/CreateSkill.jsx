import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import { useAuth } from '../context/AuthContext'

const CreateSkill = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    canTeach: '',
    wantToLearn: '',
    experienceLevel: 'Intermediate',
    format: 'Online',
    location: '',
    introduction: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      navigate('/skill-swap')
    }, 2000)
  }

  if (!user) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Please log in</h1>
          <p className="text-neutral-600 mb-6">You need to be logged in to offer a skill</p>
          <button onClick={() => navigate('/login')} className="btn-primary">
            Go to Login
          </button>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Offer a Skill</h1>
          <p className="text-neutral-600">Share your knowledge and learn from others</p>
        </div>

        {submitted ? (
          <div className="card p-8 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Skill Added Successfully!</h2>
            <p className="text-neutral-600 mb-6">Your skill has been added to your profile. Other users can now see it.</p>
            <p className="text-neutral-500 text-sm">Redirecting to Skill Swap...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card p-6 space-y-6">
            <div>
              <label className="label">Skill I can teach</label>
              <input
                type="text"
                name="canTeach"
                value={formData.canTeach}
                onChange={handleChange}
                placeholder="e.g., React.js, Web Design, Python"
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="label">Skill I want to learn</label>
              <input
                type="text"
                name="wantToLearn"
                value={formData.wantToLearn}
                onChange={handleChange}
                placeholder="e.g., UI/UX Design, Machine Learning"
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="label">Experience level</label>
              <select name="experienceLevel" value={formData.experienceLevel} onChange={handleChange} className="input-field">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            <div>
              <label className="label">Preferred format</label>
              <select name="format" value={formData.format} onChange={handleChange} className="input-field">
                <option>Online</option>
                <option>In person</option>
                <option>Either</option>
              </select>
            </div>

            <div>
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Kigali"
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="label">Short introduction</label>
              <textarea
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
                placeholder="Tell others about your background and why you want to share this skill"
                className="input-field"
                rows="4"
                required
              />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="btn-primary flex-1">
                Create Skill Profile
              </button>
              <button type="button" onClick={() => navigate('/skill-swap')} className="btn-outline flex-1">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </DashboardLayout>
  )
}

export default CreateSkill
