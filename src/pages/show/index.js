import React from 'react'

import Layout from '../../components/Layout'
import ShowRoll from '../../components/ShowRoll'

export default class ShowIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/MB-2780-XL.jpg')`,
            backgroundPosition: `center`,
            backgroundAttachment: `fixed`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1-desktop is-size-3-touch is-size-4-mobile"
            style={{
              // boxShadow:
              //   'rgba(0, 73, 131, 0.90) 0.5rem 0px 0px, rgba(0, 73, 131, 0.90) -0.5rem 0px 0px',
              backgroundColor: 'rgba(0, 73, 131, 0.70)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Upcoming Shows
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ShowRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
