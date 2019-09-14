// 50 shades of grey generator
// https://javisperez.github.io/tailwindcolorshades/#/?%233E4047=3E4047&tv=1
const colors = {
    grey100: '#ECECED',
    grey200: '#CFCFD1',
    grey300: '#B2B3B5',
    grey400: '#78797E',
    grey500: '#3E4047',
    grey600: '#383A40',
    grey700: '#25262B',
    grey800: '#1C1D20',
    grey900: '#131315',

    white: '#ffffff',
};

export default {
    ...colors,
    textLightest: colors.white,
    textLightestHover: colors.grey200,
    textLight: '#57595d',
    primary: colors.grey500,
    primaryAlpha: `rgba(32, 35, 42, 0.85)`,
    text: '#616161',
    background: '#000000',
    backgroundArticle: '#f2f6c1',
    heartFooter: 'red',
    highlightCodeOneline: '#fff9d9',
    highlightCodeBackground: '#ffa7c4',
    highlightCodeMarker: '#ffa7c4',
    highlightCodeLineBackground: '#022a4b',
};
