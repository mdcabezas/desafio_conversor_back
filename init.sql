CREATE DATABASE convert;

CREATE TABLE usuarios(
 id SERIAL,
 rol VARCHAR(25),
 password VARCHAR(25),
 CONSTRAINT "pk_usuarios" PRIMARY KEY ("id")
 );

CREATE TABLE actividades (
 id SERIAL,
 usuario_id INT,
 fecha_hora_actividad TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
 monto_origen NUMERIC, -- 1.5
 fecha_conversion DATE, -- valor/fecha uf
 valor_moneda NUMERIC,  -- valor uf
 monto_conversion INT, -- uf * pesos
 CONSTRAINT "pk_actividades" PRIMARY KEY ("id")
 );
 
ALTER TABLE "actividades" ADD CONSTRAINT "fk_actividades_usuario_id" FOREIGN KEY("usuario_id")
REFERENCES "usuarios" ("id");
 
 INSERT INTO "usuarios" ("rol", "password") VALUES
('admin', 'adminpass'),
('user', 'userpass');
 
 INSERT INTO "actividades" 
 ("usuario_id", "fecha_hora_actividad","monto_origen", "fecha_conversion", "valor_moneda", "monto_conversion") VALUES
 ( 1,default , 1.2 , '2023-05-20' , 35994.61 , 42282),
 ( 2,default , 1.5 , '2023-05-18' , 35987.65 , 53992);