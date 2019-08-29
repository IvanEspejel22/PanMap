import axios from 'axios'


export default (async function (values) {
   // simulate server latency
  // console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  // let datos = await JSON.stringify(values, null, 2);
  console.log(values);
  // datos = JSON.parse(datos);
  // console.log(datos);

  axios.delete(`http://localhost:3000/resenas/${values}`)

});

