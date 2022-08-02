import React from 'react';

import WidgetDemoApp from '@iobroker/vis-2-widgets-react-dev/widgetDemoApp';
import { i18n as I18n } from '@iobroker/adapter-react-v5';

import DemoWidget from './DemoWidget';

class App extends WidgetDemoApp {
    constructor(props) {
        super(props);

        const translations = {
            en: require('./i18n/en.json'),
            de: require('./i18n/de.json'),
            ru: require('./i18n/ru.json'),
            pt: require('./i18n/pt.json'),
            nl: require('./i18n/nl.json'),
            fr: require('./i18n/fr.json'),
            it: require('./i18n/it.json'),
            es: require('./i18n/es.json'),
            pl: require('./i18n/pl.json'),
            'zh-cn': require('./i18n/zh-cn.json'),
        };
        // init translations
        I18n.extendTranslations(translations);
    }

    renderWidget() {
        return <DemoWidget
            socket={this.socket}
            style={{
                width: 600,
                height: 200,
            }}
            data={{
                type: 'all',
            }}
        />;
    }
}

export default App;
