import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import { opportunities } from '../data/opportunities'
import { BookmarkPlus, Bookmark, Share2, MapPin, Calendar, Building2, CheckCircle } from 'lucide-react'

const OpportunityDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)

  const opportunity = opportunities.find((opp) => opp.id === parseInt(id))

  if (!opportunity) {
    return (
      <MainLayout>
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-2">Opportunity not found</h1>
          <p className="text-neutral-600 mb-6">The opportunity you are looking for does not exist.</p>
          <button onClick={() => navigate('/opportunities')} className="btn-primary">
            Back to Opportunities
          </button>
        </div>
      </MainLayout>
    )
  }

  const relatedOpportunities = opportunities
    .filter((opp) => opp.id !== opportunity.id && opp.category === opportunity.category)
    .slice(0, 3)

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/opportunities')}
          className="text-primary font-600 mb-6 hover:underline flex items-center gap-1"
        >
          ← Back to Opportunities
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">{opportunity.title}</h1>
                  <p className="text-lg text-neutral-600">{opportunity.organization}</p>
                </div>
                <span className="text-xs font-600 px-3 py-1 bg-neutral-100 text-neutral-700 rounded whitespace-nowrap">
                  {opportunity.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{opportunity.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Deadline: {new Date(opportunity.deadline).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="btn-primary flex-1 md:flex-none">
                  Apply Now
                </button>
                <button
                  onClick={() => setSaved(!saved)}
                  className="btn-secondary flex-1 md:flex-none flex items-center justify-center gap-2"
                >
                  {saved ? <Bookmark size={18} /> : <BookmarkPlus size={18} />}
                  {saved ? 'Saved' : 'Save'}
                </button>
                <button className="btn-outline hidden md:block px-4">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">About This Opportunity</h2>
              <p className="text-neutral-700 mb-6 whitespace-pre-line">{opportunity.description}</p>
            </div>

            {/* Requirements */}
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Requirements</h2>
              <ul className="space-y-2">
                {opportunity.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div className="card p-6 mb-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Responsibilities</h2>
              <ul className="space-y-2">
                {opportunity.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You'll Learn */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">What You'll Learn</h2>
              <ul className="space-y-2">
                {opportunity.whatYouLearn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-20 mb-6">
              <div className="mb-6">
                <p className="text-xs text-neutral-500 font-600 mb-1">ORGANIZATION</p>
                <p className="font-bold text-neutral-900">{opportunity.organization}</p>
              </div>
              <div className="mb-6">
                <p className="text-xs text-neutral-500 font-600 mb-1">OPPORTUNITY TYPE</p>
                <p className="font-bold text-neutral-900">{opportunity.type}</p>
              </div>
              <div className="mb-6">
                <p className="text-xs text-neutral-500 font-600 mb-1">LOCATION</p>
                <p className="font-bold text-neutral-900">{opportunity.location}</p>
              </div>
              <div className="mb-6">
                <p className="text-xs text-neutral-500 font-600 mb-1">DEADLINE</p>
                <p className="font-bold text-neutral-900">{new Date(opportunity.deadline).toLocaleDateString()}</p>
              </div>
              <div className="mb-6">
                <p className="text-xs text-neutral-500 font-600 mb-1">REMOTE</p>
                <p className="font-bold text-neutral-900">{opportunity.remote ? 'Yes' : 'No'}</p>
              </div>
              <button className="btn-primary w-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Related Opportunities */}
        {relatedOpportunities.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Related Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedOpportunities.map((opp) => (
                <div key={opp.id} className="card p-4">
                  <h3 className="font-bold text-base mb-2">{opp.title}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{opp.organization}</p>
                  <button
                    onClick={() => navigate(`/opportunities/${opp.id}`)}
                    className="btn-small-primary w-full"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default OpportunityDetails
