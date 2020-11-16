import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Metugan = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiMenuItem(
        filter: { menu_category: { slug: { eq: "metugan" } } }
      ) {
        edges {
          node {
            title
            id
            price
            menu_category {
              title
            }
          }
        }
      }
    }
  `)

  const items = data.allStrapiMenuItem.edges
  return (
    <div>
      <p className="sample">
        <strong>{items[0].node.menu_category.title}</strong>
      </p>
      <ul className="menu-items-grid">
        {items.map(({ node }) => {
          return (
            <li key={node.id} className="menu-item">
              <h3>{node.title}</h3>
              <span>₪{node.price}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Metugan
