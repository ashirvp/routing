import User from './Container/User';
import Profile from './Container/Profile';
import About from './About';
import { Route, Routes, useNavigate } from 'react-router-dom'
function App() {

  const navigate = useNavigate()
  return (
    <div className='App'>
      <button onClick={()=>navigate('profile')}>Profile</button>
      <button onClick={()=>navigate('user')}>User</button>
      <button onClick={()=>navigate('about')}>About</button>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="user" element={<User />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
