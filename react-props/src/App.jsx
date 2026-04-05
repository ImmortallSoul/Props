import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <ProfileCard 
        name="Іван Франко" 
        photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
        description="Український поет, прозаїк, драматург, літературний критик, публіцист, перекладач, науковець, громадський і політичний діяч."
      />
    </div>
  );
}

export default App;