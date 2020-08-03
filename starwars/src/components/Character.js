// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    background: green;
    width: 300px;
    max-height: 100px;
    margin-bottom: 20px;
`

const Name = styled.h2`
    font-size: 1rem;
    text-align: center;
    color: white;
`

const Birth = styled.h3`
    font-size: .75rem;
    text-align: center;
    color: white;
`

function Character(props) {


    const {charData} = props;
    
    // console.log(charData)

      return (


          charData.map((item, index) => {
            return (
            <Wrapper key={index}>
                <Name>{item.name}</Name>
                <Birth>D.O.B: {item.birth_year}</Birth>                
            </Wrapper>

          )})
        
      );
    };
    
    
    export default Character;

