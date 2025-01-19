import { Metadata } from "next";

export const metadata: Metadata = {
title: "About us",
description: "About NextSpace"
}

const About = () => {
  return (
    <main className='m-6'>
        <h1>About</h1>
        <p>We are a social media company!</p>
    </main>
  )
}

export default About;