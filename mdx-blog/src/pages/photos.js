import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Photos = () => {

	const data = useStaticQuery(graphql`
		query Images {
			images: allFile( filter: { relativeDirectory: { eq: "gallery" }}) {
				nodes {
					id
					childImageSharp {
						fixed (
							width: 200, height: 200
						)	{
							...GatsbyImageSharpFixed
						}
					}
				}
			}
			image: file(relativePath: {eq: "brandon-green.jpg"}) {
				id
				childImageSharp {
					fixed (
						width: 400
						duotone: { highlight: "#ffffff", shadow: "#222222" }
					)	{
						...GatsbyImageSharpFixed
					}
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	console.log(data)

	return (

		<Layout>
			<SEO title="Working with Gatsby Image" />
			<Img fixed={data.image.childImageSharp.fixed} alt="Big tree with big roots" />
			<Img fluid={data.image.childImageSharp.fluid} alt="Big tree with big roots" />
			<h1>Photos</h1>

			<div class ClassName="gallery">
				{data.images.nodes.map(image => (
					<Img key={image.id} fixed={image.childImageSharp.fixed} />
				))}
			</div>
		</Layout>

	)
}

export default Photos;