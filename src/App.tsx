import Home from "./components/Home"
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#1c1c1c] text-white">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <Home />
        </div>
      </div>
    </HelmetProvider>
  )
}

export default App
