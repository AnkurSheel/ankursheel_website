import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Video from '.';

const stories = storiesOf('Video', module);
stories.add('Basic Usage', () => (
    <Video
        src={text('src', 'https://www.youtube.com/embed/9R7CWVYFrtc')}
        title={text('title', 'Ice Age Adventure Video')}
    />
));

stories.add('Custom Dimensions', () => (
    <Video
        src={text('src', 'https://www.youtube.com/embed/9R7CWVYFrtc')}
        title={text('title', 'Ice Age Adventure Video')}
        width={text('width', '100%')}
        height={text('height', '500')}
    />
));
