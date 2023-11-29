import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Exchange extends Component {
  state = {
    sub: false,
  }

  submitting = () => {
    this.setState({sub: true})
  }

  submitForm = async event => {
    event.preventDefault()

    this.submitting()
  }

  render() {
    const {sub} = this.state
    return (
      <>
        <Header />
        <form className="cart-container">
          <label className="input-label" htmlFor="prevhos">
            Enter your previous Hostel
          </label>
          <input type="text" id="prevhos" className="username-input-field" />
          <label className="input-label" htmlFor="prevnum">
            Enter your previous Room Number
          </label>
          <input type="text" id="prevnum" className="username-input-field" />
          <label className="input-label" htmlFor="toExchange">
            Enter the hostel to exchange
          </label>
          <input type="text" id="toExchange" className="username-input-field" />
          <label className="input-label" htmlFor="toExchangeroom">
            Enter the Room to exchange
          </label>
          <input
            type="text"
            id="toExchangeroom"
            className="username-input-field"
          />
          <button
            className="submit-cart-button"
            type="button"
            onClick={this.submitForm}
          >
            Submit
          </button>
          {sub && <p>Your request is submitted</p>}
        </form>
      </>
    )
  }
}

export default Exchange
