import React from 'react'
import InvoicePage from './components/InvoicePage'

function App() {
  return (
    <div className="app">
      <h1 className="center fs-30">SoFriendly Invoice Generator</h1>
      <p className="left fs-10">Quickly generate invoices from us, to you, at SoFriendly. We often don't have time to generate invoices but we know how important it is for you to have copies for taxes and compliance. So, go ahead, generate your own and download the PDF.</p>
      <InvoicePage />
    </div>
  )
}

export default App
