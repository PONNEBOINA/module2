import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
