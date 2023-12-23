import React from 'react'
import SchoolHeader from '../Components/SchoolComponents/SchoolHeader'
import SchoolCommunicationSuite from '../Components/SchoolComponents/SchoolCommunicationSuite'
import SchoolCarousel from '../Components/SchoolComponents/SchoolCarousel'
import SchoolListComponent from '../Components/SchoolComponents/SchoolListComponent'
import SchoolWebinar from '../Components/SchoolComponents/SchoolWebinar'

const Schools = () => {
  return (
    <div>
      <SchoolHeader/>
      <SchoolCommunicationSuite/>
      <SchoolCarousel/>
      <SchoolListComponent/>
      <SchoolWebinar/>
    </div>
  )
}

export default Schools