import React from 'react'
import HeaderDemo from '../Components/Common/HeaderDemo'
import UseCasesHero from '../Components/Use Cases/UseCasesHero'
import UseCasesData from '../Components/Use Cases/UseCasesData'

const UseCases = () => {
  return (
    <div className='pt-[70px] bg-[#01071B] h-[100%]'>
        <HeaderDemo/>
        <UseCasesHero/>
        <UseCasesData/>
    </div>
  )
}

export default UseCases
