import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for touchless delivery"
        backgroundImg="Images/model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory" />
      <Section
        title="Model X"
        description="Order online for touchless delivery"
        backgroundImg="Images/model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order online for touchless delivery"
        backgroundImg="Images/model-y.jpg" 
        leftButtonText="Custom Order" 
        rightButtonText="Existing Inventory" 
      />
      <Section
      title="Solar Panel"
      description="Lowest Cost Solar Panels in America"
      backgroundImg="Images/solar-panel.jpg"
      leftButtonText="Order Now"
      rightButtonText="Learn More"
      />
      <Section
      title="Solar Roof"
      description="Produce Clean Energy & Add Value to Your Home"
      backgroundImg="Images/solar-roof.jpg"
      leftButtonText="Order Now"
      rightButtonText="Learn More"
      />
      <Section
      title="Accessories"
      description="Upgrade your Tesla experience"
      backgroundImg="Images/accessories.jpg"
      leftButtonText="Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh;
`
