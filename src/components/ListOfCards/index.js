import React from 'react'
import { CardsContainer } from './styles'

import { Card } from '../Card'

export const ListOfCards = ({children}) => {
    return (
        <CardsContainer>
            {
                children
            }
        </CardsContainer>
    )
}

