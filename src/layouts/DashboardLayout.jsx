import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DashboardLayout
