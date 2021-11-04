import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import AutoBackupIcon from './images/auto-backup.inline.svg';
import AutoScalingIcon from './images/auto-scaling.inline.svg';
import EdgeDeploymentIcon from './images/edge-deployment.inline.svg';
import HighAvailabilityIcon from './images/high-availability.inline.svg';
import OpenSourceIcon from './images/open-source.inline.svg';
import PayAsYouGoIcon from './images/pay-as-you-go.inline.svg';

const items = [
  {
    icon: PayAsYouGoIcon,
    title: 'Pay as you go',
    description:
      'Being serverless allows using of resources on-demand, which significantly cuts the costs and brings pay as you go solution.',
  },
  {
    icon: HighAvailabilityIcon,
    title: 'High availability',
    description: `Zenith's architecture guarantees high availability even under peak load and 99.9999% uptime for Cloud users.`,
  },
  {
    icon: AutoBackupIcon,
    title: 'Auto-backup',
    description:
      'Cost efficient incremental auto backup functionality keeps your database save 24/7.',
  },
  {
    icon: AutoScalingIcon,
    title: 'Auto scaling',
    description:
      'Handle peak time requests, with a flexible auto scale deployment solution, and pay for the actual usage.',
  },
  {
    icon: EdgeDeploymentIcon,
    title: 'Edge deployment',
    description:
      'Have a database close to your users. Zenith is a perfect for serverless functions.',
  },
  {
    icon: OpenSourceIcon,
    title: 'Open source',
    description: (
      <>
        Check{' '}
        <Link to="/" theme="underline-primary-1">
          our repository
        </Link>{' '}
        to learn more about technologies which make Zenith great.
      </>
    ),
  },
];

const Features = () => (
  <section className="pt-40 mt-48 bg-black safe-paddings 3xl:pt-36 3xl:mt-44 2xl:pt-32 2xl:mt-40">
    <Container>
      <Heading className="text-center" tag="h2" size="md" theme="white">
        Not an ordinary PostgreSQL as a service
      </Heading>
      <p className="mt-5 text-center text-white t-3xl max-w-[940px] mx-auto 2xl:max-w-[800px] 2xl:mt-4">
        The way Zenith extends PostgreSQL brings many essential features needed for modern projects
        development.
      </p>
      <ul className="grid grid-cols-12 mt-[92px] grid-gap gap-y-[92px] 2xl:mt-[76px] 2xl:gap-y-[76px]">
        {items.map(({ icon: Icon, title, description }, index) => (
          <li className="col-span-4 max-w-[410px] 3xl:max-w-[340px] 2xl:max-w-[312px]" key={index}>
            <Icon className="w-24 2xl:w-20" />
            <Heading className="mt-6" tag="h3" size="sm" theme="white">
              {title}
            </Heading>
            <p className="mt-4 text-white t-xl">{description}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Features;
