const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/inicio",
    redirectInBrowser: true,
    isPermanent: true,
  })
  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            title
            content
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            title
            content
            date(formatString: "MMMM DD, YYYY")
            featured_media {
              source_url
            }
            template
            format
          }
        }
      }
      allWordpressWpPortfolio {
        edges {
          node {
            title
            content
            slug
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressWpPortfolio,
  } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: edge.node,
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: edge.node,
    })
  })
  // All Portfolio posts
  const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressWpPortfolio.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}/`,
      component: slash(portfolioTemplate),
      context: edge.node,
    })
  })
}
