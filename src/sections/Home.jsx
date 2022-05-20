import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'

const Section = styled.section`
  position: relative;
  min-height:200vh;
  overflow:hidden ;
` 

const Home = () => {
  return (
    <Section>
     <CoverVideo/>
      <h1>LOGO</h1>
      <h1>NAVBAR</h1>
    </Section>
  )
}

export default Home