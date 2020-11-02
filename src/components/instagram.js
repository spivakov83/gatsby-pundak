import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';


const Instagram = () => {
  const data = useStaticQuery(graphql`
  query {
    allInstaNode(
      limit:6,
      sort: {
        fields: [timestamp]
        order: [DESC]
      }
    ) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          localFile {
            childImageSharp {
              fixed(width: 280, height: 280) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  `)
  const instaPosts = data.allInstaNode.edges;
  return (
    <div className="insta">
      <h2>INSTAGRAM</h2>
      <span>@hapunjack</span>
      <ul className="insta-posts">
          {instaPosts.map(({ node }) => {
            return (
              <li key={node.id} className="insta-post">
                <Img fixed={node.localFile.childImageSharp.fixed} />
                <div className="overlay">
                  <img className="icon" src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCR0XLBDOiOCAAAADBElEQVRo3uWYS0hUYRiG3/9oms4izOgiUlBEpWWRtCm6WQhuAokio10t2lRCF4qCbBPtotpJRBC1KlxE0KY20U2KTJEsijIqU3Q0RdO8PC1GTc2ZOefMzPmh3u3wfs/7zfnPN/980v8uE/0jclWkRQqpXx36ojoz5L4sM7RGecpVhvrUrAYT9pSKPM7wihEmqof7VJAR1xtiPw/oneQd5iWnmO8OPpvL9BNNrRzEierN4ixdUb39XCQnHr6MFuLpOUum9W7lY1zvV0pj4Y8zHLcEQDub//JWMujKO0RlNPxpVwUi+smmSd5zHrxwcjp8+ZRDF0+dFI57D3tywgg7puKXxjg80dTITEmimF+evZ2TzhGGWs8lAM5LZPPOl/cJf2YQu3yVgH7yOebTC+Vj+HSafBe5RqtvbyNpkQA7fZdIVOWSI6nC1YhMhXZLhpBaFbIUoE9zHZVaw0vZKnG02hpeklY7KrAaoNB2gJWGLs2yGKDTMKh0iwEGHfVaxEs9jjqsBgg7emM1wBtH9VYD1Dt6ZTVAnSFXbXISr+RLw5rnmA7VWuv/melwJN2yFuCmZCTm6IsyLeB/Kt+EHcm064aV/q+b8Oi/Y5apUWkB44e0wryPXMlk3upa4P1Xm/fS+H6A+WoK9FexU8tNm6SxCWC+62ig/VdG8BOE4W5g1/GaP9wJKxpy9EKLA+i+WWujrGwoJJzy7rsoihGOLfSlFN/LxjjfD5voTiF+m4tHxIYUPYh21rs8JRTwOen4Tyz3cFDJoz6p+AbyPb4rzOZx0vAP8TNlCXEvKfjbkV2SnwjpXE0Yf4lELnwYLiQAH+FEAvDxEEdc7k+naoA9ScBLEvt8bAK7Y26FPUfY7nE+fmNNEvGSxDraXOMbWZhkvCSxgmZX+KfMSQFekljA67j4GrJShJckcngUE38lobfeVYRM7kSBj1CVYvhohDSqp8EPciAQvCRhqJqC76EsMPxoiEMT5mMLxQHjJYm9DADwgaUW8JJECT+oZa4lvCSximyL+H9CvwE30LN435nsjQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOS0yOVQyMzo0NDoxNiswMDowMEn6UPQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDktMjlUMjM6NDQ6MTYrMDA6MDA4p+hIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==`} alt="like icon"/>
                  <p className="text">{node.likes}</p>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Instagram;