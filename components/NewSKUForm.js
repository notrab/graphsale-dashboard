import { gql, graphql } from 'react-apollo'

// class SKUAttributeInput extends React.Component {
//   state = {
//     [this.props.attributeName]: ''
//   }
//
//   onChange = e => this.setState({ [e.target.name]: e.target.value })
//
//   render() {
//     return (
//       <input
//         type="text"
//         name={this.props.attributeName}
//         onChange={this.onChange}
//         placeholder={attributeName}
//       />
//     )
//   }
// }

class NewSKUForm extends React.Component {
  state = {
    attributes: []
  }

  handleSubmit = async e => {
    e.preventDefault()

    const newSKU = await this.props.submit({
      variables: {
        ...this.state,
        product: this.props.productId
      }
    })
  }

  handleSKUAttribute = e => {
    const newKeyValuePair = {
      [e.target.name]: e.target.value
    }

    const { attributes = [] } = this.state

    // this.setState({
    //   ...this.state,
    //   attributes: attributes
    //     ...attributes,
    //     {
    //       [e.target.name]: e.target.value
    //     }
    //   ]
    // })
    // const {attributes = []} = this.state

    // attributes.filter

    // attributes.reduce((result, [key, val]) => {...result, [key]: val}, {})

    // this.setState({
    //   // [e.target.name]: e.target.value
    //   attributes: [
    //     ...this.state.attributes,
    //     {}
    //   ]
    // })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          price{' '}
          <input
            name="price"
            type="number"
            placeholder="price"
            onChange={e =>
              this.setState({ price: parseInt(e.target.value, 10) })}
          />
        </label>

        {this.props.attributes.map((attr, index) =>
          <label key={index}>
            {attr}{' '}
            <input
              type="text"
              // name={`attributes[${attr}]`}
              name={attr}
              placeholder={attr}
              onChange={this.handleSKUAttribute}
            />
          </label>
        )}

        <button type="submit">Add SKU</button>
      </form>
    )
  }
}

const addMutation = gql`
  mutation createSKU($input: SKUInputType!) {
    createSKU(input: $input) {
      id
      price
    }
  }
`

export default graphql(addMutation, {
  name: 'submit'
})(NewSKUForm)
