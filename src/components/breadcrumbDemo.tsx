import React from 'react';
import Breadcrumb from './breadcrumb';
import styles from '../styles/breadcrumbDemo.module.css';

interface IBreadcrumbDemoProps {
  currentDirectory: string;
}

const directoryTree: {
  [key: string]: string[];
} = {
  breadcrumb: ['blog', 'resume', 'contact'],
  blog: ['post'],
  resume: ['first', 'second', 'third'],
  contact: ['email', 'phone'],
  post: ['1', '2', '3'],
};

export default function BreadcrumbDemo({ currentDirectory }: IBreadcrumbDemoProps) {
  const parsed = currentDirectory.split('/');

  return (
    <>
      <Breadcrumb />
      <ul className={styles.links}>
        {directoryTree[parsed[parsed.length - 1]]
        && directoryTree[parsed[parsed.length - 1]].map((linkName) => (
          <li key={linkName}>
            <a href={`${currentDirectory}/${linkName}`}>{linkName}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
