--CRUD graphql, ts-node, next.ts
/**********************************/
-Las operaciones CRUD (Create, Read, Update, Delete) son las cuatro operaciones básicas utilizadas en la persistencia de datos. Create agrega nuevos datos, Read obtiene datos existentes, Update modifica datos existentes y Delete elimina datos. CRUD cubre todas las acciones necesarias en una base de datos o almacén de datos.



Este sistema utiliza GraphQL como API para proporcionar una capa de abstracción flexible sobre los datos. El backend está construido con ts-node para ejecutar TypeScript directamente. El frontend usa Next.js para renderizar las vistas e interactuar con la API GraphQL. Esta stack proporciona tipado estático, SSR y una arquitectura escalable.

Next.ts: para la ui, obtencion y presentacion de datos. 

Graphql: para obtener los datos de la base de datos, crear los modelos de datos 

ts-node: para crear el servidor y configuracion graphql 

postgresql: base de datos en produccion

sqlite: base de datoes en desarrollo. 

