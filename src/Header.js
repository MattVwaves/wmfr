import './App.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <Link to={'/'}>
          <img src={require('./WMFR.png')} alt="WMFR"></img>
        </Link>
        <h1>Music Composition + Production</h1>
        <nav className="home-nav">
          <h2 className="nav-item" id="music">
            <Link
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
                backgroundColor: 'inherit',
              }}
              to={'/music'}
            >
              Music
            </Link>
          </h2>
          <h2 className="nav-item">
            <Link
              style={{
                color: 'inherit',
                textDecoration: 'inherit',
                backgroundColor: 'inherit',
              }}
              to={'/contact'}
            >
              Contact
            </Link>
          </h2>
        </nav>
      </header>
    </>
  );
}
