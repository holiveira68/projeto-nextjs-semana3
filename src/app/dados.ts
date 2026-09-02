export interface ItemDados {
    id: string;
    titulo: string;
    descricao: string;
    categoria: string;
    imagem: string; // URL de imagem (ex: do Unsplash)
    preco?: number; // Usado no E-commerce
    contato?: string; // Usado no Guia de Serviços
    autor?: string; // Usado no Portal de Eventos
}

export const dadosFicticios: ItemDados[] = [

    // EXEMPLO PARA GRUPO DE GUIA COMERCIAL (Negócios Locais)
    {
        id: "1",
        titulo: "Barbosa & Cia - Barbearia",
        descricao: "Cortes de cabelo clássicos e modernos, barba com toalha quente.",
        categoria: "barbearias",
        imagem: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&quot",
        contato: "(12) 99123-4567",

    },
    {
        id: "2",
        titulo: "Companhia Barbosa - Barbearia",
        descricao: "Cortes Modernos, Barboterapia, Dia do Noivo.",
        categoria: "barbearias",
        imagem: "https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVhcmlhfGVufDB8fDB8fHww",
        contato: "(12) 99999-7777",

    },
    {
        id: "3",
        titulo: "Rei da Tesoura - Barbearia",
        descricao: "Experiência Premium para Homens Modernos.",
        categoria: "barbearias",
        imagem: "https://media.istockphoto.com/id/1466543359/pt/foto/cheerful-barber-and-customer-laughing.webp?a=1&b=1&s=612x612&w=0&k=20&c=SNXJODZMrRDy7F_G1V70-e7PnJflxTBQDA0vCRi_KEY=",
        contato: "(12) 99999-8888",

    },
    {
        id: "4",
        titulo: "Brabus Barber - Barbearia",
        descricao: "Barbearia especializada em cortes de cabelo masculinos com técnicas modernas.",
        categoria: "barbearias",
        imagem: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVhcmlhfGVufDB8fDB8fHww",
        contato: "(12) 99999-8888",

    },
    {
        id: "5",
        titulo: "Barbero - Barbearia",
        descricao: "Barbearia com atendimento especializado em cortes de cabelo e barba.",
        categoria: "barbearias",
        imagem: "https://images.unsplash.com/photo-1675599193990-33d71150902b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJhcmJlYXJpYXxlbnwwfHwwfHx8MA%3D%3D",
        contato: "(12) 99999-8888",
    },
     {
        id: "6",
        titulo: "Barbearia & CIA",
        descricao: "Corte de cabelo e Barba",
        categoria: "barbearias",
        imagem: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyYmVhcmlhfGVufDB8fDB8fHww",
        contato: "(12) 99999-8888",

    }
];
