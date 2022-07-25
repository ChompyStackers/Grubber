import React, { Component } from 'react'
import { Spinner } from 'reactstrap';

export default class NotFound extends Component {
  render() {
    return (
          <div className='homeCardContainer' id='notFound'>
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
