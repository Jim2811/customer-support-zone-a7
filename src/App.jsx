import { Suspense } from 'react'
import './App.css'
import ComplaintCards from './Components/ComplaintCards/ComplaintCards'
import Nav from './Components/Nav/Nav'
import PRCards from './Components/PRCards/PRCards'
function App() {
  const complaints = fetch('/complaint.json').then(r => r.json())
  return (
    <>
      <Nav></Nav>
      <main className='bg-[#f5f5f5]'>
        <PRCards></PRCards>
        <Suspense>
          <ComplaintCards complaints = {complaints}></ComplaintCards>
        </Suspense>
      </main>
    </>
  )
}

export default App
