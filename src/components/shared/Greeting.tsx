import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">
        projects
      </HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline font-semibold">
        articles
      </HyperLink>
    </span>
  );

  return (
    <div>
      <p className="font-light">
        Hi there! I&apos;m <strong>Siddharth Mehta</strong>, a passionate{' '}
        <strong>Master&apos;s in Computer Science</strong> student at the{' '}
        <strong>University at Buffalo</strong>. With experience spanning{' '}
        <strong>data science</strong>, <strong>software development</strong>, and{' '}
        <strong>freelancing</strong>, I&apos;ve worked on impactful projects ranging{' '}
        from <em>machine learning solutions</em> to{' '}
        <em>scalable web applications</em>. Explore my {projectsLinkElement}{' '}
        or check out my {blogLinkElement}{' '}
        to learn more about my work and thoughts. I&apos;m always eager to tackle challenging
        problems, learn new skills, and deliver innovative, high-quality
        solutions.{' '}
      </p>
    </div>
  );
};

export default Greeting;
