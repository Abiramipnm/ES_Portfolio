import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 1.5rem 1rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin: 0;
`;

const Attribution = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin: 4px 0 0 0;

  a {
    color: #e74c3c;
    text-decoration: underline;
    font-weight: 500;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>
        Copyright © 2025 - ES EthicSecur SofTec
      </Copyright>
      <Attribution>
        Distributed By <a href="https://www.ethicsecur.com" target="_blank" rel="noopener noreferrer">ES</a>
      </Attribution>
    </FooterContainer>
  );
};

export default Footer;
