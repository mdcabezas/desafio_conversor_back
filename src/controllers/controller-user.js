import { obtenerUser, agregarActividad, obtenerActividades } from "../utils/querys.js";


export async function postValidaUsuario(req, res) {
  try {
    const user = await obtenerUser(req.body)
    if (user.length === 0) {
      return res.json({id:"", rol:""})
    } else {
      return res.json({id:user[0].id, rol:user[0].rol})
    }

  } catch (error) {
    throw new Error(error);
  }
}