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
        research work
      </HyperLink>
    </span>
  );

  return (
    <div>
      <p className="font-light text-justify">
        Hi, I&apos;m <strong>Harsh Tripathi</strong> &mdash; a{' '}
        <strong>Machine Learning Engineer</strong> and{' '}
        <strong>Master&apos;s student at the University at Buffalo</strong>. I work
        across applied ML, large-scale data science, and building production-ready applications. My experience spans research,
        data science, and software development, and I thrive at the
        intersection of algorithms, systems,
        and real-world impact. Explore my {projectsLinkElement} or read my{' '}
        {blogLinkElement} to get a deeper insight into my work, ideas, and engineering
        approach.
      </p>
    </div>
  );
};

export default Greeting;
