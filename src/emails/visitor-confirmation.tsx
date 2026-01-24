import {
    Body,
    Button,
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

interface VisitorConfirmationEmailProps {
    name: string;
}

export const VisitorConfirmationEmail: React.FC<
    Readonly<VisitorConfirmationEmailProps>
> = ({ name }) => (
    <Html>
        <Head />
        <Preview>Thank you for reaching out! I'll get back to you soon.</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Heading style={headerTitle}>✅ Message Received!</Heading>
                    <Text style={headerSubtitle}>Thank you for reaching out</Text>
                </Section>
                <Section style={content}>
                    <Section style={message}>
                        <Text style={paragraph}>Hi {name},</Text>
                        <Text style={paragraph}>
                            Thank you for getting in touch! I've received your message and
                            will get back to you as soon as possible.
                        </Text>
                        <Text style={paragraph}>
                            I typically respond within <strong>24-48 hours</strong> during
                            business days. If your inquiry is urgent, feel free to reach out
                            via other channels listed below.
                        </Text>
                    </Section>

                    <Section style={infoBox}>
                        <Text style={infoBoxTitle}>
                            <strong>💡 What happens next?</strong>
                        </Text>
                        <Text style={listItem}>• I'll review your message carefully</Text>
                        <Text style={listItem}>
                            • You'll receive a personalized response via email
                        </Text>
                        <Text style={listItem}>• We can schedule a call if needed</Text>
                    </Section>

                    <Section style={buttonContainer}>
                        <Button
                            style={button}
                            href="https://sultanxdev.vercel.app"
                        >
                            Visit My Portfolio
                        </Button>
                    </Section>

                    <Section style={footer}>
                        <Text style={footerTitle}>
                            <strong>Connect with me:</strong>
                        </Text>
                        <Section style={socialLinks}>
                            <Link href="https://x.com/sultanxdev" style={socialLink}>
                                X (Twitter)
                            </Link>
                            <Text style={separator}> • </Text>
                            <Link
                                href="https://www.linkedin.com/in/sultanalam436/"
                                style={socialLink}
                            >
                                LinkedIn
                            </Link>
                            <Text style={separator}> • </Text>
                            <Link href="https://github.com/sultanxdev" style={socialLink}>
                                GitHub
                            </Link>
                            <Text style={separator}> • </Text>
                            <Link
                                href="mailto:sultanalamdev@gmail.com"
                                style={socialLink}
                            >
                                Email
                            </Link>
                        </Section>
                        <Text style={disclaimer}>
                            This is an automated confirmation. Please do not reply to this
                            email.
                        </Text>
                    </Section>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default VisitorConfirmationEmail;

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
    padding: '40px 30px',
    textAlign: 'center' as const,
};

const headerTitle = {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0',
};

const headerSubtitle = {
    color: '#ffffff',
    fontSize: '16px',
    margin: '10px 0 0 0',
    opacity: 0.9,
};

const content = {
    backgroundColor: '#f9fafb',
    borderRadius: '0 0 10px 10px',
    padding: '40px 30px',
};

const message = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '25px',
    marginBottom: '25px',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#333333',
    margin: '0 0 16px 0',
};

const infoBox = {
    backgroundColor: '#eff6ff',
    borderLeft: '4px solid #667eea',
    borderRadius: '6px',
    padding: '20px',
    margin: '20px 0',
};

const infoBoxTitle = {
    fontSize: '16px',
    color: '#333333',
    margin: '0 0 12px 0',
};

const listItem = {
    fontSize: '14px',
    color: '#333333',
    margin: '4px 0',
};

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '20px 0',
};

const button = {
    backgroundColor: '#667eea',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '14px 30px',
};

const footer = {
    textAlign: 'center' as const,
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #e5e7eb',
};

const footerTitle = {
    fontSize: '14px',
    color: '#6b7280',
    margin: '0 0 10px 0',
};

const socialLinks = {
    textAlign: 'center' as const,
    margin: '10px 0',
};

const socialLink = {
    color: '#667eea',
    textDecoration: 'none',
    fontSize: '14px',
};

const separator = {
    color: '#6b7280',
    fontSize: '14px',
    display: 'inline',
    margin: '0 4px',
};

const disclaimer = {
    fontSize: '12px',
    color: '#6b7280',
    marginTop: '20px',
};
