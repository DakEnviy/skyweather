import { ExtensionContext, commands, window } from 'vscode';

import { settings } from './settings';
import { statusBar } from './components/WeatherStatusBar';
import { getCommandName } from './utils/commands';

export function activate({ subscriptions }: ExtensionContext) {

    console.log('Congratulations, your extension "skyweather" is now active!');

    subscriptions.push(statusBar.bar);

    settings.onUpdate(() => {
        statusBar.update();
    });

    subscriptions.push(commands.registerCommand(getCommandName('updateSettings'), () => {
        settings.updateSettings();
    }));

    subscriptions.push(commands.registerCommand(getCommandName('updateLocation'), () => {
        settings.updateLocation();
    }));
}

export function deactivate() {}
