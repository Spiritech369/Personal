export const requestNotificationPermission = async (): Promise<boolean> => {
    if (!('Notification' in window)) {
        console.warn('This browser does not support desktop notification');
        return false;
    }

    if (Notification.permission === 'granted') {
        return true;
    }

    if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }

    return false;
};

export const sendNotification = (title: string, options?: NotificationOptions) => {
    if (!('Notification' in window)) return;

    if (Notification.permission === 'granted') {
        new Notification(title, {
            icon: '/favicon.ico', // Assuming there's a favicon, or we can use a custom icon path
            badge: '/favicon.ico',
            ...options,
        });
    }
};

export const checkPermission = (): NotificationPermission => {
    if (!('Notification' in window)) return 'denied';
    return Notification.permission;
};
