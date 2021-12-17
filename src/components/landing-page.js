import { ClickableTile, Column, Grid, Row, } from 'carbon-components-react';
import { useNavigate } from "react-router-dom";
import React from 'react';

import { Airplane, Location, Teammates, Doctor } from '@carbon/pictograms-react';

const LandigPageTiles = (props) => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('login');
    }
    // const { image, name, designation, email } = props.values;
    return (
        <Grid>
            <br />
            <br />
            <span style={{ fontSize: '50px', fontWeight: '600', margin: '2rem', letterSpacing: '0.16 px' }}>Welcome To YANA </span>
            <br />
            <br />
            <br />
            <br />
            <Row>
                <Column>
                    <ClickableTile style={{ paddingBottom: '5rem', paddingTop: '5rem' }} onClick={routeChange}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', }} >
                            <Airplane style={{ alignSelf: 'center' }} />
                            <h5 style={{ marginTop: '1rem', textAlign: 'center', }}>Seeker</h5>
                        </div>



                    </ClickableTile>
                </Column>
                <Column>
                    <ClickableTile style={{ paddingBottom: '5rem', paddingTop: '5rem' }} onClick={routeChange}>

                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', }} >
                            <Location style={{ alignSelf: 'center' }} />
                            <h5 style={{ marginTop: '1rem', textAlign: 'center', }}>Co-Ordinator</h5>
                        </div>

                    </ClickableTile>
                </Column>


                <Column>
                    <ClickableTile style={{ paddingBottom: '5rem', paddingTop: '5rem' }}>

                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', }} >
                            <Doctor style={{ alignSelf: 'center' }} />
                            <h5 style={{ marginTop: '1rem', textAlign: 'center', }}>Doctor</h5>
                        </div>

                    </ClickableTile>
                </Column>
                <Column>
                    <ClickableTile style={{ paddingBottom: '5rem', paddingTop: '5rem' }}>

                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', }} >
                            <Teammates style={{ alignSelf: 'center' }} />
                            <h5 style={{ marginTop: '1rem', textAlign: 'center', }}>Volunteer</h5>
                        </div>

                    </ClickableTile>
                </Column>

            </Row>
        </Grid>

    )
}

export default LandigPageTiles;