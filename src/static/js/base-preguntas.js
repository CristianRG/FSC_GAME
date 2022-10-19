let questionsOrde = [
    {
        category: "Identifica el objetivo",
        question: "¿Cuál de los siguientes objetivos tiene como finalidad garantizar modalidades para regular la producción y consumo excesivo?",
        optiones: ["Acción por el clima","Vida submarina","Ninguna de las anteriores"],
        answer: "Producción y consumo responsables",
        img: "https://cdn4.ecycle.com.br/cache/images/2017.12/50-650-ods-onu.jpg"
        // "answer": "Producción y consumo responsables",
        // "incorrectOne": "Acción por el clima",
        // "incorrectTwo": "Vida submarina",
        // "incorrectThree": "Ninguna de las anteriores"
    },
    {
        category: "Proposito del objetivo",
        question: "Proposito del objetivo Acción por el clima",
        optiones: ["Destruir bosques","Beneficiar a los pueblos rurales","Salvar a las especies maritimas"],
        answer: "Combatir contra el cambio climatico",
        img: "https://redcantabrarural.com/wp-content/uploads/ODS-MINI-13.jpg"
    },
    {
        category: "Producción y consumo responsable",
        question: "En lo que respecta a los consumidores, los hogares consumen el 29% de la energía mundial y contribuyen al 21% de las emisiones de ___ resultantes.",
        optiones: ["Monóxido de nitrógeno (NO2)","Metano (CH4)","Dióxido de azufre (SO2)"],
        answer: "Dióxido de carbono (CO2)",
        img: "https://www.sogeti.es/globalassets/spain/semana-medio-ambiente/co2.jpg"
    },
    {
        category: "Producción y consumo responsable",
        question: "Principales formas de ayudar como consumidor",
        optiones: ["Reciclando","Reciclando y reutilizando","Ninguna de las anteriores"],
        answer: "Reduciendo desechos y optar por comprar solo lo necesario",
        img: "https://consejo-eps.uco.es/wp-content/uploads/2011/05/comercijusto.jpg"
    },
    {
        category: "Acción por el clima",
        question: "¿Cuál de las siguientes opciones es una medida que una empresa puede usar?",
        optiones: ["Aumentar sus inversiones materiales","Reducir su producción en masa","Expandirse a otros países y aumentar su producción"],
        answer: "Reducir la huella de carbono de sus productos, servicios y procesos",
        img: "https://empresa.nestle.es/sites/g/files/pydnoa431/files/asset-library/publishingimages/cvc/agua-y-gestion-medioambiental/energia/energias-renovables-infografia.jpg"
    },
    {
        category: "Vida submarina",
        question: "¿Actualmente que porcentaje de arrecifes de coral ha sido destruido por los residuos?",
        optiones: ["40%","32%","17%"],
        answer: "20%",
        img: "https://laverdadnoticias.com/__export/1530669831021/sites/laverdad/img/2018/07/03/thinkstockphotos-537517821-2_2.jpg_793492074.jpg"
    },
]

let listDesorder = questionsOrde.sort(()=> Math.random() -0.5);

let questions = listDesorder;