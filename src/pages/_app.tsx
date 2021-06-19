import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: '#001F3F',
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background:  #48b8a5;
    margin: 0 auto;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.niceBlack}; 
  }
  
  p {
     margin: 0;
  }
  
  input {
     font-family: 'Roboto', sans-serif;
  }
  
  button {
     font-family: 'Roboto', sans-serif;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
  }
  
  input[type=number] {
     -moz-appearance: textfield;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>T9 converter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
