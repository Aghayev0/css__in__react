import styled from "styled-components";


export const Ilan = styled.button`
/* Adapt the colors based on primary prop */
  background-color: ${props => props.clr};
  color: ${props => props.isActive === true ? 'green': 'red'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const MyDiv= styled.div`
background-color: red;
`


  function App() {
  return (
    <MyDiv >
      <Ilan clr={'red'} isActive={true} >Slaam</Ilan>
      <Ilan clr={"blue"} isActive={false}>Necesen</Ilan>
    </MyDiv>

  );
}

export default App;
