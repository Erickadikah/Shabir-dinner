import React, { useState, useEffect } from 'react';
import Format from '../../layout/format';
import Section1 from '../../components/section1';
import Section2 from '../../components/section2';
import Section3 from '../../components/section3';
import Section5 from '../../components/section5';
import { MantineProvider } from '@mantine/core';
import KommunicateChat from '../../components/chat';
import Services from "../../components/services";


export default function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <MantineProvider>
      <Format>
        <Section1 />
        <Section5 />
        <Section3 />
        <Section2 />
        <Services />
        <KommunicateChat />
      </Format>
    </MantineProvider>
  );
}
