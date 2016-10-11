import React from 'react'

const Course = ({name, onClick,logo}) => {
  return (<div className='course' data-course={name} onClick={onClick}>
  	<img src={logo} alt={name} />
  	{name}
  </div>)
}

export default Course
