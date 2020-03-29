import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './ForgotPassword.css'

class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
        }
    }

    render() {
        return (
            <div className="ForgotPassword">
                <Form onSubmit={this.handleSubmit}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <h1>Recover your Password</h1>
                                <Label for="userpassword"></Label>
                                <Input type="password" name="password" id="userpassword" placeholder="Enter your email"
                                    onChange={(evt) => { this.setState({ [evt.target.name]: evt.target.value }) }}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button className="button">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default ForgotPassword;