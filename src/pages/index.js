import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'

const IndexPage = ({data}) => {

  return (
    <Layout>
      <SEO title="הפונג'ק" />
      <section className="hero">
        <Img fluid={data.coffeeShop.childImageSharp.fluid} className="hero-image" />
      </section>
      <section className="container">
        <span className="description">
          {data.strapiHomepage.topText}
        </span>
        <div className="gallery-grid">
          <Img fluid={data.latte.childImageSharp.fluid} className="gallery-img1" />
          <Img fluid={data.coffeeBags.childImageSharp.fluid} className="gallery-img2" />
          <Img fluid={data.coffeePortrait.childImageSharp.fluid} className="gallery-img3" />
        </div>
        <div className="about-grid">
          <h2> {data.strapiHomepage.mainTextTitle}</h2>
          <p>{data.strapiHomepage.mainTextContent}</p>
        </div>
      </section>
      <div className="parallax"></div>
      <section className="container">
        <Menu />
        <Instagram />
      </section>
      {typeof window !== 'undefined' &&
        <LeafletMap
          position={[31.982976, 34.953053]} // Your Coordinates
          zoom={18} // Zoom Level
          markerText={"הפונדק של ג'ק. בית נחמיה"} // Icon text
        />
      }
      <Footer />
    </Layout>
  )
}



export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "main.jpg" }) {
      ...fluidImage
    }
    coffeePortrait: file(relativePath: { eq: "img1.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "logo2.png" }) {
      ...fluidImage
    }
    coffeeBags: file(relativePath: { eq: "img3.jpg" }) {
      ...fluidImage
    }
    strapiHomepage {
      mainTextContent
      mainTextTitle
      topText
    }
  }

`;

export default IndexPage
