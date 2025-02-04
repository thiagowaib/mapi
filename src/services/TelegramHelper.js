import fetch from 'node-fetch';

const sendMessageEnrollment = async (content) => {
    let message = "Nova aplicação para a Consultoria Eleva!\n\n";
    content.forEach(item => {
        message += `>> ${item.question}\n`;
        message += `- ${item.answer}\n\n`;
    });
    await sendMessage(message.trim(), process.env.TELEGRAM_CHAT_ENROLLMENT); 
}

const sendMessage = async (message, chat) => {
    const botToken = process.env.TELEGRAM_BOT;
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