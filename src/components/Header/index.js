// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/products">
        <li>Products</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
      </Link>
      <button type="button">Logout</button>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </button>
    </ul>
  </div>
)
export default Header
