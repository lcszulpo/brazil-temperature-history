import React, { Component } from 'react'
import { Group } from '@vx/group'
import { LinePath } from '@vx/shape'
import { scaleTime, scaleLinear } from '@vx/scale'
import { extent, max } from 'd3-array'

class LineChart extends Component {
  render() {
    let { width, height, margin, x, y, data } = this.props

    // bounds
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom

    // scales
    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(data, x),
    })
    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(data, y)],
      nice: true,
    })

    return (
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill="white" rx={14} />
        <Group left={margin.left} top={margin.top}>
          <LinePath
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={x}
            y={y}
            stroke="#111111"
            strokeWidth={1}
          />
        </Group>
      </svg>
    )
  }
}

export default LineChart
