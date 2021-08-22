import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    lightHarsh: '#F4F6FB',
    textPrimary: "#D72898",
    textSecondary: '#440F7C',
    background: '#F4F6FB',
    color: '#23345D',
    purple: '#6165D7',
    purpleLight: '#565CF1',
    plain: '#808AA5',
    border: "#BDD0FB",
    navcolor: '#A6BBC4',
    pending: "#EDEDFF",
    black: "#1E1F20",
    white: "#FFFFFF",
    gray: "#6A6A6A",
    blue: "#377DFF",
    lightblue: '#158DED',
    white: "#FFFFFF",
    red: '#FF5353',
    green: '#6FDBC2',
    orange: '#FF9979',
    yellow: "#FFD037",
};

export const FONTS = {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    italic: 'Poppins-Italic',
    light: 'Poppins-Light',
    black: 'Poppins-Black',
}

export const SIZES = {
    // global sizes
    base: 8,
    font: width < 361 ? 10 : 12,
    radius: 12,
    padding: 20,
    margin: 20,
    lineHeight: 20,

    // font sizes
    h1: width < 361 ? 22 : 24,
    h2: width < 361 ? 20 : 22,
    h3: width < 361 ? 14 : 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};


const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;