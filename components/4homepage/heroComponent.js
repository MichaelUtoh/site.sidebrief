import React from 'react'
import { Divider, Flex, Text } from '@chakra-ui/layout'
import { Button, Image, Link, theme } from '@chakra-ui/react'
import { FadeInBox, FadeInBtn } from '../5utils/motionUtil';
import { motion } from 'framer-motion';


const HeroComponent = () => {
    return (
        <>
            <Flex flexDirection={{ base:"column-reverse", md:"row" }} h={{ base:650 }} alignItems={{ base:"center" }} px={{ base:"15px", md:"30px", lg:90}}>

                {/* Welcome text */}
                <Flex
                    alignItems={{ base:"flex-start" }}
                    borderRadius={10}
                    flexDirection="column"
                    h={{ base:"50%", md:"60%" }}
                    justifyContent="center"
                    my="auto"
                    px={{ base:"15px" }}
                    py={{ base:10 }}
                    w={{ base:"100%", md:"80%", lg:"60%" }}
                >
                    <Text color="#5a5a5a" fontFamily="cutive" fontSize={{ base: '22px', md: '28px', lg: '40px' }} fontWeight={700} lineHeight={{ base:1.3, md:1.2 }} m={0} w="90%">
                        <FadeInBox text="Form and manage your company from anywhere." />
                    </Text>

                    <Text color="#757575" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={300} m={2} w={{ base:"90%", lg:"80%" }}>
                        <FadeInBox text="Sidebrief makes starting a new business seamless by removing lengthy paperwork, 
                        legal jargons, and hidden fees. Form companies across markets, with free business 
                        bank account, tax registration, business compliance, and more." />                    
                    </Text>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2 }}
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/"><button className="btn-gradient btn-hero">Get Started</button></Link>
                    </motion.div>
                </Flex>

                {/* Animation */}
                <Flex alignItems="center" justifyContent="center" mt={{ base:"100px", md:0 }} w={{ base:"80%" }}>
                    <Image alt="" src="/82840-vps-servers.gif" w={{ base:"80%", md:"70%"}} />
                </Flex>
            </Flex>
        </>
    )
}

export default HeroComponent
