import styled from 'styled-components';

import loginBackground from '../assets/img/login-bg.jpg';

export const LoginBackground = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: url("${loginBackground}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
`;
export const Card = styled.div`
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
        0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    width: 450px;
    border-radius: 8px;
    padding: 16px;
    height: auto;
    margin: auto;
    background-color: white;
`;
export const Link = styled.a``;
export const SubmitButton = styled.button``;
export const TextInput = styled.input``;
export const SecretInput = styled.input``;

SecretInput.type = 'password';
export const Flag = styled.input``;
Flag.type = 'checkbox';
export const RoundIcon = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background-color: #f4f4f4;
`;
export const Header = styled.div``;
export const SubText = styled.div``;
export const Row = styled.div``;
