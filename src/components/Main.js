import React, { Component } from 'react'
import Web3 from 'web3'
import Token from '../abis/Token.json'
import BuyFrom from './BuyForm'
import SellFrom from './SellForm'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy',
    }
  }


  render() {
    let content
    if (this.state.currentForm === 'buy') {
        content = < BuyFrom 
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          buyTokens={this.props.buyTokens}
      />
    } else {
        content = < SellFrom 
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          sellTokens={this.props.sellTokens}
        />
    }
    return (
      <div id="content" className="mt-3">

      <div className="d-flex justify-content-between mb-3">
        <button 
          className="btn btn-light"
          onClick={(event) => {
            this.setState({ currentForm: 'buy' })
          }}
          >
          Buy
        </button>
        <span className="text-muted">&lt; &nbsp; &gt;</span>
        <button 
          className="btn btn-light"
          onClick={(event) => {
            this.setState({ currentForm: 'sell' })
          }}
          >
          Sell
        </button>
      </div>

        <div className="card mb-4" >
          <div className="card-body">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
