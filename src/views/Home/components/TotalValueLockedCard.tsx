import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue, useTotalValue3 } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`
const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  const totalValue3 = useTotalValue3();

  const totalValueAll = totalValue.plus(totalValue3)
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'Total Value Locked (TVL)')}
        </Heading>
        <>
          <Row>
            <Text fontSize="20px" color="textSubtle">{TranslateString(9990, 'Across Mines and Nodes')}</Text>
            <CardValue fontSize="20px" value={totalValue.toNumber()} prefix="$" decimals={2}/>
          </Row>
            
          <Row>
            <Text fontSize="20px" color="textSubtle">Across Furnace</Text>
            <CardValue fontSize="20px" value={totalValue3.toNumber()} prefix="$" decimals={2}/>
          </Row>
          
        </>
      </CardBody>
      
      <StyledTotalValueLockedCard>
      <CardBody>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
            <CardValue value={totalValueAll.toNumber()} prefix="$" decimals={2}/>
          {/* </Heading> */}
          <Text color="textSubtle">Across All  Mines,  Nodes,  Layer 1</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
    </StyledCakeStats>
  )
}

export default TotalValueLockedCard
