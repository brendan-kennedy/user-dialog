import React from 'react';
import Box from "@mui/material/Box";
import {useState, useEffect } from 'react';
import Switch from "../Switch.js";

// import Box from '@mui/material/Box';
// import {useState, useEffect } from 'react';
// import { Link } from "react-router-dom";


function SmokePlume() {

        useEffect(() => {
                fetchResults();
            }, []);
            
            const [results, setResults] = useState ([]);
            
            const fetchResults = async () => {
                const data = await fetch(
                    "http://localhost:8080/rules/smoke"
                );
            
                const results = await data.json();
                console.log(results[0].constraint_name);
                setResults(results);
            ///sskk
                };




    return (
        <div>
        {results.map(result => (
          
            <h1>
              {console.log(result)}
                {/*hi bob*/}
              <Box>
               
                {<Box> {result.constraint_name} </Box>}

                     <Box> <Switch/></Box> 
                     
              </Box>
                

            </h1>
            //ssssshhhh
        ))}s
    </div>
  );
}
  
  
  export default SmokePlume;