import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import Spreadsheet from './components/Spreadsheet/Spreadsheet';

const App = () => (
  <div className="App">
    <Container>
      <Segment>
        <Spreadsheet />
      </Segment>
    </Container>
  </div>
);

export default App;
