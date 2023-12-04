import React from 'react'
import { Container, Flex } from '@chakra-ui/react'

const AuthPage = () => {
    return (
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                This is some heavy shit
            </Container>
        </Flex>
    )
}

export default AuthPage