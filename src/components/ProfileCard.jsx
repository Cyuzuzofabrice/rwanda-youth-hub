import React from 'react'

const ProfileCard = ({ profile }) => {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold text-xl">
          {profile.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-xl font-bold text-neutral-900">{profile.name}</h2>
          <p className="text-base text-neutral-600">{profile.title}</p>
          <p className="text-sm text-neutral-500">{profile.location}</p>
        </div>
      </div>
      {profile.bio && <p className="text-neutral-700 mb-4">{profile.bio}</p>}
    </div>
  )
}

export default ProfileCard
