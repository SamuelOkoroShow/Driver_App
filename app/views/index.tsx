import React from 'react'
import styled from 'styled-components/native';
// Shared Comp
import {oxford, platinum} from '../shared/colors'
import { Container } from '../shared/styles';

const Text = styled.Text`
    color: ${platinum}
`

const Index = () => {
    return (
        <Container>
            <Text>Hello World</Text>
        </Container>
    )
}

export default Index
