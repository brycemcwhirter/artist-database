import React from 'react'
import InstaFeed from './InstaFeed'
import Songs from './Songs'
import Bio from './Bio'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'

export default function RequestScreen() {
  // Todo Fix Styles later on
  return (
    <div>
      <Grid2 container spacing={2}>
        <Grid2 xs={8}><InstaFeed /></Grid2>
        <Grid2 xs={4} >
          <Songs />
          <Bio/>
        </Grid2>

      </Grid2>
        
       
    </div>
  )
}
