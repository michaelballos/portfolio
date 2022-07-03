import {
  useEffect,
  useState,
  useRef,
} from 'react';
import BlogCard from '../../molecules/BlogCard/BlogCard';
import { SimpleGrid } from '@mantine/core';
const WIDTH = '25em';
const HEIGHT = '30em';
export default function BlogsPage() {
  const ref = useRef();
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <BlogCard
        width={WIDTH}
        height={HEIGHT}
      />
  </div>
  );
}