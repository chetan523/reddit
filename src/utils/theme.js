import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        h1: {
            fontSize: "64px",
            fontWeight: 700,
        },
        h2: {
            fontSize: "48px",
            fontWeight: 700,
        },
        h3: {
            fontSize: "32px",
            fontWeight: 700,
        },
        h4: {
            fontSize: "24px",
            fontWeight: 700,
        },
        h5: {
            fontSize: "20px",
            fontWeight: 700,
        },
        h6: {
            fontSize: "18px",
            fontWeight: 700,
        },
        a: {
            fontSize: "18px",
            fontWeight: 400,
        },
        button: {
            fontSize: "18px",
            fontWeight: 700,
        },
        body1: {
            fontSize: "18px",
            fontWeight: 400,
        },
        body2: {
            fontSize: "16px",
            fontWeight: 400,
        },
        subtitle1: {
            fontSize: "16px",
            fontWeight: 600,
        },
        subtitle2: {
            fontSize: "14px",
            fontWeight: 600,
        }
    }
});
theme = responsiveFontSizes(theme);

export default theme;
