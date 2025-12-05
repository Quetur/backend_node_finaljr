api crud de productos

•	Login 
https://backend-node-finaljr.vercel.app/api/login
body , raw
{
    "email": "test@gmail.com",
    "password":"123456"
}

Retorna :
TOKEN

•	Listado de todos los productos
https://backend-node-finaljr.vercel.app/api/products
Retorna
[
  {
    "categoria": "infusion",
    "precio": 250,
    "descripcion": "descripciopn del te",
    "nombre": "te",
    "id": "DZr4xtSqYFbkd7g1LdrD"
  },
  {
    "nombre": "prueba",
    "descripcion": "este es un producto de prueba",
    "precio": 200,
    "categoria": "producto de prueba",
    "id": "ICy77nY3mcsRFlA1ASgV"
  }
]

•	Listar un solo producto
https://backend-node-finaljr.vercel.app/api/products/DZr4xtSqYFbkd7g1LdrD
Retorna
{
    "precio": 250,
    "nombre": "te",
    "descripcion": "descripciopn del te",
    "categoria": "infusion"
}

•	Alta de producto(token)
https://backend-node-finaljr.vercel.app/api/create
body
{
    "categoria": "Infusion",
    "nombre": "Yerba Taragui",
    "precio": 250,
    "descripcion":"paquete x 500g"
    
}

Retorna
    {
        "nombre": "Yerba Taragui",
        "categoria": "Infusion",
        "descripcion": "paquete x 500g",
        "precio": 250,
        "id": "8pzFFB4fEGYqhgetkVud"
    }


•	Eliminar un solo producto(token)
DELETE
https://backend-node-finaljr.vercel.app/api/products/ICy77nY3mcsRFlA1ASgV

Retorna
OK

