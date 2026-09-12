import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import { useAuth } from '../context/AuthContext'
import { BookmarkPlus, Users, Zap, CheckCircle, Edit2 } from 'lucide-react'
import { opportunities } from '../data/opportunities'
import { skillProfiles } from '../data/skills'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Please log in</h1>
          <p className="text-neutral-600 mb-6">You need to be logged in to view your dashboard</p>
          <button onClick={() => navigate('/login')} className="btn-primary">
            Go to Login
          </button>
        </div>
      </DashboardLayout>
    )
  }

  const profileCompletion = 70
  const savedOpportunities = opportunities.slice(0, 2)
  const recommendedProfiles = skillProfiles.slice(0, 3)

  return (
    <DashboardLayout>
      <div className="max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Welcome back, {user?.fullName || 'User'}</h1>
          <p className="text-neutral-600">Here's an overview of your YouthHub account</p>
        </div>

        {/* Profile Completion */}
        <div className="card p-6 mb-8 border-l-4 border-primary">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 mb-1">Profile Completion</h2>
              <p className="text-sm text-neutral-600">Complete your profile to get better opportunities</p>
            </div>
            <div className="text-3xl font-bold text-primary">{profileCompletion}%</div>
          </div>
          <div className="bg-neutral-200 rounded-full h-2 mb-4">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${profileCompletion}%` }}
            />
          </div>
          <button onClick={() => navigate(`/profile/${user?.id}`)} className="btn-primary inline-flex items-center gap-2">
            <Edit2 size={16} />
            Complete Profile
          </button>
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Saved Opportunities */}
          <div className="lg:col-span-2">
            <div className="card p-6 mb-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <BookmarkPlus size={20} />
                Saved Opportunities
              </h2>
              {savedOpportunities.length > 0 ? (
                <div className="space-y-3">
                  {savedOpportunities.map((opp) => (
                    <div
                      key={opp.id}
                      className="border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 cursor-pointer transition"
                      onClick={() => navigate(`/opportunities/${opp.id}`)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-neutral-900 mb-1">{opp.title}</h3>
                          <p className="text-sm text-neutral-600">{opp.organization}</p>
                        </div>
                        <span className="text-xs font-600 px-2 py-1 bg-neutral-100 text-neutral-700 rounded whitespace-nowrap">
                          {opp.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-600 text-center py-6">No saved opportunities yet</p>
              )}
              <button
                onClick={() => navigate('/opportunities')}
                className="btn-outline w-full mt-4"
              >
                Explore More
              </button>
            </div>

            {/* Skill Swap Matches */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                <Users size={20} />
                Skill Swap Matches
              </h2>
              <p className="text-neutral-600 text-sm mb-4">People you may want to connect with based on your interests</p>
              {recommendedProfiles.length > 0 ? (
                <div className="space-y-3">
                  {recommendedProfiles.map((profile) => (
                    <div
                      key={profile.id}
                      className="border border-neutral-200 rounded-lg p-4 hover:bg-neutral-50 cursor-pointer transition"
                      onClick={() => navigate(`/profile/${profile.id}`)}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-bold text-neutral-900">{profile.name}</h3>
                          <p className="text-sm text-neutral-600">{profile.title}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {profile.canTeach.slice(0, 2).map((skill) => (
                          <span key={skill} className="text-xs px-2 py-1 bg-primary bg-opacity-10 text-primary rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-neutral-600 text-center py-6">No matches yet</p>
              )}
              <button
                onClick={() => navigate('/skill-swap')}
                className="btn-outline w-full mt-4"
              >
                Explore Skill Swap
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            {/* My Skills */}
            <div className="card p-6 mb-6">
              <h3 className="font-bold text-base text-neutral-900 mb-4 flex items-center gap-2">
                <Zap size={18} />
                My Skills
              </h3>
              <div className="mb-4">
                <p className="text-xs font-600 text-neutral-600 mb-2">Can teach:</p>
                {user?.canTeach && user.canTeach.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {user.canTeach.map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-primary bg-opacity-10 text-primary rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-neutral-600">Add your skills to get started</p>
                )}
              </div>
              <button onClick={() => navigate('/skill-swap/create')} className="btn-small-primary w-full">
                + Add Skill
              </button>
            </div>

            {/* Quick Stats */}
            <div className="card p-6">
              <h3 className="font-bold text-base text-neutral-900 mb-4">Account Status</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-neutral-700">Email verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-neutral-700">Profile created</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-neutral-300" />
                  <span className="text-neutral-600">Applied to opportunity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
