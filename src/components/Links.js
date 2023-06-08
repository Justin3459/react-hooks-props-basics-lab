import React from 'react'
import About from './About'

function Links({github, linkedin}) {
  return (
    <>
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
    </>
  )
}

export default Links