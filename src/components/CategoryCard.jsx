import React from 'react'
import { Briefcase, Users, BookOpen, Award, Gift, Trophy, Zap, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ name, count, icon }) => {
  const iconMap = {
    Briefcase: <Briefcase size={24} />,
    Users: <Users size={24} />,
    BookOpen: <BookOpen size={24} />,
    Zap: <Zap size={24} />,
    Award: <Award size={24} />,
    Gift: <Gift size={24} />,
    Trophy: <Trophy size={24} />,
    Globe: <Globe size={24} />,
  }

  return (
    <Link to={`/opportunities?category=${name}`}>
      <div className="card p-6 text-center hover:shadow-lg cursor-pointer transition">
        <div className="text-primary mb-3 flex justify-center">{iconMap[icon]}</div>
        <h3 className="font-bold text-base mb-1">{name}</h3>
        <p className="text-sm text-neutral-600">{count} opportunities</p>
      </div>
    </Link>
  )
}

export default CategoryCard
