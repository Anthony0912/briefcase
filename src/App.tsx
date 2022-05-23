import { Suspense } from 'react'
import RouterComponent from './routes/route'
import NavBar from './components/navbar/navbar.component'
import FooterComponent from './components/footer/footer.component'
import {
  Backdrop,
} from './helpers/imports/material-ui.imports'
import { ToastContainer } from 'react-toastify'

const SimpleBackdrop = (): JSX.Element => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <div className="loader">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </Backdrop>
  )
}

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<SimpleBackdrop />}>
      <NavBar />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterComponent />
      <FooterComponent />
    </Suspense>
  )
}

export default App
