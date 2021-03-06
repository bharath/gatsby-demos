import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogListing = () => {

	const data = useStaticQuery(graphql`

		query PostsQuery {
			allMdx(sort: {fields: frontmatter___date, order: DESC}) {
				nodes {
					id
					frontmatter {
						title
						excerpt
						slug
						date
					}
				}
			}
		}

	`);

	const posts = data.allMdx.nodes

	return (
		<Layout>
			<SEO title="Blog Posts" />
			<h1>Blog Posts</h1>
			<hr />
			{posts.map(({id, frontmatter: {
				title,excerpt, slug
			}}) => (
				<article key={id}>
					<h3><Link to={`/blog/${slug}`}>{title}</Link></h3>
					<p>{excerpt}</p>
				</article>

			))}
		</Layout>
	)

}

export default BlogListing