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
    boxShadow: '0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1)',

    '@media (max-width:780px)': {
        width: '90%',
        padding: '25px',
    },
});

export default Wrapper;
