import React, { useState } from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { Button, Heading, Image, Text } from '@chakra-ui/react'

const StepGuide = () => {

    const [formation, setFormation] = useState(true)
    const [launch, setLaunch] = useState(false)
    const [compliance, setCompliance] = useState(false)

    const handleBox1 = () => { setFormation(true), setLaunch(false), setCompliance(false); }
    const handleBox2 = () => { setFormation(false), setLaunch(true), setCompliance(false); }
    const handleBox3 = () => { setFormation(false), setLaunch(false), setCompliance(true); }

    return (
        <>
            <Flex id="info" bg="#fff" flexDirection="column" justifyContent="space-between" my={{ base:5 }} px={{ base:"15px", md:"30px", lg:90}} py={{ base:5, md:"70px" }}>
                <Text color="#5a5a5a" fontFamily="cutive" mt={5} fontSize={{ base:"xl", md:"4xl"}} textAlign="start">Formation Simplified</Text>
                <Text color="#757575" fontFamily="poppins" fontSize={{ base:14, md:16, lg:18 }} fontWeight={500} mb={10}>Form company and get started in new markets.</Text>

                {/* Section 1 */}
                <Flex>
                    <Flex flexDirection="column" w={{ base:"100%", md:"40%" }}>
                        <Flex cursor="pointer" flexDirection={{ base:"column", md:"row" }} justifyContent={{ base:"flex-start" }} mb={6} onClick={() => {handleBox1()}}>
                            <Flex bg="none" borderLeft="4px" borderLeftColor="#f8f8f8" flexDirection="column" justifyContent="center" h={{ base:"100%" }} mx={{ base:2, md:4 }} px={{ base:6 }} py={2} w={{ base:"100%", md:400 }}>
                                <Text className={ formation ? "title-animate" : ""} color="#5a5a5a" fontFamily="cutive" fontSize={{ base:20, md:24, lg:26 }} fontWeight={700}>Formation.</Text>
                                <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={200}>Form company</Text>
                                <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={400} mt={2}>
                                    Register a new profit or non-profit entity seamlessly, with support for all types of business vehicles.
                                </Text>
                            </Flex>
                        </Flex>

                        <Flex cursor="pointer" flexDirection={{ base:"column-reverse", md:"row" }} justifyContent={{ base:"flex-start" }} mb={6} onClick={() => {handleBox2()}}>
                            <Flex bg="none" borderLeft="4px" borderLeftColor="#f8f8f8" flexDirection="column" justifyContent="center" h={{ base:"100%" }} mx={{ base:2, md:4 }} px={{ base:6 }} py={2} w={{ base:"100%", md:400 }}>
                                <Text className={ launch ? "title-animate" : ""} color="#5a5a5a" fontFamily="cutive" fontSize={{ base:20, md:24, lg:26 }} fontWeight={700}>Launch.</Text>
                                <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={200}>Access local support</Text>
                                <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={400} mt={2}>
                                    Get started with tax registration, bank account set-up, IP protection and local support on-demand.
                                </Text>
                            </Flex>
                        </Flex>

                        <Flex cursor="pointer" flexDirection={{ base:"column", md:"row" }} justifyContent={{ base:"flex-start" }} mb={6} onClick={() => {handleBox3()}}>
                            <Flex bg="none" borderLeft="4px" borderLeftColor="#f8f8f8" flexDirection="column" justifyContent="center" h={{ base:"100%" }} mx={{ base:2, md:4 }} px={{ base:6 }} py={2} w={{ base:"100%", md:400 }}>
                                <Text className={ compliance ? "title-animate" : ""} color="#5a5a5a" fontFamily="cutive" fontSize={{ base:20, md:24, lg:26 }} fontWeight={700}>Compliance.</Text>
                                <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={200}>Get business licenses</Text>
                                <Text color="#5a5a5a" fontFamily="poppins" fontSize={{ base:14, md:16 }} fontWeight={400} mt={2}>
                                    Obtain business licenses and approvals required start business locally in any market.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex alignItems="center" display={{ base:"none", md:"flex" }} flexDirection="column" justifyContent="center" p={4} w="50%">
                        {formation ? <Image alt="" src="56420-cubes.gif" /> : ""}
                        {launch ? <Image alt="" src="46433-rocket-launch.gif" w="80%" /> : ""}
                        {compliance ? <Image alt="" src="30266-documents.gif" /> : ""}
                    </Flex>
                </Flex>

                


            </Flex>
        </>
    )
}

export default StepGuide
