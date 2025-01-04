import type { TelegramWebApp } from './types';

declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        }
    }
}
