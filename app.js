const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')// proveedor
const MockAdapter = require('@bot-whatsapp/database/mock')// base de datos

const flowSecundario = addKeyword(['2', 'siguiente']).addAnswer(['📄 Aquí tenemos el flujo secundario'])


const flowString = addKeyword('9','imagen').addAnswer('Este es nuestro kit Presiona menu para regresar',{
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
        'https://www.facebook.com/profile.php?id=100090737749336',

        'Presiona menu para regresar',
       
    ],
    null,
    null,

)

const flowCon = addKeyword(['5']).addAnswer(
    [
        '⏱ horario de 9 - 5 pm :',
        '📲 +57 305 9027487',

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

const flowSedes = addKeyword(['7']).addAnswer(
    [
        '🏛 Estas son nuestras sedes :',
        'Cali : AV 5A Norte # 23DN - 57 Edif. Top Center Businnes',
        'Jamundi : Colegio bilingual tesla via proyerito frente club carvajar',
        'Jamundi : Clases personalizadas',

        'Presiona menu para regresar',
       
    ],
    null,
    null,

)
const flowVideos = addKeyword(['8']).addAnswer(
    [
        '🦾🤖👍 Unpoco de nosotros mira el video 🎬:',
       
        'https://drive.google.com/file/d/1jI44l9aampiKp4G52W4dZ5zyZV7aDZHH/view?usp=sharing',

        'Presiona menu para regresar',
       
    ],
    null,
    null,

)



const flowCompleto = addKeyword(['13']).addAnswer(
    [
        '🙌 👏 Gracias por registrate en un plazo de 48 horas',
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


        '📗📘📙📔 Cursos ofertados : ',
        'Curso de robótica de circuitos',
        'Curso de robótica lego mindstorms ',
        'Curso personalizado (en tu vivienda) de robótica lego mindstorms ',

        'Modulos 4',
        'Modulos cantidad de horas por mudolo: hrs 8',
        'Valor cada modulo : 260.000',
        

        '📗 Modulo 1',
        'Introducción robótica aplicada:',
        'comprender los conceptos necesarios de la robótica para comprender ',
        'el lenguaje técnico de las maquinas.',  
        'Diseño de prototipos robóticos lego designer en formato 3D:',
        'Diseña prototipos modelar en 3D donde podrás simular el comportamiento ',
        'del robot construido y personalizar tu propios modelos para luego construirlos',

        '📘 Modulo 2',
        'Programación de motores:',

        'Programa  la interacción de los impulsos del motor, puedes programarlos',
        'por grados, pulgadas, rotaciones, segundos.', 

        '📙 Modulo 3',
        'Direccionamiento:',

        '📔 Modulo 4',
        'Programacion avanzada:',

        'Programa la interacción del robot usando lenguajes de ',
        'programación en entorno ensamblado ',

        'Escribe menu para regresar ',
       
       
        
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
    ['💪 El Kit de Robótica :', 

    'El kit de robótica tiene un costo de 250.000 mil pesos ',
    'Este incluye las herramientas necesarias para el desarrollo',
    'del curso con éxito',

    'Los kits de Robótica pueden estar sujetos a cambios',

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
            '7 👉 Sedes ',
            '8 👉 Videos ',
            '9 👉 kit robotica ',
           

           
        ],
        null,
        null,
        [ flowSalir, flowTuto, flowMenu,flowSomos,flowContacto,flowString,flowBotones,flowCon,flowSedes,flowVideos]
    )
// en esta zona he creado otro flujo llamadon flujoContacto


    // {
    //    // sensitive:true // esto sirve para que reconozca mayuculas y minusculas
    // })

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])//en esta zona pongo mis flujos
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()