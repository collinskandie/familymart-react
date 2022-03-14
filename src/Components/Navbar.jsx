import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60px;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center; 
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border:1px solid grey;
display: flex;
align-items: center;

`
const Centre= styled.div`
flex: 1;
`
const Right = styled.div`
flex: 1;
`
// const Wrapper = styled.div``
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

function Navbar() {
    return (
        <Container>
        <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            input
            <Search/>
          </SearchContainer>
        </Left>
        <Centre>Centre</Centre>
        <Right>Right</Right>
        </Wrapper>             
        </Container>
    )
}

export default Navbar