import React from 'react'
import { LinkPage } from './LinkPage'
import { Header } from './Header'

export const UserPage = () => {
  return (
    <div className="w-full px-2 md:px-0 py-5 min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <Header />
        <LinkPage />
      </div>
    </div>
  );
}
