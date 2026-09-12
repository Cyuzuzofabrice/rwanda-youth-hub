import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-base mb-3">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/opportunities" className="text-neutral-400 hover:text-white transition">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link to="/skill-swap" className="text-neutral-400 hover:text-white transition">
                  Skill Swap
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-neutral-400 hover:text-white transition">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-neutral-400 hover:text-white transition">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-3">Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/login" className="text-neutral-400 hover:text-white transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-neutral-400 hover:text-white transition">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-neutral-400 hover:text-white transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-base mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">© {currentYear} YouthHub. All rights reserved.</p>
          <p className="text-neutral-400 text-sm">Rwanda Youth Opportunity Platform</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
