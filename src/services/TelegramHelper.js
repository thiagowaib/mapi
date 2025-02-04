import fetch from 'node-fetch';

const TelegramConfig = {
    Bot: {
        id: "7936973625:AAGA8B7Fkl9EVgvbRYQHh8kQAk93IaNsRL0"
    },
    Chats: {
        consultoriaEleva: "-4729831328"
    }
}

const sendMessageEnrollment = async (content) => {
    let message = "Nova aplicação para a Consultoria Eleva!\n\n";
    content.forEach(item => {
        message += `>> ${item.question}\n`;
        message += `- ${item.answer}\n\n`;
    });
    await sendMessage(message.trim(), TelegramConfig.Chats.consultoriaEleva); 
}

const sendMessage = async (message, chat) => {
    const botToken = TelegramConfig.Bot.id;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chat,
            text: message,
        }),
    });

    const result = await response.json();
    return result;
}

export default {
    sendMessageEnrollment
}