import React from 'react'
import _ from 'lodash'

const IndexPage = (props) => {
  console.log(JSON.stringify(props.data.dataJson.temperatures))
  return (
    <div>
      <label>Data Source from INMET</label>
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