import { Header, HeaderName, Grid, Row, Button, Column, FormGroup, TextInput, TextArea } from 'carbon-components-react';
import React from 'react';
import { useNavigate } from "react-router-dom";

const RegisterOption = ({ setStep }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="yana-heading-label1">Please register to become a coordinator</p>
            <Button style={{ width: '278px', marginTop: '62px' }} kind="secondary" onClick={() => setStep("Step2")}>Register</Button>
        </div>
    )
}
const RegistrationForm = ({ setStep }) => {
    return (
        <FormGroup style={{ marginLeft: '5rem', marginRight: '5rem' }}>
            <TextInput
                id="one"
                labelText="First Name"
                style={{ marginBottom: '1rem' }}
            />
            <TextInput
                id="1"
                labelText="Last Name"
                style={{ marginBottom: '1rem' }}
            />
            <TextInput
                id="2"
                labelText="Gender"
                style={{ marginBottom: '1rem' }}
            />
            <TextArea
                id="5"
                labelText="Last Name"
                style={{ marginBottom: '1rem' }}
            />
            <TextInput
                id="3"
                labelText="Contact No."
                style={{ marginBottom: '1rem' }}
            />
            <TextInput
                id="4"
                labelText="Identification from SEEDS"
                style={{ marginBottom: '1rem' }}
            />
            <Button style={{ width: '278px', marginTop: '60px', marginBottom: '60px', float: 'left' }} onClick={() => setStep("Step3")}>Submit</Button>
        </FormGroup>
    )
}

const RegistrationSuccessful = () => {
    return (
        <p className="yana-heading-label1">
            You have succesfully regstered
            as a coordinator.<br /><br />

            Please use the contact number
            used for registration for login
        </p>
    )
}

const LoginForm = ({ setShowLogin }) => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/tickets');
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '5rem' }}>
            <p className="yana-heading-label1">
                Enter the contact number to receive OTP<br /><br /></p>
            <TextInput
                id="one"

                style={{ marginBottom: '64px', width: '100%' }}
            />
            <Button onClick={routeChange}>Verify OTP</Button>
        </div>
    )
}
const Login = (type) => {
    const [step, setStep] = React.useState("Step1");
    const [showLogin, setShowLogin] = React.useState(false);


    const renderRegistrationSwitch = (param) => {
        switch (param) {
            case 'Step1':
                return <RegisterOption setStep={setStep} />;
            case 'Step2':
                return <RegistrationForm setStep={setStep} />;
            case 'Step3':
                return <RegistrationSuccessful setStep={setStep} />;
            default:
                return <RegisterOption />;
        }
    }
    return (
        <>
            <Header aria-label="IBM Platform Name">
                <HeaderName href="/" >
                    YANA for IBM
                </HeaderName>
            </Header>
            <Grid >

                <Row style={{ alignSelf: 'center' }}>

                    <Column style={{ marginTop: '11%', alignSelf: 'center' }}>
                        {renderRegistrationSwitch(step)}
                    </Column>
                    <div style={{ borderRight: '1px solid ', height: '600px', marginTop: '10%' }}></div>
                    <Column style={{ marginTop: '11%', alignSelf: 'center' }}>

                        {showLogin === false ?
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p className="yana-heading-label1">Login to YANA using registered mobile number</p>
                                <Button style={{ width: '278px', marginTop: '62px' }} onClick={() => setShowLogin(true)}>Login</Button>
                            </div> : <LoginForm />}
                    </Column>
                </Row>
            </Grid>
        </>

    )
}

export default Login;