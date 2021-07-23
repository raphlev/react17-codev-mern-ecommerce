import React, {Suspense, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import ReactNotification from 'react-notifications-component'
import styled from 'styled-components'
import 'react-notifications-component/dist/theme.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import 'react-toastify/dist/ReactToastify.css'
import HomeScreen from './screens/HomeScreen'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import LoadingSpinner from './components/Spinner/LoadingSpinner'

const Grid = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`

const Centered = styled.div`
  margin: 3rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const Main = styled.main`
  grid-area: main;
`

const ProductDetailsScreen = React.lazy(() => import('./screens/ProductDetailsScreen'));
const Cart  = React.lazy(() => import( './screens/CartScreen'));
const ShippingScreen = React.lazy(() => import( './screens/ShippingScreen'));
const PaymentScreen  = React.lazy(() => import( './screens/PaymentScreen'));
const PlaceOrderScreen  = React.lazy(() => import( './screens/PlaceOrderScreen'));
const OrderScreen  = React.lazy(() => import( './screens/OrderScreen'));
const LoginScreen  = React.lazy(() => import( './screens/LoginScreen'));
const RegisterScreen  = React.lazy(() => import( './screens/RegisterScreen'));
const ProfileScreen  = React.lazy(() => import( './screens/ProfileScreen'));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ReactNotification />
      <Grid>
        <Navigation />
        <Main>
        <Suspense
        fallback={
          <Centered>
            <LoadingSpinner />
          </Centered>
        }
        >
          <Switch>
            <Route path='/products/:id'component={ProductDetailsScreen} />
            <Route path='/cart/:id?' component={Cart} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/orders/:id' component={OrderScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route exact path='/' component={HomeScreen} />
          </Switch>
        </Suspense>
          
        </Main>
        <Footer />
      </Grid>
      <ToastContainer autoClose={2500} />
    </>
  )
}

export default App
