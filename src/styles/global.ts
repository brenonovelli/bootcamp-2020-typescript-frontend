import { createGlobalStyle } from 'styled-components';
import { shade, lighten } from 'polished';

export default createGlobalStyle`
  :root{
    --primaryDark: #232129;
    --textColorInverse: #312e38;
    --textColor: #f4ede8;
    --textColorShade20: ${shade(0.2, '#f4ede8')};
    --textColorShade50: ${shade(0.5, '#f4ede8')};

    --orange: #ff9900;
    --orangeShade20: ${shade(0.2, '#ff9900')};

    --infoColor: #3172b7;
    --infoColorLighten50: ${lighten(0.5, '#3172b7')};

    --successColor: #2e656a;
    --successColorLighten50: ${lighten(0.5, '#2e656a')};

    --errorColor: #c53030;
    --errorColorLighten40: ${lighten(0.4, '#c53030')};
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
