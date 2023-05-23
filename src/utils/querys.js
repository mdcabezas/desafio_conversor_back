import {pool} from '../config/database.js';

const obtenerActividades = async () => {
    const { rows } = await pool.query("SELECT A.*, U.rol FROM actividades A inner join usuarios U on U.id = A.usuario_id")
    return rows
}

const obtenerUser = async (value) => {
    const query = "SELECT rol, id FROM usuarios WHERE rol= $1 AND password= $2 "
    const values = [value.rol, value.password]
    const { rows } = await pool.query(query, values);
    return rows;
}

const agregarActividad = async (value) => {
    const query = "INSERT INTO actividades VALUES (DEFAULT, $1, DEFAULT, $2, $3, $4, $5)"
    const values = [value.usuario_id,
    value.monto_origen,
    value.fecha_conversion,
    value.valor_moneda,
    value.monto_conversion
    ]
    const result = await pool.query(query, values)
    console.log("Actividad agregada!", result)
}

export { obtenerUser, agregarActividad, obtenerActividades }