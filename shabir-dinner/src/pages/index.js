import React, { useState, useEffect } from 'react';
import Format from '../../layout/format';
import Section1 from '../../components/section1';
import Section2 from '../../components/section2';
import Section3 from '../../components/section3';
import Section4 from '../../components/section4';
import Section5 from '../../components/section5';
import { Box } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaComments } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { MantineProvider } from '@mantine/core';
import KommunicateChat from '../../components/chat';

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
        <KommunicateChat />
        <Section4 />
      </Format>
    </MantineProvider>
  );
}
