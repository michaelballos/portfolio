import {
  useEffect,
  useState,
  useRef,
} from 'react';
import BlogCard from '../../molecules/BlogCard/BlogCard';
import { SimpleGrid } from '@mantine/core';

export default function BlogsPage() {
  const ref = useRef();
  const WIDTH = '25em';
  const HEIGHT = '30em';
  return (
    <div
      style={{
        height: '50vh',
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