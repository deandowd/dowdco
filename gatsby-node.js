const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsReview {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      }),
      result.data.allDatoCmsReview.edges.map(({ node: work }) => {
        createPage({
          path: `reviews/${review.slug}`,
          component: path.resolve(`./src/templates/review.js`),
          context: {
            slug: review.slug,
          },
        })
      })
      resolve()
    })
  })
}
