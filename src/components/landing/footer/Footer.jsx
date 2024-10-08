import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`
  ${tw`w-screen mt-10 mb-5 text-center`}
`
const Heading = styled.div`
  ${tw`text-lg font-bold mb-2 flex justify-center`}
`
const SubHeading = styled.div`
  ${tw`text-sm mr-2`}
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Container>
      <Heading>
        <div>Crafted By</div>
        <a
          href='https://github.com/samay15jan'
          target='_blank'
          rel='noreferrer'
          className='hover:text-[#828284] ml-2'
        >
          Samay Kumar ! 😎 ⚡
        </a>
      </Heading>
      <SubHeading>{year} © All rights reserved</SubHeading>
    </Container>
  )
}

export default Footer
