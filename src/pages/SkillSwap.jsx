import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import SearchBar from '../components/SearchBar'
import SkillCard from '../components/SkillCard'
import EmptyState from '../components/EmptyState'
import { skillProfiles, skillCategories } from '../data/skills'
import { useNavigate } from 'react-router-dom'
import { Users } from 'lucide-react'

const SkillSwap = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredProfiles = skillProfiles.filter((profile) => {
    const matchesSearch =
      search === '' ||
      profile.name.toLowerCase().includes(search.toLowerCase()) ||
      profile.title.toLowerCase().includes(search.toLowerCase()) ||
      profile.canTeach.some((skill) => skill.toLowerCase().includes(search.toLowerCase())) ||
      profile.wantToLearn.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))

    const matchesCategory =
      selectedCategory === '' ||
      profile.canTeach.some((skill) =>
        skillCategories.includes(selectedCategory) && skill.includes(selectedCategory)
      ) ||
      profile.wantToLearn.some((skill) =>
        skillCategories.includes(selectedCategory) && skill.includes(selectedCategory)
      )

    return matchesSearch && matchesCategory
  })

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Skill Swap</h1>
          <p className="text-neutral-600 mb-4">
            Teach what you know. Learn what you need. Connect directly with other young professionals.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-8 flex gap-4">
          <button onClick={() => navigate('/skill-swap/create')} className="btn-primary">
            + Offer a Skill
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search skills or people"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 text-sm font-600 rounded-md transition ${
                selectedCategory === ''
                  ? 'bg-primary text-white'
                  : 'bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-600 rounded-md transition ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white border border-neutral-300 text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Profiles Grid */}
        {filteredProfiles.length > 0 ? (
          <div>
            <p className="text-sm text-neutral-600 mb-4">
              Found {filteredProfiles.length} profile{filteredProfiles.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProfiles.map((profile) => (
                <SkillCard key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
        ) : (
          <EmptyState
            title="No matches found"
            description="Try adjusting your search or filters to find people and skills"
            buttonText="Offer a Skill"
            onButtonClick={() => navigate('/skill-swap/create')}
            icon={Users}
          />
        )}
      </div>
    </MainLayout>
  )
}

export default SkillSwap
