import React from 'react'
import StudentHeader from '../Components/StudentComponents/StudentHeader'
import WhyForStudents from '../Components/StudentComponents/WhyForStudents'
import StudentUsps from '../Components/StudentComponents/StudentUsps'
import InterestingModules from '../Components/StudentComponents/InterestingModules'
import ModuleList from '../Components/StudentComponents/ModuleList'
import Outcomes from '../Components/StudentComponents/Outcomes'

const Students = () => {
  return (
    <div className='cera-light'>
      <StudentHeader />
      <WhyForStudents/>
      <StudentUsps/>
      <InterestingModules/>
      <ModuleList/>
      <Outcomes/>
    </div>
  )
}

export default Students