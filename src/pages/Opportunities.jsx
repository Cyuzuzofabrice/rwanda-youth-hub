import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import SearchBar from '../components/SearchBar'
import OpportunityFilters from '../components/OpportunityFilters'
import OpportunityCard from '../components/OpportunityCard'
import EmptyState from '../components/EmptyState'
import { opportunities } from '../data/opportunities'
import { Search } from 'lucide-react'

const Opportunities = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [filters, setFilters] = useState({
    category: searchParams.get('category') ? [searchParams.get('category')] : [],
    location: [],
    type: [],
    remote: [],
  })
  const [sortBy, setSortBy] = useState('latest')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredOpportunities = useMemo(() => {
    let result = opportunities

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase()
      result = result.filter(
        (opp) =>
          opp.title.toLowerCase().includes(searchLower) ||
          opp.organization.toLowerCase().includes(searchLower) ||
          opp.description.toLowerCase().includes(searchLower)
      )
    }

    // Category filter
    if (filters.category.length > 0) {
      result = result.filter((opp) => filters.category.includes(opp.type))
    }

    // Location filter
    if (filters.location.length > 0) {
      result = result.filter((opp) => filters.location.includes(opp.location))
    }

    // Type filter
    if (filters.type.length > 0) {
      result = result.filter((opp) => filters.type.includes(opp.type))
    }

    // Remote filter
    if (filters.remote.length > 0) {
      if (filters.remote.includes('Remote')) {
        result = result.filter((opp) => opp.remote)
      }
      if (filters.remote.includes('On-site')) {
        result = result.filter((opp) => !opp.remote)
      }
    }

    // Sort
    if (sortBy === 'deadline') {
      result.sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    } else if (sortBy === 'latest') {
      result.sort((a, b) => b.id - a.id)
    }

    return result
  }, [search, filters, sortBy])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  const clearFilters = () => {
    setFilters({ category: [], location: [], type: [], remote: [] })
    setSearch('')
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Opportunities</h1>
          <p className="text-neutral-600">Discover jobs, internships, scholarships, and more</p>
        </div>

        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Desktop Filters */}
          <div className="hidden md:block">
            <h2 className="font-bold text-base mb-4">Filters</h2>
            <OpportunityFilters filters={filters} onFilterChange={handleFilterChange} />
            {(search || Object.values(filters).some((f) => f.length > 0)) && (
              <button onClick={clearFilters} className="btn-outline w-full mt-4 text-sm">
                Clear All
              </button>
            )}
          </div>

          {/* Search and Results */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search opportunities"
              />
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4 flex gap-2">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="btn-outline flex-1 text-sm"
              >
                Filters
              </button>
              {(search || Object.values(filters).some((f) => f.length > 0)) && (
                <button onClick={clearFilters} className="btn-outline flex-1 text-sm">
                  Clear
                </button>
              )}
            </div>

            {/* Mobile Filters */}
            {mobileFiltersOpen && (
              <div className="md:hidden mb-6 p-4 bg-white border border-neutral-200 rounded-lg">
                <OpportunityFilters filters={filters} onFilterChange={handleFilterChange} />
              </div>
            )}

            {/* Sort Options */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-neutral-600">
                Showing {filteredOpportunities.length} opportunity{filteredOpportunities.length !== 1 ? 'ies' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field text-sm px-3 py-2 w-40"
              >
                <option value="latest">Latest</option>
                <option value="deadline">Deadline</option>
              </select>
            </div>

            {/* Opportunities Grid */}
            {filteredOpportunities.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {filteredOpportunities.map((opp) => (
                  <OpportunityCard key={opp.id} opportunity={opp} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No opportunities found"
                description="Try adjusting your search or filters to find opportunities that match your interests"
                buttonText="Clear Filters"
                onButtonClick={clearFilters}
                icon={Search}
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Opportunities
