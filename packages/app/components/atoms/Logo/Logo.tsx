import { Text } from '@mantine/core';

interface LogoProps {
  size: string;
}

export default function Logo({
  size,
}: LogoProps) {
  return (
    <Text
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: size,
        fontFamily: 'tgHaidoGrotesk, sans-serif',
      }}
    >
      MB
    </Text>

  );
}