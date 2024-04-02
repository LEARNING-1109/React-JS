import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, HStack, Link, Stack, Text, VStack } from '@chakra-ui/react'

const Nav = () => {
    return (
        <React.Fragment>
            Hare Krishna
            <Box size={'lg'} width={'full'} height={'full'} >
                <Container size={'lg'} width={'full'} height={'full'} >
                    <Stack>
                        <HStack fontSize={28} color={'white'} justifyContent={'center'} >
                            <VStack>
                                <Link as={RouterLink} to={"/coins"} >Coins</Link>    
                            </VStack>
                            <VStack>
                                <Link as={RouterLink} to={"/exchanges"} >Exchanges</Link>                                    
                            </VStack>                            
                        </HStack>
                    </Stack>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default Nav