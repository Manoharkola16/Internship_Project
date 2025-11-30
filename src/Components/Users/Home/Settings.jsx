

import React from 'react'
import Navbar from './Navbar'

const Settings = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <div className="flex h-screen w-full">
        <Navbar />

        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold mb-4">Settings</h1>
          <p className="text-sm text-gray-600">Manage your account settings here.</p>
        </main>
      </div>
    </div>
  )
}

export default Settings
