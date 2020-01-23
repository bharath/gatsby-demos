import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (

	<Layout>
		<SEO title="Welcome to our Site!" />
		<h1>Hello World</h1>
		<p>
			Read more <Link to={"/about"}>about me</Link>
		</p>
	</Layout>

)