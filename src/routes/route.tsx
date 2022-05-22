import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomeView = lazy(() => import('../pages/home/home.page'))

const RouterComponent = (): JSX.Element => {
  return (
    <Routes>
      {/* routes root */}
      <Route path="/" element={<HomeView />} />

      {/* route root */}
      <Route path="*" element={<HomeView />} />
    </Routes>
  )
}

export default RouterComponent
