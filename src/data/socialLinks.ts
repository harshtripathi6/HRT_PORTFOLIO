// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/siddharthmehtaid/',
    secondary: false,
    caption: 'Siddharth Mehta on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/Siddharthm10',
    secondary: false,
    caption: 'Siddharth Mehta on GitHub',
  },
  {
    type: socialLinkTypes.twitter,
    url: 'https://x.com/Siddhar87006180',
    secondary: false,
    caption: 'Siddharth Mehta on Twitter',
  },
  {
    type: socialLinkTypes.instagram,
    url: 'https://www.instagram.com/siddharth_m10/',
    secondary: true,
    hidden: true,
    caption: 'Siddharth Mehta on Instagram',
  },
];
