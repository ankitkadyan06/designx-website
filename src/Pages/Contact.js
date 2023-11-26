import React from 'react'
import "../Components/Assets/CSS/Contact.css"
import HeaderDemo from '../Components/Common/HeaderDemo'
import SubmitForm from '../Components/Contact/SubmitForm'
import ClientsTrust from '../Components/Contact/ClientsTrust'
const Contact = () => {
  return (
    <div className='contactUsBackground w-full h-[100%]'>
      <HeaderDemo/>
      <SubmitForm/>
      <ClientsTrust/>
    </div>
  )
}

export default Contact
