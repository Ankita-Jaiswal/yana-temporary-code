import React from 'react';
// import './rename-window.scss'
import { Modal, TextInput, FormGroup, TextArea, FormLabel } from 'carbon-components-react';




const CreateTicketModal = ({ title, open, setOpen }) => {
    return (

        <Modal
            open={open}
            modalHeading={title}

            onClick={() => {
                console.log("selected cake")
                console.log("selected icecream")
                return true;
            }
            }
            onRequestClose={() => setOpen(false)}
            shouldCloseAfterSubmit={true}
            primaryButtonText="Create"
            secondaryButtonText="Cancel">
            <FormGroup>

                <TextArea
                    id="5"
                    labelText="Description"
                    style={{ marginBottom: '1rem' }}
                />
                <FormLabel>Priority</FormLabel>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '32%' }}>
                    <div style={{ height: '60px', width: '60px', borderRadius: '25%', background: '#FF5555' }}>

                    </div>
                    <div style={{ height: '60px', width: '60px', borderRadius: '25%', background: '#FD7D07' }}>

                    </div>
                    <div style={{ height: '60px', width: '60px', borderRadius: '25%', background: '#0F62FE' }}>

                    </div>

                </div>
                <br />
                <TextInput
                    id="3"
                    labelText="Contact Details"
                    style={{ marginBottom: '1rem' }}
                />
                <TextInput
                    id="4"
                    labelText="Location Details"
                    style={{ marginBottom: '1rem' }}
                />
            </FormGroup>
        </Modal>
    )

};


export default CreateTicketModal