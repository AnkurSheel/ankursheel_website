import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Welcome', module).add('to Storybook', () => <div>Hello</div>);

// storiesOf('Button', module)
//     .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//     .add('with some emoji', () => (
//         <Button onClick={action('clicked')}>
//             <span role="img" aria-label="so cool">
//                 😀 😎 👍 💯
//             </span>
//         </Button>
//     ));
