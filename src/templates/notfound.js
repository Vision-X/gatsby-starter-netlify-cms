import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const NotFoundTemplate = ({
  title,
  image,
  content,
  contentComponent,
}) => {
  image = image || {}
  const PageContent = contentComponent || Content

  return (
    <div className="content">
      <div
        className="full-width-image-container-2 margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1 title-h2"
          style={{
            // boxShadow:
              // 'rgba(0, 73, 131, 0.90) 0.5rem 0px 0px, rgba(0, 73, 131, 0.90) -0.5rem 0px 0px',
            backgroundColor: 'rgba(0, 73, 131, 0.70)',
            backgroundPosition: `20% center`,
            backgroundAttachment: `fixed`,
            padding: '0.50em',
            color: 'white',
            padding: '1rem',
          }}
        >
          {title}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const NotFound = () => {
  return (
    <Layout>
      <NotFoundTemplate />
    </Layout>
  )
}

export default NotFound
