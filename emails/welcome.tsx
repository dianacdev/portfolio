import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';
import { data } from 'autoprefixer';
import * as React from 'react';

interface WelcomeEmailProps {
  loginCode?: string;
  name: string;
  subject: string;
  message: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const WelcomeEmail = ({
  loginCode = 'sparo-ndigo-amurt-secan',
  name,subject,message
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for Contacting Diana Cervantes!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome! 🎉</Heading>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Hello, {name}<br/>
          Thank you for sending me a message. I will get back with you as soon as I can.<br/>
          Below is a recap of the message you provided via my website:
        </Text>
        <code style={code}>
          SUBJECT: <br/>{subject}<br/>
          <br/>
          MESSAGE: <br/>{message}<br/>
          <br/>
        </code>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          If you didn&apos;t try to contact Diana Cervantes, you can safely ignore this email.
        </Text>
        <Img
          src={`${baseUrl}/assets/DianaCLogo.svg`}
          width="32"
          height="32"
          alt="Diana's Logo"
        />
        <Text style={footer}>
          <Link
            href="https://dianacdev.com"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            Diana Cervantes
          </Link>
          , the all-in-one-place
          <br />
          for your software engineering, and design needs.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
