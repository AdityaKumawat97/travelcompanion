import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { CssBaseline, Grid } from "@material-ui/core";
function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4} style={{ border: "1px solid black" }}>
          <List />
        </Grid>
        <Grid item xs={12} md={8} style={{ border: "1px solid black" }}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
