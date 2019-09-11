import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import ContentHeader from '../02-components/ContentHeader';

const styles = {
    body: css({
        '& > h2': {
            paddingTop: '2rem',
            marginTop: '2rem',
            borderTop: '2px solid #b1b1b1',
        },
        '& > h3': {
            borderTop: '2px solid #ececec',
            marginTop: '1rem',
            paddingTop: '2rem',
        },
        '& > p': {
            margin: '1em 0 0 0',
        },
        ".gatsby-highlight pre[class*='language-'].line-numbers": {
            padding: 0,
            paddingLeft: '2.8em',
        },
        figcaption: {
            textAlign: 'center',
            fontSize: '0.8em',
            fontStyle: 'italic',
        },
    }),
};

interface ContentProps {
    content: string;
    date: string;
    tags: string[];

    path?: string | undefined;
}

const Content = (props: ContentProps) => {
    const { content, date, tags, path } = props;

    return (
        <section>
            {(tags || date) && <ContentHeader date={date} tags={tags} />}
            <div css={styles.body}>
                <MDXRenderer path={path}>{content}</MDXRenderer>
            </div>
        </section>
    );
};

export default Content;
