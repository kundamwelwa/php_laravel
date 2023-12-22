// resources/js/app.js

import { createApp } from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { ZiggyProvider } from 'react-ziggy';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const el = document.getElementById('app');

createApp({
    render: () => render(
        <ZiggyProvider>
            <InertiaApp
                initialPage={JSON.parse(el.dataset.page)}
                resolveComponent={(name) => import(`./Pages/${name}`).then(module => module.default)}
            />
        </ZiggyProvider>,
        el
    ),
}).mount(el);

InertiaProgress.init({ color: '#4B5563' });
