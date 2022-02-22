import React from 'react'
import { CardsContainer } from './styles'

import { Card } from '../Card'

export const ListOfCards = () => {
    const array = [1,2,3,4,5,6,7,8]

    return (
        <CardsContainer>
            {
                array.map(card =>  <Card key={card}></Card>)
            }
        </CardsContainer>
    )
}

