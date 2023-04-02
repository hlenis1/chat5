const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')// proveedor
const MockAdapter = require('@bot-whatsapp/database/mock')// base de datos

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])


const flowString = addKeyword('9','imagen').addAnswer('Este es nuestro kit', {
    // media: './components/img/kit.webp',
    media: 'https://bolidotransport.com/chatbot/kit.jpeg',
})


const flowBotones = addKeyword('15').addAnswer('Menu 2', {
    buttons: 
    [{ body: 'kit' }, 
  
    ],
})

const flowTuto = addKeyword(['4']).addAnswer(
    [
        '🙌 Esta es nuestra pagina web :',
        'https://play.google.com/store/apps/details?id=com.bolido',

        'Presiona menu para regresar',
       
    ],
    null,
    null,

)

const flowSalir = addKeyword(['6', 'salir']).addAnswer(
    [
        '🚀 Fue un placer ayudarte ',
        '🙏 te espereamos pronto 🙌',

        'escribe Menu para opciones',
        
    ],
    null,
    null,
   
)



const flowCompleto = addKeyword(['13']).addAnswer(
    [
        'Gracias por registrate en un plazo de 48 horas',
        'te contactaremos para el resultado de tu estudio',
        'Un asesor te contactara pronto ',

        'Escribe Salir para finalizar',
        

        
      
     
        
    ],
    null,
    null,
    [flowSalir ]
)

const flowSomos = addKeyword(['3']).addAnswer(
    [


        'Cursos ofertados : ',
        'Curso de robótica de circuitos',
        'Curso de robótica lego mindstorms ',
        'Curso personalizado (en tu vivienda) de robótica lego mindstorms ',

        'Modulos 4',
        'Modulos cantidad de horas por mudolo: hrs 8',
        'Valor cada modulo : 260.000',
        

        'Modulo 1',
        'Introducción robótica aplicada:',
        'comprender los conceptos necesarios de la robótica para comprender ',
        'el lenguaje técnico de las maquinas.',  
        'Diseño de prototipos robóticos lego designer en formato 3D:',
        'Diseña prototipos modelar en 3D donde podrás simular el comportamiento ',
        'del robot construido y personalizar tu propios modelos para luego construirlos',

        'Modulo 2',
        'Programación de motores:',

        'Programa  la interacción de los impulsos del motor, puedes programarlos',
        'por grados, pulgadas, rotaciones, segundos.', 

        'Direccionamiento:',

        'Programa la interacción del robot usando lenguajes de ',
        'programación en entorno ensamblado ',
       
       
        
    ],
    null,
    null,
    // [flowSecundario,flowCompleto,]
)

const flowMenu = addKeyword(['1','registro']).addAnswer(
    [
        '🚀 Estos son los documentos que debes enviar para la matricula de quien piloteara el robot: ',
        '*Foto niñ@ ',
        '* Nombre completo ',
        '* edad',
        '* Fecha de nacimiento',
        '* Dirección ',
        '* Entidad de salud(EPS)',
        '* Nombre completo Padre o acudiente',
        '* Telefono',
        '* Sede de preferencia Cali (norte, sur) Jamundi (Ep)educación  personalizada',
        '* Digite  13 para finalizar de enviar la informacion',
      

       

       
        
    ],
    null,
    null,
    [flowSecundario,flowCompleto]
)

const flowContacto = addKeyword(['2']).addAnswer(
    ['💪 El Kit de robotica :', 

    'El kit de robótica tiene un costo de 200.000 mil pesos ',
    'Este incluye las herramientas necesarias para el desarrollo',
    'del curso con éxito',

    'Escribe Menu para resgresar',
    


    
    
    
    ],
    null,
    null,

)



const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'como estas','buen dia','.','menu'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*')
    .addAnswer(
        [
            'hola 👋🏽 gracias por elegirnos espero estes teniendo excelnete dia 😊 ',
            'Bienvenido a la academia de Gamebots 🤖',
            'Digita el numero del servicio que necesitas ',
            '1 👉 Matricula curso de robótica',
            '2 👉 Kits de robótica ',
            '3 👉 Información de los cursos ',
            '4 👉 Nuestra pagina web',
            '5 👉 Contactos ',
            '6 👉 Salir ',
            '9 👉 kit robotica ',
            'escriba 👉 menu 2',

           
        ],
        null,
        null,
        [ flowSalir, flowTuto, flowMenu,flowSomos,flowContacto,flujoContacto1,flowString,flowBotones]
    )
// en esta zona he creado otro flujo llamadon flujoContacto
    const flujoContacto1 = addKeyword(['5','contacto',' dame_tu_numero','telefono'])
    .addAnswer('3506567191 (solo whatsapp)')
    .addAnswer('Se te ofrece algo mas') // con esto mando otro mensaje
    .addAnswer(['Se te ofrece algo mas','Presiona 10 para ingresar al menu o 5 para finalizar']) // respuesta con salto de linea


    // {
    //    // sensitive:true // esto sirve para que reconozca mayuculas y minusculas
    // })

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flujoContacto])//en esta zona pongo mis flujos
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()