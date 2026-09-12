import React from 'react'
import { Link } from 'react-router-dom'

const SkillCard = ({ profile }) => {
  return (
    <Link to={`/profile/${profile.id}`}>
      <div className="card p-4 hover:shadow-lg cursor-pointer">
        <div className="mb-3">
          <h3 className="font-bold text-base text-neutral-900 mb-1">{profile.name}</h3>
          <p className="text-sm text-neutral-600 mb-2">{profile.title}</p>
          <p className="text-xs text-neutral-500 mb-3">{profile.location}</p>
        </div>

        <div className="mb-3">
          <p className="text-xs font-600 text-neutral-600 mb-1">Can teach:</p>
          <div className="flex flex-wrap gap-1">
            {profile.canTeach.slice(0, 3).map((skill) => (
              <span key={skill} className="text-xs px-2 py-1 bg-primary bg-opacity-10 text-primary rounded">
                {skill}
              </span>
            ))}
            {profile.canTeach.length > 3 && (
              <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded">+{profile.canTeach.length - 3}</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-600 text-neutral-600 mb-1">Wants to learn:</p>
          <div className="flex flex-wrap gap-1">
            {profile.wantToLearn.map((skill) => (
              <span key={skill} className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button className="btn-small-primary w-full">View Profile</button>
      </div>
    </Link>
  )
}

export default SkillCard
