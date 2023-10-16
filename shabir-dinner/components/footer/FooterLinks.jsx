import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';
import { Code } from '@mantine/code-highlight';

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
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} component="a" href={link.link} className={classes.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {/*<Text size="xs" c="dimmed" className={classes.description}>
            Socials
  </Text>*/}
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2023 mantine.dev. All rights reserved.
        </Text>
        <div className={classes.social}>
  <ActionIcon size="lg" color="gray" variant="subtle">
    <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  </ActionIcon>
  <div style={{ width: '1rem' }}></div>
  <ActionIcon size="lg" color="gray" variant="subtle">
    <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  </ActionIcon>
  <div style={{ width: '1rem' }}></div> 
  <ActionIcon size="lg" color="gray" variant="subtle">
    <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  </ActionIcon>
</div>
      </Container>
    </footer>
  );
}

export default FooterLinks;
