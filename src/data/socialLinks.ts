// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/harshtripathi6/',
    secondary: false,
    caption: 'Harsh Tripathi on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/harshtripathi6',
    secondary: false,
    caption: 'Harsh Tripathi on GitHub',
  },
];
