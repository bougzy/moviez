import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const My = () => {
    const location = useLocation();
    const username = location?.state?.username;

    const [depositAmount, setDepositAmount] = useState(() => {
        // Get the deposit amount from localStorage or set it to 0 if not found
        const storedAmount = localStorage.getItem('depositAmount');
        const parsedAmount = parseFloat(storedAmount);
        return !isNaN(parsedAmount) ? parsedAmount : 0;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsedTime = Date.now() - parseInt(localStorage.getItem('timestamp'), 10);
            const secondsPassed = Math.floor(elapsedTime / 1000);
            const newAmount = depositAmount * Math.pow(1.3, secondsPassed / (24 * 60 * 60));
            setDepositAmount(newAmount);
            // Update the timestamp in localStorage
            localStorage.setItem('timestamp', Date.now());
        }, 3000); // Change interval to 3 seconds

        return () => clearInterval(interval);
    }, [depositAmount]);

    const handleDeposit = () => {
        const inputElement = document.getElementById('depositAmount');
        const inputValue = inputElement ? parseFloat(inputElement.value) : 0;
        if (!isNaN(inputValue) && inputValue > 0) {
            const newAmount = depositAmount + inputValue;
            setDepositAmount(newAmount);
            // Update the timestamp in localStorage
            localStorage.setItem('timestamp', Date.now());
            // Store the new amount in localStorage
            localStorage.setItem('depositAmount', newAmount);
        } else {
            // If input is not a valid number or empty, do nothing
            console.error('Invalid deposit amount');
        }
    };

    return (
        <Container>
            <Card className="border-0 p-5 mt-4">
                <Card.Body>
                    <h1>Welcome, {username}!</h1>
                    <h1>Deposit Dashboard</h1>
                    <Form>
                        <Form.Group controlId="depositAmount">
                            <Form.Label>Enter deposit amount:</Form.Label>
                            <Form.Control className="" type="number" placeholder="Enter amount" />
                        </Form.Group>
                        <Button className="mt-2" variant="warning" onClick={handleDeposit}>
                            Deposit
                        </Button>
                    </Form>
                    <hr />
                    <h2>Total Deposit Amount:</h2>
                    <h3>${depositAmount.toFixed(2)}</h3>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default My;
