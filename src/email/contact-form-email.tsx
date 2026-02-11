import React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  senderName: string;
};

export default function ContactFormEmail({ message, senderEmail, senderName }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New inquiry from {senderName}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black/10 my-10 px-10 py-6 rounded-2xl">
              <Heading className="leading-tight text-xl font-bold">Strategic Inquiry Received</Heading>
              <Text className="italic text-gray-700">&ldquo;{message}&rdquo;</Text>
              <Hr />
              <Text className="text-sm">Sender Name: <span className="font-bold">{senderName}</span></Text>
              <Text className="text-sm">Sender Email: <span className="font-bold">{senderEmail}</span></Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}