import React from 'react'
import Carousel from './Carousel'
import { v4 as uuidv4 } from "uuid";
import Card from './ProjectCards';
import ProjectImg1 from '../Assets/Project1 Demo.png'

const Projects = () => {

  let cards = [
    {
      key:uuidv4(),
      content:(
        <Card serialNo="01" projectInfo="The purpose of this website is to provide users with a collection of recipes , cooking tips and food related information . The goal is to inspire and assist users in the kitchen.The technology used is MERN stack" image={ProjectImg1}/>
      )
    },
    {
      key:uuidv4(),
      content:(
        <Card serialNo="02"/>
      )
    },
    {
      key:uuidv4(),
      content:(
        <Card serialNo="03"/>
      )
    },
    {
      key:uuidv4(),
      content:(
        <Card serialNo="04"/>
      )
    },
    {
      key:uuidv4(),
      content:(
        <Card serialNo="05"/>
      )
    },
  ]

  return (
    <>
    <div className='overflow-hidden bg-custom-brown'>
      <div className='flex justify-center items-center flex-col h-[100vh]'>
      <h1 className='font-herofont text-3xl font-semibold text-center pt-10'>My Work</h1>
        <Carousel
          cards={cards}
          height="500px"
          width="30%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
      </div>
    </>
  )
}

export default Projects
