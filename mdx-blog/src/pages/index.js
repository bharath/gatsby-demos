import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import gatsbyAstronaut from "../images/gatsby-astronaut.png"

export default () => (

	<Layout>
		<SEO title="Welcome to our Site!" />
		<h1>Hello World</h1>
		<img src={gatsbyAstronaut} alt="A Gatsby Astronaut" style={{width: `200px`}}/>
		<p>
			Read more <Link to={"/about"}>about me</Link>
		</p>
	</Layout>

)