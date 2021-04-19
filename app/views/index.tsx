import React from 'react'
import styled from 'styled-components/native';
import {oxford, platinum} from '../shared/colors'
import JobBoard from './JobBoard';

const Text = styled.Text`
    color: ${platinum}
`

const Index: React.FC = () => {
    return (
        <JobBoard />
    )
}

export default Index
