import { css } from '@emotion/core';
import React from 'react';
import Content from './Content';

const styles = {
    article: css({
        padding: '0 30px 30px auto',
        '@media only screen and (max-width: 500px)': {
            padding: 0,
        },
    }),
};
// const ArticleFooter = styled.footer`
//     position: relative;
//     margin: 6rem 0 0;
//     padding: 3rem 0 0;
//     border-top: 1px solid #ececec;
// `;

interface ArticleProps {
    body: string;
    date: string;
    tags: string[];
}

const Article = (props: ArticleProps) => {

    return (
        <article css={styles.article}>
            <Content content={props.body} date={props.date} tags={props.tags} />
            {/* <ArticleFooter>
                    <Bio />
                </ArticleFooter> */}
        </article>
    );
};

export default Article;
