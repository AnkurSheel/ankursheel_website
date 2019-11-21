import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import React from 'react';
import GlobalStyle from '../01-elements/GlobalStyles';
import { BlogPostShareImageQuery } from '../graphqlTypes';
import colors from '../tokens/colors';

const stylesWithProps = (props: BlogPostShareImageProps) => {
    const image =
        props.data.post &&
        props.data.post.frontmatter &&
        props.data.post.frontmatter.featuredImage &&
        props.data.post.frontmatter.featuredImage.publicURL;

    return {
        preview: css({
            width: `${props.pageContext.width}px`,
            height: `${props.pageContext.height}px`,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            verticalAlign: 'middle',
        }),
        title: css({
            fontWeight: 'bold',
            fontSize: `${props.pageContext.type === 'twitter' ? '2rem' : '3rem'}`,
            margin: '1rem 2rem',
            color: `${colors.grey100}`,
            textShadow: `1px 2px 0px ${colors.grey500}`,
            textAlign: 'center',
        }),
        readTime: css({
            verticalAlign: 'center',
            fontSize: `${props.pageContext.type === 'twitter' ? '1.5rem' : '2rem'}`,
            textAlign: 'center',
            color: `${colors.grey100}`,
            ':before': {
                padding: '0.4em',
                content: `'👁'`,
            },
        }),
    };
};

interface BlogPostShareImageProps {
    data: Pick<BlogPostShareImageQuery, 'post'>;
    pageContext: {
        width: number;
        height: number;
        type: string;
    };
}

const BlogPostShareImage = (props: BlogPostShareImageProps) => {
    const styles = stylesWithProps(props);
    const {
        data: { post },
    } = props;
    const timeToRead = post && post.timeToRead && post.timeToRead;
    const minutes = timeToRead && timeToRead === 1 ? `${timeToRead} min` : `${timeToRead} mins`;
    const title = (post && post.frontmatter && post.frontmatter.title) || '';

    return (
        <div css={styles.preview}>
            <GlobalStyle />
            <h1 css={styles.title}>{title}</h1>
            {minutes && <h2 css={styles.readTime}>{minutes}</h2>}
        </div>
    );
};

export default BlogPostShareImage;

export const pageQuery = graphql`
    query BlogPostShareImage($slug: String!) {
        post: mdx(frontmatter: { slug: { eq: $slug } }) {
            timeToRead
            frontmatter {
                title
                featuredImage {
                    publicURL
                }
            }
        }
    }
`;
