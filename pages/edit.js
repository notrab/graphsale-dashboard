import Layout from '../components/Layout'
import ProductPage from '../components/ProductPage'

export default ({ url: { query: { id } } }) =>
  <Layout>
    <ProductPage id={id} />
  </Layout>
