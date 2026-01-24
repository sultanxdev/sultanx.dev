import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export const AdminNotificationEmail: React.FC<
  Readonly<AdminNotificationEmailProps>
> = ({ name, email, phone, message, submittedAt }) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Heading style={headerTitle}>🔔 New Contact Form Submission</Heading>
        </Section>
        <Section style={content}>
          <Section style={infoBlock}>
            <Text style={infoLabel}>👤 NAME</Text>
            <Text style={infoValue}>{name}</Text>
          </Section>

          <Section style={infoBlock}>
            <Text style={infoLabel}>📧 EMAIL</Text>
            <Link href={`mailto:${email}`} style={linkStyle}>
              {email}
            </Link>
          </Section>

          <Section style={infoBlock}>
            <Text style={infoLabel}>📱 PHONE</Text>
            <Link href={`tel:${phone}`} style={linkStyle}>
              {phone}
            </Link>
          </Section>

          <Section style={messageBlock}>
            <Text style={infoLabel}>💬 MESSAGE</Text>
            <Text style={{ ...infoValue, whiteSpace: 'pre-wrap' }}>
              {message}
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              ⏰ Submitted at: {submittedAt}
              <br />
              📍 From your portfolio contact form
            </Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default AdminNotificationEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
};

const header = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '10px 10px 0 0',
  padding: '30px',
  textAlign: 'center' as const,
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const content = {
  backgroundColor: '#f9fafb',
  borderRadius: '0 0 10px 10px',
  padding: '30px',
};

const infoBlock = {
  backgroundColor: '#ffffff',
  borderLeft: '4px solid #667eea',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
};

const messageBlock = {
  backgroundColor: '#ffffff',
  borderLeft: '4px solid #764ba2',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
};

const infoLabel = {
  color: '#667eea',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  marginBottom: '5px',
};

const infoValue = {
  color: '#333333',
  fontSize: '16px',
  margin: '0',
};

const linkStyle = {
  color: '#667eea',
  textDecoration: 'none',
};

const footer = {
  textAlign: 'center' as const,
  marginTop: '30px',
  paddingTop: '20px',
  borderTop: '1px solid #e5e7eb',
};

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0',
};
