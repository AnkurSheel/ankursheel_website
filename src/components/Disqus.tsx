interface DisqusWrapperProps {
    title: string;
    slug?: string;
}
const DisqusWrapper = (props: DisqusWrapperProps) => {
    // const { disqusShortname, disqusSiteUrl } = useSiteMetadata();
    // if (!disqusShortname || !props.slug) {
    //     return null;
    // }
    // const disqusConfig = {
    //     url: `${disqusSiteUrl}${props.slug}`,
    //     title: props.title,
    // };
    // return <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default DisqusWrapper;
