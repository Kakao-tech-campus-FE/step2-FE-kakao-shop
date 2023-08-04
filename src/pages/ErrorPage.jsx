import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button';
import Container from '../components/atoms/Container';
import URL from '../constants/URL';

function ErrorPage() {
    const navigate = useNavigate();
    return (
        <Container className="page">
            <h1>Not Found</h1>
            <Button onClick={() => navigate(URL.HOME)}>홈으로 돌아가기</Button>
        </Container>
    );
}

export default ErrorPage;
