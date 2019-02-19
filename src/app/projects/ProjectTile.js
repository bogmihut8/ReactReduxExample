import React from 'react'

const ProjectTile = ({ className, title, subtitle  }) => (
  <article className={className}>
    <p className="title">{title}</p>
    <p className="subtitle">{subtitle}</p>
  </article>
)

export default ProjectTile