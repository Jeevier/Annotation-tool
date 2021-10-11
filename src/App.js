import List from './components/List/List'
import Annotation from './components/Annotation/Annotation'
import Labels from './components/Labels/Labels'
import State from './Context/State'

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

function App() {
  return (
  <State>
    <CssBaseline/>
    <Grid container style={{height: '100vh'}}>
    <Grid item xs={2} >
      <List/>
    </Grid>
    <Grid item xs={8}>
      <Annotation/>
    </Grid>
    <Grid item xs={2}>
      <Labels/>
    </Grid>
  </Grid>
  </State>
  );
}

export default App;
