/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://workshops.txconvergent.org/',
  avatar: '/txc.png',
  title: 'TX Convergent Workshops',
  description: 'Access all materials from past Convergent workshops',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Texas Convergent',
  },
  socialLinks: [
    {
      link: 'https://www.linkedin.com/company/txconvergent/',
      icon: 'linkedin',
    },
    {
      link: 'https://www.instagram.com/txconvergent',
      icon: 'instagram',
    },
    {
      link: 'https://www.txconvergent.org/',
      icon: 'link',
    }]
});
