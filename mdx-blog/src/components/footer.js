import React from "react"
import useSiteMetadata from "../hooks/user-sitemetadata"

const Footer = () => {
  const { title, description } = useSiteMetadata()

  return (
    <footer>
      <hr />
      <p>
        Copyright 2020 {title} - {description}
      </p>
    </footer>
  )
}

export default Footer