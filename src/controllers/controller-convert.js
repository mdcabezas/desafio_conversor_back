import axios from 'axios';
import { obtenerActividades, agregarActividad } from "../utils/querys.js"

const urlMiIndicador = "https://mindicador.cl/api/uf"

export async function postUfValue(req, res) {
  try {
    const { date, uf, user } = req.body
    const dateCL = new Intl.DateTimeFormat("es-CL").format(new Date(date));
    const { data } = await axios.get(`${urlMiIndicador}/${dateCL}`);
    agregarActividad(
      {
        usuario_id: user,
        monto_origen: uf,
        fecha_conversion: date,
        valor_moneda: data.serie[0].valor,
        monto_conversion: Math.round(uf * data.serie[0].valor)
      })
    res.json(Math.round(uf * data.serie[0].valor))
  } catch (error) {
    throw new Error(error);
  }
}

export async function getActividades(req, res) {
  try {
    return res.json(await obtenerActividades())
  } catch (error) {
    throw new Error(error);
  }
}