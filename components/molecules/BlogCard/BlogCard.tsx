import {
  Text,
  Stack
} from '@mantine/core';
import Image from 'next/image';

export interface BlogCardProps {
  width: string | number;
  height: string | number;
}

export default function BlogCard({
  width,
  height
}: BlogCardProps) {
  return (
    <div className="blog-card-container">
    <div className="blog-card spring-fever">
      <div className="title-content">
        <h3>COMING SOON</h3>
        <hr/>
        <div className="intro">
          Blogs in the near future
        </div>
      </div>
      {/*<!-- /.title-content -->*/}
      <div className="card-info">
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim.
      </div>
      {/*<!-- /.card-info -->*/}
      <div className="utility-info">
        <ul className="utility-list">
          <li className="comments">7</li>
          <li className="date">07-01-2022</li>
        </ul>
      </div>
      {/*<!-- /.utility-info -->
      //<!-- overlays -->*/}
      <div
        className="gradient-overlay"
      ></div>
      <div
        className="color-overlay"
      ></div>
    </div>
    </div>
  );
}