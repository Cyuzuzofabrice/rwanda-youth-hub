import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { skillProfiles } from '../data/skills'
import { MapPin, Mail, Briefcase } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Profile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [connected, setConnected] = useState(false)

  // For demo: if id matches user.id, show user profile; otherwise show skill profile
  let profile = null

  if (user && parseInt(id) === parseInt(user.id)) {
    // User's own profile
    profile = {
      id: user.id,
      name: user.fullName || 'Your Name',
      title: user.mainInterest || 'Job Seeker',
      location: user.location || 'Rwanda',
      bio: 'Your professional bio goes here',
      canTeach: ['Web Development', 'JavaScript'],
      wantToLearn: ['UI/UX Design'],
      email: user.email,
      experience: 'Intermediate',
    }
  } else {
    // Other user's profile
    profile = skillProfiles.find((p) => p.id === parseInt(id))
  }

  if (!profile) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-2">Profile not found</h1>
          <p className="text-neutral-600 mb-6">The profile you are looking for does not exist.</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Back to Home
          </button>
        </div>
      </MainLayout>
    )
  }

  const isOwnProfile = user && parseInt(id) === parseInt(user.id)

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="text-primary font-600 mb-6 hover:underline"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="md:col-span-2">
            <div className="card p-6 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-neutral-900">{profile.name}</h1>
                  <p className="text-lg text-neutral-600">{profile.title}</p>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mt-2">
                    <MapPin size={16} />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              {profile.bio && (
                <div className="mb-6">
                  <p className="text-neutral-700">{profile.bio}</p>
                </div>
              )}

              {!isOwnProfile && (
                <div className="flex gap-3">
                  <button
                    onClick={() => setConnected(!connected)}
                    className={connected ? 'btn-secondary flex-1' : 'btn-primary flex-1'}
                  >
                    {connected ? 'Connected' : 'Connect'}
                  </button>
                  {profile.email && (
                    <a href={`mailto:${profile.email}`} className="btn-outline flex-1 flex items-center justify-center gap-2">
                      <Mail size={18} />
                      Email
                    </a>
                  )}
                </div>
              )}

              {isOwnProfile && (
                <div className="flex gap-3">
                  <button onClick={() => navigate('/dashboard')} className="btn-primary flex-1">
                    Edit Profile
                  </button>
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Skills</h2>
              <div className="mb-6">
                <p className="text-sm font-600 text-neutral-600 mb-3">Can teach:</p>
                <div className="flex flex-wrap gap-2">
                  {profile.canTeach.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-primary bg-opacity-10 text-primary rounded-md text-sm font-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-600 text-neutral-600 mb-3">Wants to learn:</p>
                <div className="flex flex-wrap gap-2">
                  {profile.wantToLearn.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-neutral-200 text-neutral-700 rounded-md text-sm font-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Details</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-600 text-neutral-600">Experience Level</p>
                  <p className="text-neutral-900">{profile.experience || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-sm font-600 text-neutral-600">Location</p>
                  <p className="text-neutral-900">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="card p-6 sticky top-20">
              <h3 className="font-bold text-base mb-4">Quick Info</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-600 text-neutral-600 text-xs mb-1">LOCATION</p>
                  <p className="text-neutral-900">{profile.location}</p>
                </div>
                <div>
                  <p className="font-600 text-neutral-600 text-xs mb-1">EXPERIENCE</p>
                  <p className="text-neutral-900">{profile.experience || 'Intermediate'}</p>
                </div>
                {profile.email && (
                  <div>
                    <p className="font-600 text-neutral-600 text-xs mb-1">EMAIL</p>
                    <a href={`mailto:${profile.email}`} className="text-primary hover:underline">
                      {profile.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Profile
