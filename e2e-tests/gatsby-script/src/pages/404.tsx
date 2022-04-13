import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const NotFoundPage = () => {
  return (
    <main>
      <title>404</title>
      <h1>404</h1>
      <Link to="/">Back to index</Link>
    </main>
  )
}

export default NotFoundPage
