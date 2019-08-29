import axios from 'axios'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
  await sleep(500); // simulate server latency
  // console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  let datos = JSON.stringify(values, null, 2);
  console.log(datos);
  datos = JSON.parse(datos);
  console.log(datos);
  const obj = {
    titulo: datos.titulo,
    resena: datos.resena,
    ubicacion:{
      calle:datos.calle,
      numero:datos.numero,
      alcaldia:datos.alcaldia,
      estado: datos.estado,
      cp: datos.cp
    },
    panaderia: datos.panaderia,
    temas: datos.temas,
    fecha: datos.fecha,
    autor: datos.autor,
    fotos:["https://www.yerbamateromance.com.ar/blog/wp-content/uploads/2018/05/pan-relleno-liv-3.jpg",
    "https://cocinamia.com.mx/wp-content/uploads/2018/11/Skype_Picture-1100x500.png",
    "https://www.elglobo.com.mx/sites/default/files/product-category/seccion-pan-dulce_0.jpg",
    "https://www.yerbamateromance.com.ar/blog/wp-content/uploads/2018/05/pan-relleno-liv-3.jpg"]
  };
  axios.post('http://localhost:3000/resenas', obj)
      .then(res => console.log(res.data));
});

