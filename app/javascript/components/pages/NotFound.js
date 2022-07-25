import React, { Component } from 'react'
import { Spinner } from 'reactstrap';

export default class NotFound extends Component {
  render() {
    return (
          <div className='homeCardContainer' id='notFound'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className='notFoundContainer'>THIS IS NOT THE GRUB YOU ARE LOOKING FOR...
              <div>
                <Spinner>
                  Loading...
                </Spinner>
              </div>
            </div>
          </div>
    )
  }
}
