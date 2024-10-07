import Main from '@/components/Main'
import Services from './services/page'
import About from './about/page'
import Whyus from './whyus/page'
import React from 'react'

import Experience from './experience/page'
import Contact from './contact/page'
import Gallery from './gallery/page'

export default function Home() {
  return (
    <div>
      
      <Main />
      <Services />
      <About />
      <Whyus />
      <Gallery />
      <Experience />
      <Contact/>
      
    </div>
  )
}

