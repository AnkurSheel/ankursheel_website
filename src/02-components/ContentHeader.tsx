import css from '@emotion/css';
import React from 'react';
import { colors } from '../tokens';
import TagList from './TagList';

const styles = {
    header: css({
        marginBottom: '2rem',
        color: `${colors.textLight}`,
    }),
};
interface ContentIntroProps {
    date: string;
    tags: string[];
}

const ContentIntro = (props: ContentIntroProps) => {
    const { date, tags } = props;

    return (
        <header css={styles.header}>
            <span>
                This entry was posted on <time>{date}</time>
                {tags.length > 0 && (
                    <>
                        <span> and tagged</span> <TagList tags={tags} />
                    </>
                )}
            </span>
        </header>
    );
};

export default ContentIntro;
