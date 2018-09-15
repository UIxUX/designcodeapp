import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design & code React apps</h1>
        <p>
          Learn React and build the best apps you can imagine with this amazing
          course.
        </p>

        <p>Now go build something great.</p>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
