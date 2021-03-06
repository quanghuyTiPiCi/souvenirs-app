import { Grid } from '@material-ui/core';
import { LeftBar } from '../components/ManagePage/LeftBar/LeftBar';
import React from 'react';

export const Layout = ({ children }) => {
    return (
        <Grid container>
            <Grid
                item
                xs={2}
                style={{
                    background: '#2468a2',
                    padding: 0,
                    height: 'auto',
                }}
            >
                <LeftBar />
            </Grid>
            <Grid item xs={9} style={{ paddingTop: 50 }}>
                {children}
            </Grid>
        </Grid>
    );
};
