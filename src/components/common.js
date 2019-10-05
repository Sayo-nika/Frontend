import React from 'react';
import propTypes from 'prop-types';
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
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  width: 450px;
  border-radius: 8px;
  padding: 16px;
  height: auto;
  margin: auto;
  background-color: white;
`;
export const Link = styled.a`
  color: #e84444;
  text-decoration: none;
`;
export const SubmitButtonBase = styled.button`
  background-color: #e84444;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 4px;
  font-size: 0.875rem;
  outline: none;
  border: none;
  text-transform: uppercase;
  color: #fff;
  margin: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;
export const SubmitButton = props => (
  <SubmitButtonBase onClick={props.onPress}>{props.title}</SubmitButtonBase>
);

SubmitButton.propTypes = {
  onPress: propTypes.func,
  title: propTypes.string
};

export const TextInput = styled.input`
  border-radius: 4px;
  padding: 12px 16px 14px;
  border-style: solid;
  border-width: 0.25px;
  border-color: #666666;
`;
export const SecretInput = styled.input`
  border-radius: 4px;
  padding: 12px 16px 14px;
  border-style: solid;
  border-width: 0.25px;
  border-color: #666666;
`;
SecretInput.type = 'password';

export const Flag = styled.input``;
Flag.type = 'checkbox';
export const RoundIcon = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: #f4f4f4;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
export const Header = styled.div``;
export const SubText = styled.div``;
export const Row = styled.div``;
