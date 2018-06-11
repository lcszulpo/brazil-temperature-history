import React from 'react'

const IndexPage = (props) => (
  <div>
    <label>{console.log(JSON.stringify(props.data.dataJson.temperatures))}</label>
    <label>Data Source from INMET</label>
  </div>
)

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