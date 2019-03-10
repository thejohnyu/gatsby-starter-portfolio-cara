import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/linkedin-profile1.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm John Yu.
        </BigTitle>
        <Subtitle>I'm creating the best web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="How to use GatsbyJS with Web Audio API's."
            link="http://redraidermusic.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project is my entry into Web Audio API.
          </ProjectCard>
          <ProjectCard
            title="How to build RESTful NodeJS API's."
            link="https://www.nodejsrestful.com"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This project includes NodeJS/ExpressJS/MongoDB.
          </ProjectCard>
          <ProjectCard
            title="How to build RESTful GraphQL API's."
            link="https://www.graphqlrestful.com"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This project is a introduction to GraphQL API's.
          </ProjectCard>
          <ProjectCard
            title="How to Build a Highly Scaleable React / Redux Ecommerce Website."
            link="https://www.reactreduxecom.com"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy ecommerce website built with modern web technologies.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>- Frontend Engineer - Greater Boston Area</AboutSub>
        </AboutHero>
        <AboutDesc>
          I am passionate about creating engaging, exciting user experiences and applications by utilizing modern
          frameworks and technology--with an emphasis on modularized, component-driven, functional programming. More
          importantly, I have extremely strong information gathering and research skills, which helps me quickly find
          and analyze tools I need to get my job done.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:johnyu.programmer@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/johnyu-programmer/">Linkedin</a> &{' '}
            <a href="https://github.com/thejohnyu">Github</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
