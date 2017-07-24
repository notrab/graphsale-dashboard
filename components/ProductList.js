import { gql, graphql } from 'react-apollo'
import Link from 'next/link'

const ProductList = ({
  data: { loading, error, allProducts, _allProductsMeta }
}) => {
  if (error) return <p>Sorry something went wrong.</p>

  if (allProducts && allProducts.length) {
    return (
      <section>
        {allProducts.map((product, index) =>
          <div key={index}>
            <span>
              <Link href={{ pathname: '/edit', query: { id: product.id } }}>
                <a>
                  {product.name}
                </a>
              </Link>
            </span>
            <span>
              {product.id}
            </span>
            <span>
              {product.skus.length}
            </span>
          </div>
        )}
      </section>
    )
  }

  return <p>Loading...</p>
}

const allProducts = gql`
  query allProducts {
    allProducts {
      id
      name
      skus {
        id
      }
    }
    _allProductsMeta {
      count
    }
  }
`

export default graphql(allProducts)(ProductList)
