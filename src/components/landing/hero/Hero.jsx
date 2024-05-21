import React, { lazy } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { GoArrowUpRight } from "react-icons/go"
const Player = lazy(() => import('./Player'))

const Heading = styled.span`${tw`drop-shadow-2xl text-8xl font-black opacity-80`}
  font-family: 'Courier New', monospace;
  font-weight: 1000;
  text-shadow: 5px 5px, 5px 5px, 5px 5px;
  letter-spacing: 4px;
`

const SubHeading = styled.div`${tw`drop-shadow-xl text-lg font-bold opacity-70 max-w-96 my-10`}`
const Button = styled.button`${tw`flex justify-center gap-1 pt-4 my-10 drop-shadow-2xl w-56 h-14 font-bold text-2xl text-black`}`

const Hero = () => {
  return (
    <div className='grid grid-cols-2 px-10'>
      <div>
        <Heading>
          LIVE YOUR DAY WITH MUSIC
        </Heading>
        <SubHeading>
          Make your day more lively with a variety of music that suits your mood, and get premium like features at no cost.
        </SubHeading>
        <div className='flex'>
          <Button className='bg-[#CAFC00] shadow-xl shadow-[#CAFC00]'>GET PREMIUM <GoArrowUpRight size={30} /></Button>
          <Button className=''>TRY FOR FREE <GoArrowUpRight size={30} /></Button>
        </div>
      </div>
      <div className='relative w-auto h-auto'>
        <img className='drop-shadow-2xl' src='/icons/hero_person.png' alt="" />
        <Player />
      </div>
    </div>
  )
}
//TODO: FIX LAYOUT AND ADD SKELETON
export default Hero