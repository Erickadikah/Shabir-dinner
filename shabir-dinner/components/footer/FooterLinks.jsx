import React from 'react';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

function FooterLinks() {
  return (
    <footer className="bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto flex flex-col sm:flex-row items-center sm:justify-between">
        <div className="mb-8 sm:mb-0">
          <img src="/images/gr.png" alt="Logo" className="max-w-40" />
        </div>
        <div className="flex space-x-8">
          {data.map((group, groupIndex) => (
            <div key={groupIndex} className="text-gray-300">
              <h2 className="text-lg text-gray-600 font-semibold mb-3">{group.title}</h2>
              <ul>
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a href={link.link} className="hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-700 py-8 mt-8">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm text-gray-500">&copy; 2023 All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <IconBrandTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <IconBrandYoutube />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <IconBrandInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterLinks;



