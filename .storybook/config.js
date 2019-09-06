// import { withInfo } from '@storybook/addon-info';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import GlobalStyle from '../src/01-elements/GlobalStyles';

const req = require.context('../src', true, /.stories.tsx$/);

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
    action('NavigateTo:')(pathname);
};

addDecorator(withInfo({ inline: true, source: false }));

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

const withGlobal = cb => (
    <>
        <GlobalStyle />
        {cb()}
    </>
);

addDecorator(withGlobal);
addDecorator(withKnobs);

configure(loadStories, module);
