import { css } from '@emotion/core';
import colors from '../tokens/colors';

const Wrapper = css({
    position: 'relative',
    borderRadius: '5px',
    width: '80%',
    maxWidth: '770px',
    wordWrap: 'break-word',
    backgroundColor: `${colors.backgroundArticle}`,
    margin: '0px auto 30px auto',
    top: '30px',
    padding: '50px',
    boxShadow:
        'inset 0 1px rgba(255, 255, 255, 0.5), inset 0 0 5px #d8e071, 0 0 1px rgba(0, 0, 0, 0.1), 0 2px rgba(0, 0, 0, 0.02)',
    border: '1px solid #c3baaa',
    '@media (max-width:780px)': {
        width: '90%',
        padding: '25px',
    },
});

export default Wrapper;
