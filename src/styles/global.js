import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    font-size: 14px;
    line-height: 1.42857143;
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
    display: block;
    }

    *[hidden] {
        display: none;
    }
    body {
    line-height: 1;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 100;
    overflow-x: hidden;
    }
    ol, ul {
    list-style: none;
    }
    blockquote, q {
    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    *,*::after, *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
`
