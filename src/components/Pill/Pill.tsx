import { useState } from 'react';
import styled from 'styled-components';

const Pill = ({ text }: { text: string }) => {
const [hasHBlock, setHasHBlock] = useState(false);

const StyledPill = styled.div`
  border-radius: 4px;
  border: 1px solid #000;
  display: flex;
  padding: 4px;
  column-gap: 1px;
  align-items: center;
  white-space: nowrap;
  flex:0 1;
  &:hover{
      cursor: pointer;
  }
  margin-right: ${!hasHBlock? '16px':0};
  margin-left: 8px
`

const HBlock = styled.span`
width:max-content;
background-color:orange;
width:15px;
text-align:center;
border-radius:20%;
display: ${hasHBlock ? 'block' : 'none'};
`
    const toogleHBlock = (): void => {
        setHasHBlock(!hasHBlock);
    }

    return (
        <StyledPill onClick={toogleHBlock}><HBlock>H</HBlock>{text}</StyledPill>
    )
}
export default Pill;