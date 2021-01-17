import React from 'react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'


const brandSuccess = getStyle('success') || '#4dbd74'
const brandInfo = getStyle('info') || '#20a8d8'
const brandDanger = getStyle('danger') || '#f86c6b'



// var resultado = null;
// const token = localStorage.getItem("token");
// console.log("apunto de llamar a la api");
// axios.post('http://test.elecsis.co/graph/', {
//   token: token
// })
// .then(function (response) {

//   resultado = response;
//   console.log(resultado);
  
// })
// .catch(function (error) {
//   console.log(error);
// });

class MainChartExample extends React.Component{

  constructor(props) {
    super(props);
    this.state = { labels: [], datasets: [] };
    this.componentDidMount = this.componentDidMount.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.defaultOptions = {
    //   maintainAspectRatio: false,
    //   legend: {
    //     display: false
    //   },
    //   scales: {
    //     xAxes: [{
    //       gridLines: {
    //         drawOnChartArea: false
    //       }
    //     }],
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: true,
    //         maxTicksLimit: 5,
    //         stepSize: Math.ceil(250 / 5),
    //         max: 250
    //       },
    //       gridLines: {
    //         display: true
    //       }
    //     }]
    //   },
    //   elements: {
    //     point: {
    //       radius: 0,
    //       hitRadius: 10,
    //       hoverRadius: 4,
    //       hoverBorderWidth: 3
    //     }
    //   }
    // }
    
  }
 
  componentDidMount() {
      window.mmm = this;
      const axios = require("axios"); 
      var resp = axios.post('http://test.elecsis.co/graph/', {
      token: localStorage.getItem("token")
      })
      .then( function(response) {

        window.mmm.updateState(response);
      
      // this.setState({datasets: response.data.datasets});
      // resultado = response;
      // console.log(resultado);

      });
      // console.log(resp)
      // this.setState({datasets: resp.data.datasets})

      
  }

  updateState = (response) =>{
    console.log(response);
    this.setState({datasets: response.data.datasets, labels: response.data.labels});

  }

  

  render(){
    return (
      <CChartLine onChange={this.componentDidMount}
        // {...attributes}
        // datasets={defaultDatasets}
        datasets={this.state.datasets}
        options={this.state.defaultOptions}
        // labels={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
        // labels= {apiresultsLabels}
      //   labels =  {[
      //     "Enero",
      //     "Febrero",
      //     "Marzo",
      //     "Abril",
      //     "Mayo",
      //     "Junio",
      //     "Julio"
      // ]}
      labels={this.state.labels}
      />
    )
  }

}

// const MainChartExample = attributes => {
//   const random = (min, max)=>{
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }

//   const apiresultsDatasets = (() => {

//     const newPost = {token: localStorage.getItem("token")};
  
//       try {
//           // console.log("Aquii");
//           const axios = require('axios');
//           const resp = axios.post('http://test.elecsis.co/graph/', newPost);
//           // console.log("holaaaa", resp);
//           return resp.data.datasets;
//       } catch (err) {
//           // Handle Error Here
//           console.error(err);
//       }
  
//     // var m = sendPostRequest();
//     // console.log(m);
//     // return m;

//   //  return [ 
//   //     {
//   //         "label": "Gráfica Test",
//   //         "data": [
//   //             65,
//   //             59,
//   //             80,
//   //             81,
//   //             56,
//   //             55,
//   //             40
//   //         ],
//   //         "fill": false,
//   //         "borderColor": "rgb(75, 192, 192)",
//   //         "lineTension": 0.1
//   //     }
//   // ];
//   })();

//   // const apiresultsLabels = (() => {
//   //   return info.labels
//   // })

//   const defaultDatasets = (()=>{
//     let elements = 27
//     const data1 = []
//     const data2 = []
//     const data3 = []
//     for (let i = 0; i <= elements; i++) {
//       data1.push(random(50, 200))
//       data2.push(random(80, 100))
//       data3.push(65)
//     }
//     return [
//       // {
//       //   label: 'My First dataset',
//       //   backgroundColor: hexToRgba(brandInfo, 10),
//       //   borderColor: brandInfo,
//       //   pointHoverBackgroundColor: brandInfo,
//       //   borderWidth: 2,
//       //   data: data1
//       // },
//       // {
//       //   label: 'My Second dataset',
//       //   backgroundColor: 'transparent',
//       //   borderColor: brandSuccess,
//       //   pointHoverBackgroundColor: brandSuccess,
//       //   borderWidth: 2,
//       //   data: data2
//       // },
//       // {
//       //   label: 'My Third dataset',
//       //   backgroundColor: 'transparent',
//       //   borderColor: brandDanger,
//       //   pointHoverBackgroundColor: brandDanger,
//       //   borderWidth: 1,
//       //   borderDash: [8, 5],
//       //   data: data3
//       // }
//       {
//         "label": "Gráfica Test",
//         "data": [
//             65,
//             59,
//             80,
//             81,
//             56,
//             55,
//             40
//         ],
//         "fill": false,
//         "borderColor": "rgb(75, 192, 192)",
//         "lineTension": 0.1
//     }
//     ]
//   })()

//   const defaultOptions = (()=>{
//     return {
//         maintainAspectRatio: false,
//         legend: {
//           display: false
//         },
//         scales: {
//           xAxes: [{
//             gridLines: {
//               drawOnChartArea: false
//             }
//           }],
//           yAxes: [{
//             ticks: {
//               beginAtZero: true,
//               maxTicksLimit: 5,
//               stepSize: Math.ceil(250 / 5),
//               max: 250
//             },
//             gridLines: {
//               display: true
//             }
//           }]
//         },
//         elements: {
//           point: {
//             radius: 0,
//             hitRadius: 10,
//             hoverRadius: 4,
//             hoverBorderWidth: 3
//           }
//         }
//       }
//     }
//   )()

//   // render
//   return (
//     <CChartLine
//       {...attributes}
//       // datasets={defaultDatasets}
//       datasets={apiresultsDatasets}
//       options={defaultOptions}
//       // labels={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
//       // labels= {apiresultsLabels}
//       labels =  {[
//         "Enero",
//         "Febrero",
//         "Marzo",
//         "Abril",
//         "Mayo",
//         "Junio",
//         "Julio"
//     ]}
//     />
//   )
// }


export default MainChartExample
