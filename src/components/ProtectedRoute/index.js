// Write your JS code here
import {Route, Redirect} from 'react-router-dom' //import route and redirect components
import Cookies from 'js-cookie' // import Cookies

// now passing as a props
const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token') // get the jwtToken from Cookies

  //if jwtToken is not defined then navigate to login Route
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} /> // else in other cases navigate to home/products/cart Routes using spread operator
}

export default ProtectedRoute
