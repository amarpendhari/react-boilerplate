// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            black: string;
            primary: string;
            secondary: string;
            success: string;
            danger: string;
            warning: string;
            info: string;
            light: string;
            dark: string;
            bodyBG: string;
            inputLabel: string;
            inputBorder: string;
            inputError: string;
            btnPrimary: string;
            btnDisabled: string;
            sidemenuActive: string;
            sidemenuHoverBG: string;
            red: string;
        };
        fonts: Array<string>
    }
}