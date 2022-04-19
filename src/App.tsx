import { Suspense } from 'react'
import RouterComponent from './routes/route'
import NavBar from './components/navbar/navbar.component'
import FooterComponent from './components/footer/footer.component'
import {
  CircularProgress,
  Backdrop,
} from './helpers/imports/material-ui.imports'

const SimpleBackdrop = (): JSX.Element => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<SimpleBackdrop />}>
      <NavBar />
      <RouterComponent />
      <FooterComponent />
    </Suspense>
  )
}

export default App
