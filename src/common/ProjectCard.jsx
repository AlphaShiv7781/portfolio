import React from 'react'

function ProjectCard({src ,link , alt , className , heading , paragraph}) {
  return (
    <a href={link} target='_blank'>
          <img className={className} src={src} alt={alt} />
          <h3>{heading}</h3>
          <p>{paragraph}</p>
          </a>
  )
}

export default ProjectCard