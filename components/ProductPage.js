import { gql, graphql } from 'react-apollo'
import Link from 'next/link'
import NewSKUForm from './NewSKUForm'

const ProductPage = ({ data: { loading, error, Product } }) => {
  if (error) return <p>Sorry something went wrong.</p>

  if (Product) {
    return (
      <section>
        <h1>
          {Product.name}
        </h1>

        <h2>Inventory</h2>
        {Product.skus.map((sku, index) =>
          <div key={index}>
            <span>
              {sku.id} &mdash;
            </span>
            <span>
              {Product.attributes.map((attr, index) =>
                <span key={index}>
                  {sku.attributes && sku.attributes[0][attr]}
                </span>
              )}
            </span>
          </div>
        )}

        <NewSKUForm productId={Product.id} attributes={Product.attributes} />
      </section>
    )
  }

  return <p>Loading...</p>
}

const Product = gql`
  query Product($id: ID!) {
    Product(id: $id) {
      id
      name
      skus {
        id
        attributes
      }
      attributes
      meta
    }
  }
`

export default graphql(Product, {
  options: ({ id }) => ({ variables: { id } })
})(ProductPage)
