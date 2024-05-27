import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import formatNumber from '../../../functions/numberFormat';

function LineChart({ chartData, priceType, multiAxis}) {
    const options = {
        plugins: {
            legend: {
                display: multiAxis ? true : false,
            },
        },
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        scales: {
          crypto1: {
              type: "linear",
              display: true,
              position: "left",
              ticks: {
                  callback: function(value, index, ticks) {
                      if(priceType == 'prices') return "$" + value.toLocaleString();
                      else {
                        return "$" + formatNumber(value)
                      }
                  }
              }
          },
          crypto2: {
            type: "linear",
            display: true,
            position: "right",
            ticks: {
                callback: function(value, index, ticks) {
                    if(priceType == 'prices') return "$" + value.toLocaleString();
                    else {
                      return "$" + formatNumber(value)
                    }
                }
            }
        }
      }
    }
  return (
    <div >
      <Line data={chartData} options={options} />
    </div>
  )
}

export default LineChart;