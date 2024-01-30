/* eslint-disable import/extensions */
import React from 'react';
import Markdown from 'react-markdown';
import cn from 'clsx';
import { markdown as setup } from 'articles/setup.md';
import { markdown as phases } from 'articles/phases.md';
import { markdown as combat } from 'articles/combat.md';
import { markdown as team } from 'articles/team.md';
import styles from './styles.module.css';

const App = () => (
  <div className={cn(styles.root, 'markdown-body')}>
    <div className={styles.section}>
      <div>
        <Markdown>{setup}</Markdown>
      </div>

      <div>
        <Markdown>{phases}</Markdown>
      </div>
    </div>

    <div className={cn(styles.section, styles.pagebreak)}>
      <div>
        <Markdown>{combat}</Markdown>
      </div>

      <div>
        <Markdown>{team}</Markdown>
      </div>
    </div>
  </div>
);

export default App;
