import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './HomePage'
import Update from './updateForm'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  )
}

export default App