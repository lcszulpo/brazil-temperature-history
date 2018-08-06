import React from 'react'
import _ from 'lodash'

import LineChart from '../components/line'

// accessors
const x = d => d.date
const y = d => d.value

const IndexPage = props => {
  const width = 960
  const height = 400

  let data = _.map(props.data.dataJson.temperatures, temperature => {
    const date = new Date(temperature.date)

    return {
      date: date,
      month: date.getMonth(),
      year: date.getFullYear(),
      value: temperature.average,
    }
  })
  data = _.groupBy(data, 'year')

  console.log(data)

  const charts = _.map(data, (item, index) => (
    <div key={index}>
      <label>{item[0].year}</label>
      <LineChart
        data={item}
        width={width}
        height={height}
        margin={{
          top: 0,
          left: 10,
          right: 10,
          bottom: 0,
        }}
        x={x}
        y={y}
      />
    </div>
  ))

  return (
    <div>
      {charts}
      <label>Fonte: Dados da Rede do INMET</label>
    </div>
  )
}

export default IndexPage

export const ChartDataQuery = graphql`
  query ChartDataQuery {
    dataJson {
      temperatures {
        date
        average
      }
    }
  }
`
