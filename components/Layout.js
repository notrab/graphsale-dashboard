import withData from '../lib/withData'

const Layout = ({ children }) =>
  <div>
    <h1>Dashboard</h1>

    {children}
  </div>

export default withData(Layout)
