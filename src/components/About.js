import React from 'react'
import AboutItem from './AboutItem'
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

export default function About() {
  return (
    <div className="container">
      <AboutItem imgSource={image1} firstHeading="Create a notebook in inotebook-va." content="inotebook-va is a digital notebook that saves and syncs your work across devices from the web."/>
      <hr />
      {/* Swapping contentOrder and imgOrder for second AboutItem */}
      <AboutItem contentOrder={2} imgOrder={1} imgSource={image2} firstHeading="It all started with inotebook-va idea." mutedText="We all started in 2022." content="inotebook-va is an open-source web application developed by Vinay Araveti."/>
      <hr />
      <AboutItem imgSource={image3} firstHeading="Start taking notes." content="Login to your account. Enter title, description, tag, and click on add note button to add your notes. You can update or delete at any time."/>
      <hr />
      <AboutItem contentOrder={2} imgOrder={1} imgSource={image4} mutedText="Only you can access your account." firstHeading="Don't worry, your account is hack free." content="We used JWT authentication (HMAC Algorithm) with salt and pepper to add an extra security level for your account."/>
    </div>
  )
}