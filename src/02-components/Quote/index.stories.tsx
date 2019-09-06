import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Quote from '.';

const stories = storiesOf('Quote', module);
stories.add('With Author', () => (
    <Quote
        author={text('author', 'Steve Jobs')}
        quote={text(
            'quote',
            "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things."
        )}
    />
));

stories.add('Without Author', () => (
    <Quote
        quote={text(
            'quote',
            "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things."
        )}
    />
));
