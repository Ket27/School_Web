import React from 'react'
import { useLocation } from 'react-router-dom';
import { HStack, Box, Flex, Button, Text } from '@chakra-ui/react';
import Sidebar from '../Miscellenous/SideBar';


const Teacher = () => {
  const location = useLocation();
  // const myProps = location.state;

  // console.log(myProps.prop1);
  return (
    <Sidebar/>

  )
}

export default Teacher
