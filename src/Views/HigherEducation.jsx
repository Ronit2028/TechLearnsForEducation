import React from 'react'
import HEheader from '../Components/HigherEducationComponents/HEheader'
import DesignYourFuture from '../Components/HigherEducationComponents/DesignYourFuture'
import HEAccordion from '../Components/HigherEducationComponents/HEAccordion'
import HowDoesItWork from '../Components/HigherEducationComponents/HowDoesItWork'
import TechLearnsFeatures from '../Components/HigherEducationComponents/TechLearnsFeatures'
import WhyTechLearnsForCampuses from '../Components/HigherEducationComponents/WhyTechLearnsForCampuses'
import BringAll from '../Components/HigherEducationComponents/BringAll'

const HigherEducation = () => {
  return (
    <div>
      <HEheader />
      <DesignYourFuture />
      <HowDoesItWork/>
      <TechLearnsFeatures/>
      <WhyTechLearnsForCampuses/>
      <BringAll/>
    </div>
  )
}

export default HigherEducation