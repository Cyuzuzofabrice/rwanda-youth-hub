import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { courses } from '../data/courses'
import { ExternalLink } from 'lucide-react'

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')

  const categories = ['Technology', 'Business', 'Design', 'Marketing', 'Finance']
  const levels = ['Beginner', 'Intermediate', 'Advanced']

  const filteredCourses = courses.filter((course) => {
    const matchCategory = selectedCategory === '' || course.category === selectedCategory
    const matchLevel = selectedLevel === '' || course.level === selectedLevel
    return matchCategory && matchLevel
  })

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Learning Resources</h1>
          <p className="text-neutral-600">Curated courses and learning materials to help you grow</p>
        </div>

        {/* Info Banner */}
        <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-neutral-700">
            <strong>Note:</strong> These resources are curated from various external platforms. We recommend checking each provider directly for the most up-to-date information and pricing.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="label">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Level</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="input-field"
            >
              <option value="">All Levels</option>
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-base text-neutral-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{course.provider}</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded">{course.category}</span>
                    <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded">{course.level}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        course.price === 'Free'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {course.price}
                    </span>
                  </div>
                </div>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full inline-flex items-center justify-center gap-2"
                >
                  Learn More
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-neutral-600 mb-4">No courses found matching your filters</p>
            <button
              onClick={() => {
                setSelectedCategory('')
                setSelectedLevel('')
              }}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default Learn
