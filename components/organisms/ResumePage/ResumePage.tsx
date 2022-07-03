import {
  Center
} from '@mantine/core';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <Center>
      <div
        style={{
          width: 773,
          height: 1000
        }}
      >
        <Image
          src="/resume.webp"
          alt="Resume"
          priority={true}
          layout="responsive"
          width={773}
          height={1000}
        />
      </div>
    </Center>
  );
}