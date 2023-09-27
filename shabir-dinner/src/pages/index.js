import React, { useState } from 'react';
import Format from '../../layout/format';
import Section1 from '../../components/section1';
import Section2 from '../../components/section2';
import Section3 from '../../components/section3';
import Section4 from '../../components/section4';
import Section5 from '../../components/section5';
import { Box, Container, useColorMode } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaComments } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
// import { RiMessage2Line } from 'react-icons/ri';

export default function Home() {
   const [isFormVisible, setIsFormVisible] = useState(false);
  // const { colorMode } = useColorMode();

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };
  return (
    <Format>
      <Section1 />
      <Section5 />
      <Section3 />
      <Section2 />
      <Box
          position='fixed'
          bottom='4'
          right='4'
          zIndex='999'
          display='flex'
          alignItems='center'
          justifyContent='center'
          borderRadius='full'
          style={{ backgroundColor: 'rgb(234, 179, 8)' }}
        >
          <IconButton
          icon={<FaComments />}
            // bg='blue.500'
            // style={{ backgroundColor: 'rgb(234, 179, 8)' }}
            color='white'
            borderRadius='full'
            boxShadow='lg'
            cursor='pointer'
            fontSize='32px'
            width='52px'
            height='50px'
            _hover={{ bg: 'blue.600', transform: 'scale(1.05)' }}
            aria-label='Open Chat'
            onClick={toggleForm}
          />
        </Box>
        {isFormVisible && (
          <Box
            position='fixed'
            bottom='4'
            right='4'
            bg='gray.50'
            borderRadius='lg'
            boxShadow='lg'
            p='4'
            _dark={{ bg: 'gray.800' }}
            zIndex='9999'
            width={['100%', '90%', '80%']} // Responsive width
            maxW='sm' // Limit max width on larger screens
          >

{/*          <ContactForm />*/}
            <IconButton
              icon={<AiOutlineClose />}
              bg='blue.500'
              color='white'
              borderRadius='full'
              fontSize='24px'
              width='48px'
              height='48px'
              _hover={{ bg: 'blue.600', transform: 'scale(1.05)' }}
              aria-label='Close Chat'
              onClick={toggleForm}
              mt='2'
            />
          </Box>
        )}
      <Section4 />
    </Format>
  )
}
