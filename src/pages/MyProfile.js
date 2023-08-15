import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { signUp } from '../store/authSlice';
import '../Css/profile.css'
const UserProfile = () => {
    const { Name, Password } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState(Name);
    const [password, setPassword] = useState(Password);
    const handleSubmit = () => {
        dispatch(signUp({ userName: name, password: password }));
        navigate('/')
    };

    return (
        <Container>
            <div className="user-profile pt-5">
                <h3>User Profile</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={Name}
                            className="form-controll"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder={Password}
                            className="form-controll"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3 p-2">
                        Save Profile
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default UserProfile;