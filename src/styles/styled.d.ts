import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      weight: string;
      span: sring;
      background: string;
    };
  }
}
