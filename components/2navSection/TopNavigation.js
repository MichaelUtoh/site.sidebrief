import React from 'react'
import Link from 'next/link'
import { Box, Container } from '@chakra-ui/layout'
import { Flex, Image, Text } from '@chakra-ui/react'

const TopNavigation = () => {
    return (
        <Flex 
            alignItems="center"
            bg="white" 
            boxShadow="sm" 
            fontFamily="primary.heading" 
            h={14} 
            justifyContent="space-between" 
            position="fixed" 
            px={{ base:"15px", md:"30px", lg:90}} 
            w="100%"
            zIndex={10000}
        >
            <Text p={2}><Image src="/sidebrief.png" width={100} h={6} /></Text>
            <Flex alignItems="center" fontSize={14} fontWeight={500} h="100%" justifyContent="space-between" px={4}>
                <Link href="/blog"><Text color="gray" cursor="pointer" fontSize={14} fontWeight={700} m={2} mx={4}>Blog</Text></Link>
                <Link href="#"><Text color="gray" cursor="pointer" fontSize={14} fontWeight={700} m={2} mx={4}>Contact</Text></Link>
                <Link href="#"><Text color="gray" cursor="pointer" fontSize={14} fontWeight={700} m={2} mx={4}>Register</Text></Link>
                <Link href="#"><Text color="gray" cursor="pointer" fontSize={14} fontWeight={700} m={2} mx={4}>Login</Text></Link>
            </Flex>
        </Flex>
    )
}

export default TopNavigation