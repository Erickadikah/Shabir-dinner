import React from 'react';
import Format from '../../layout/format';
import Section1 from '../../components/section1';
import Section2 from '../../components/section2';
import Section3 from '../../components/section3';
import Section4 from '../../components/section4';
import Section5 from '../../components/section5';

export default function Home() {
  return (
    <Format>
      <Section1 />
      <Section5 />
      <Section3 />
      <Section2 />
      <Section4 />
    </Format>
  )
}
