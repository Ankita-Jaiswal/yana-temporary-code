import { Header, HeaderName, Grid, Row, Button, Column, Checkbox, Tile, } from 'carbon-components-react';
import {
    Add32,
    Filter32
} from '@carbon/icons-react';
import CreateTicketModal from './create-ticket';
import React from 'react';
const TicketTile = () => {
    return (

        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '1rem' }} className="container">
            <div style={{ width: '5%' }}>
                <Checkbox id="checked-2" />
            </div>
            <div style={{ width: '95%' }}>
                <Tile>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <div style={{ width: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <span className="yana-heading-label2">
                                Ticket Title | Description
                            </span>
                            <span className="yana-heading-label3">Location Details | Contact Details</span>
                        </div>
                        <div style={{ width: '10%', display: 'inline-flex' }}>

                            <Button style={{ height: '30px' }} >Assign</Button>

                        </div>
                    </div>
                </Tile>
            </div>
        </div>
    )
}
const SuccessTicketTile = () => {
    return (

        <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', marginBottom: '1rem', }} className="container">
            <div style={{ width: '5%' }}>
                <Checkbox id="checked-2" />
            </div>
            <div style={{ width: '95%', background: '#D2FFD7' }}>
                <Tile style={{ background: '#D2FFD7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <div style={{ width: '85%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <span className="yana-heading-label2">
                                Ticket Title | Description
                            </span>
                            <span className="yana-heading-label3">Location Details | Contact Details</span>
                        </div>
                        <div style={{ width: '15%', display: 'inline-flex' }}>

                            <span className="yana-heading-label2">Attended/Resolved</span>

                        </div>
                    </div>
                </Tile>
            </div>
        </div>
    )
}

const TicketDashBoard = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div style={{ margin: '3rem' }}>
            <Header aria-label="IBM Platform Name">
                <HeaderName href="/" >
                    YANA for IBM
                </HeaderName>
            </Header>
            <br /><br /> <br /><br />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <div style={{ width: '85%' }}>
                    <h3 style={{ textAlign: 'left', color: '#BCBCBC', fontWeight: '700' }}>
                        TICKETS
                    </h3>
                </div>
                <div style={{ width: '15%', display: 'inline-flex' }} onClick={() => setOpen(true)}>
                    <span style={{ padding: '1rem', cursor: 'pointer' }}>  CREATE TICKET</span>
                    <Button renderIcon={Add32} hasIconOnly iconDescription="Create Ticket" tooltipAlignment="bottom" />

                </div>
            </div>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <div style={{ width: '85%' }}>
                    <h3 style={{ textAlign: 'left', fontWeight: '700' }}>
                        Hello Coordinator
                    </h3>
                </div>
                <div style={{ width: '15%', display: 'inline-flex' }}>

                    <Button renderIcon={Filter32} kind="ghost" size="2xl">Filter</Button>

                </div>
            </div>
            <br /><br />
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <SuccessTicketTile />
            <CreateTicketModal title="Create Ticket" open={open} setOpen={setOpen} />
        </div>
    )
}
export default TicketDashBoard;