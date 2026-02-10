// Service for sending WhatsApp notifications via CallMeBot (Free API)

interface WhatsAppConfig {
    apiKey: string;
    phoneNumber: string; // International format e.g. +1234567890
}

export const sendWhatsAppMessage = async (message: string, config: WhatsAppConfig): Promise<boolean> => {
    if (!config.apiKey || !config.phoneNumber) {
        console.warn('WhatsApp not configured');
        return false;
    }

    try {
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        // CallMeBot API
        const url = `https://api.callmebot.com/whatsapp.php?phone=${config.phoneNumber}&text=${encodedMessage}&apikey=${config.apiKey}`;

        await fetch(url, { mode: 'no-cors' }); // no-cors because it's a simple GET trigger, we won't get response body but it works
        console.log('WhatsApp message sent:', message);
        return true;
    } catch (error) {
        console.error('Failed to send WhatsApp message', error);
        return false;
    }
};
