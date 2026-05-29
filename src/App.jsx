
const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Connect with <span className="text-blue-600">Ease</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional video meetings, screen sharing, and team collaboration — all in one place
          </p>
          
          {/* CTA Buttons */}
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Start Meeting
            </button>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition shadow">
              Join Meeting
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🎥</div>
            <h3 className="text-xl font-semibold mb-2">HD Video</h3>
            <p className="text-gray-600">Crystal clear video quality for professional meetings</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">Chat & Collaborate</h3>
            <p className="text-gray-600">Real-time messaging and screen sharing</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-gray-600">End-to-end encryption for your privacy</p>
          </div>
        </div>

        {/* Meeting Info */}
        <div className="mt-20 bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-3 text-center">Quick Join</h3>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Enter meeting code" 
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App