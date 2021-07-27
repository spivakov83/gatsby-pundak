import React, {useEffect} from "react"
import {graphql} from 'gatsby'


const IndexPage = () => {
  useEffect(() => {
    window.location.href = "https://hapunjack.com";
  })
  return (
    <>
      <div className="moved-container">
        <div>
          <h1>
            מיד תועברו לאתר החדש...
          </h1>
        </div>
      </div>
      <div className="moved-link">
        <a href="https://hapujack.com">
          לאתר החדש
        </a>
      </div>
    </>
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
    logo: file(relativePath: { eq: "logo2.png" }) {
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
