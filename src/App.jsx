import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      
      
      <Sidebar />

      
      <main style={{ marginLeft: '260px', padding: '40px', width: '100%' }}>
        <h1>Welcome, Recruiter.</h1>
        <p>This is the start of a professional dashboard.</p>
        
        
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          border: '2px dashed #ccc', 
          borderRadius: '10px',
          color: '#888' 
        }}>
          [Grid Project Area]
        </div>

      </main>
      
    </div>
  )
}

export default App;