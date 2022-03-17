import React from 'react'
import AboutItem from './AboutItem'
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

export default function About() {
  return (
    <div className="container">
      <AboutItem imgSource={image1} firstHeading="Create a notebook in inotebook-va." content="inotebook-va is a digital notebook that saves and syncs your work across devices from the web."/>
      <hr />
      {/* Swapping contentOrder and imgOrder for second AboutItem */}
      <AboutItem contentOrder={2} imgOrder={1} imgSource={image2} firstHeading="It all started with inotebook-va idea." mutedText="We started in 2022." content="inotebook-va is a free open-source web application which was developed by Vinay Araveti."/>
      <hr />
      <AboutItem imgSource={image3} firstHeading="Start taking notes." content="Login to your account. Enter title, description, tag and click on add note button to add your notes. You can update or delete your note at any time."/>
    </div>
  )
}