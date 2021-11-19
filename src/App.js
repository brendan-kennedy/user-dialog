import * as React from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar.js";
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import RuleGeneric from "./components/RuleGeneric.js";
import RuleLightning from "./components/RuleLightning.js";
import { Routes, Route} from "react-router-dom";
import {Link} from 'react-router-dom'
import SmokePlume from "./components/modal_templates/SmokePlume.js";
import Lightning from "./components/modal_templates/Lightning.js";
import AttachedAnvil from "./components/modal_templates/AttachedAnvil.js";
import DetachedAnvil from "./components/modal_templates/DetachedAnvil.js";
import DisturbedWeather from "./components/modal_templates/DisturbedWeather.js";
import Tribo from "./components/modal_templates/Tribo.js";
import CumulusCloud from "./components/modal_templates/CumulusCloud.js";
import DebrisCloud from "./components/modal_templates/DebrisCloud.js";
import Sefm from "./components/modal_templates/Sefm.js";
import ThickCloud from "./components/modal_templates/ThickCloud.js";





function App() {


 





  return (
 
    <div>
      <header>
        <ButtonAppBar />
      </header>
      <body>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/* <RuleLightning /> */}
            </Grid>
            {/* <Grid item xs={2}>
              <RuleGeneric />
            </Grid>
            <Grid item xs={2}>
              <RuleGeneric />
            </Grid>
            <Grid item xs={2}>
              <RuleGeneric />
            </Grid>
            <Grid item xs={2}>
              <RuleGeneric />
            </Grid>
            <Grid item xs={2}>
              <RuleGeneric />
            </Grid>
            <Grid item xs={2}>
              <RuleGeneric />
            </Grid>
            <Grid item xs={2}>
              <RuleGeneric />
            </Grid>
            <Grid item xs={2}>
              <RuleGeneric />
            </Grid>
            <Grid item xs={2}>
              <RuleGeneric />
            </Grid> */}
          </Grid>
        </Box>

        {/* <div>HOME</div>   */}
      </body>

    <Routes> 
      <Route path="/lightning" exact element={<Lightning/>} />
      <Route path="/smokeplume" exact element={<SmokePlume/>} />
      <Route path="/tribo" exact element={<Tribo/>} />
      <Route path="/cumulus" exact element={<CumulusCloud/>} />
      <Route path="/detached" exact element={<DetachedAnvil/>} />
      <Route path="/attached"exact element={<AttachedAnvil/>} />
      <Route path="/disturbed" exact element={<DisturbedWeather/>} />
      <Route path="/debris" exact element={<DebrisCloud/>} />
      <Route path="/sefm" exact element={<Sefm/>} />
      <Route path="/thick" exact element={<ThickCloud/>} />
    </Routes>

</div>


  );
}



export default App;
