import styled from 'styled-components';
import Pill from '../Pill/Pill';

const PillsWrapper = styled.section`
display: flex;
flex-wrap: wrap;
row-gap: 15px;
`

const Pills = ({terms}:{terms:Array<string>}) => <PillsWrapper>{terms.map((term:string) => <Pill text={term}/>)}</PillsWrapper>

export default Pills;