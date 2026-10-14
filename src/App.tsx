import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { getUsers, type User } from './api/users';
import { UsersPage } from './pages/UsersPage';
import { ProductReviewsPage } from './pages/ProductReviewsPage';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadUserList = () => {
    setLoading(true);
    getUsers().then((userList) => {
      if (userList) {
        setTimeout(() => {
          setUsers(userList.data);
        }, 10000);
      }
    }).finally(() => setLoading(false));
  };

  useEffect(() => {
    loadUserList();
  }, []);

  return (
    <Router>
      <div>
        <nav style={{ padding: '16px', borderBottom: '1px solid #ddd' }}>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              marginRight: '16px',
              color: isActive ? 'blue' : 'black',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Users
          </NavLink>
          <NavLink 
            to="/reviews" 
            style={({ isActive }) => ({
              color: isActive ? 'blue' : 'black',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Product Reviews
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={
            <section id="center">
              <div>
                <h1>Users list</h1>
              </div>
              <button
                type="button"
                className="counter"
                onClick={loadUserList}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load Users'}
              </button>
              <div style={{ display: 'grid', gap: '16px', marginTop: '20px' }}>
                {users.map((user) => (
                  <div key={user.id} style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
                    <img 
                      src={user.avatar?.[0]?.url || DUMMY_PICTURE} 
                      alt={user.firstName}
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>{user.email}</p>
                  </div>
                ))}
              </div>
            </section>
          } />
          <Route path="/reviews" element={<ProductReviewsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
