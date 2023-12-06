import React from 'react'


const ScrollNavigation = ({ sections }) => {
  return (
    <ul>
    {sections.map((section) => (
      <li key={section.id}>
        <a href={`#${section.id}`}>{section.title}</a>
      </li>
    ))}
  </ul>
  )
}

export default ScrollNavigation
