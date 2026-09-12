import React from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import CategoryCard from '../components/CategoryCard'
import OpportunityCard from '../components/OpportunityCard'
import SkillCard from '../components/SkillCard'
import { opportunities, opportunityCategories } from '../data/opportunities'
import { skillProfiles } from '../data/skills'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()
  const featuredOpportunities = opportunities.filter((opp) => opp.featured).slice(0, 4)
  const skillProfilesToShow = skillProfiles.slice(0, 3)

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <span className="text-xs font-700 tracking-wide text-primary uppercase">Opportunities for Rwandan Youth</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
                Find opportunities. Build skills. Move forward.
              </h1>
              <p className="text-lg text-neutral-600 mb-6">
                Discover jobs, internships, scholarships, training and people who can help you build your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => navigate('/opportunities')} className="btn-primary">
                  Explore Opportunities
                </button>
                <button onClick={() => navigate('/skill-swap')} className="btn-secondary">
                  Join Skill Swap
                </button>
              </div>
            </div>
            <div className="hidden md:block bg-neutral-100 border border-neutral-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="bg-white border border-neutral-200 rounded-lg p-4">
                  <p className="text-xs font-600 text-neutral-500 mb-2">Quick Search</p>
                  <input
                    type="text"
                    placeholder="Search jobs, internships, scholarships..."
                    className="input-field mb-3"
                  />
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-primary" />
                      <span>Jobs</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span>Internships</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span>Scholarships</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="accent-primary" />
                      <span>Training</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">Featured Opportunities</h2>
          <p className="text-neutral-600">Popular opportunities posted recently</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {featuredOpportunities.map((opp) => (
            <OpportunityCard key={opp.id} opportunity={opp} />
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => navigate('/opportunities')} className="btn-outline inline-flex items-center gap-2">
            View all opportunities <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Skill Swap Section */}
      <section className="bg-neutral-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Know something? Share it. Need something? Learn it.</h2>
              <p className="text-neutral-300 mb-6">
                Skill Swap allows young people to exchange knowledge directly with each other. Find people with skills you want to learn, and teach them what you know.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-600">Learn directly from peers</p>
                    <p className="text-sm text-neutral-400">No expensive courses, just real knowledge sharing</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-600">Build your teaching experience</p>
                    <p className="text-sm text-neutral-400">Share what you know and help others grow</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-600">Grow your network</p>
                    <p className="text-sm text-neutral-400">Connect with other young professionals in Rwanda</p>
                  </div>
                </div>
              </div>
              <button onClick={() => navigate('/skill-swap')} className="btn-primary">
                Explore Skill Swap
              </button>
            </div>
            <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6">
              <div className="space-y-4">
                <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4">
                  <p className="text-xs font-600 text-accent mb-2">Example Match</p>
                  <p className="font-600 mb-2">Fabrice</p>
                  <p className="text-sm text-neutral-300 mb-3">Frontend Developer</p>
                  <div className="mb-3">
                    <p className="text-xs font-600 text-neutral-400 mb-2">Can teach:</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs px-2 py-1 bg-primary bg-opacity-20 text-accent rounded">React.js</span>
                      <span className="text-xs px-2 py-1 bg-primary bg-opacity-20 text-accent rounded">JavaScript</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-600 text-neutral-400 mb-2">Wants to learn:</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs px-2 py-1 bg-neutral-700 text-neutral-300 rounded">UI/UX Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">Browse by Category</h2>
          <p className="text-neutral-600">Find opportunities that interest you</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {opportunityCategories.map((cat) => (
            <CategoryCard key={cat.name} {...cat} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-neutral-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-4">01</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Discover</h3>
              <p className="text-neutral-600">Find opportunities that match your interests and skills on our platform.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-4">02</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Connect</h3>
              <p className="text-neutral-600">Connect with people, organizations and other young professionals.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-4">03</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Grow</h3>
              <p className="text-neutral-600">Build skills and move closer to your career goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">Your next opportunity could be one search away</h2>
        <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
          Join thousands of young Rwandans building their careers on YouthHub.
        </p>
        <button onClick={() => navigate('/register')} className="btn-primary">
          Create Free Account
        </button>
      </section>
    </MainLayout>
  )
}

export default Home
