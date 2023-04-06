import React from 'react'
import Button from '@mui/material/Button';
import { Grid, Input } from '@mui/material';



export default function SearchBar({artist, updateArtist, onClick}) {

    return (
        <div className='searchBar'>
            <Grid container rowSpacing={1} columnGap={2}>
                <Input value={artist} onChange={updateArtist} id="outlined-basic" placeholder="Artist Here" variant="outlined" />
                <Button varaint="contained" onClick={onClick}>Search</Button>
            </Grid>
        </div>
    )
}
