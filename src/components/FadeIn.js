import styled, { keyframes } from 'styled-components'

const fadeInAnimation = keyframes`
  to {
    opacity: 1;
  }
`

const FadeIn = styled.div`
  opacity: 0;
  animation: ${fadeInAnimation} 1.4s ease-in-out forwards 1.6s;
`

export default FadeIn
