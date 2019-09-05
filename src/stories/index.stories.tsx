import { storiesOf } from '@storybook/react';
import React from 'react';
import TagList from '../02-components/TagList';

storiesOf('Welcome', module).add('to Storybook', () => <TagList tags={['1', '2']} />);

// storiesOf('Button', module)
//     .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//     .add('with some emoji', () => (
//         <Button onClick={action('clicked')}>
//             <span role="img" aria-label="so cool">
//                 😀 😎 👍 💯
//             </span>
//         </Button>
//     ));
