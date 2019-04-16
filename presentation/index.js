import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {BlockQuote, Cite, Deck, Heading, List, ListItem, Quote, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from '../spectacle-code-slide';
//
// Import code examples
//
import code from './examples/code';
//
// Import PrismJS and its dependencies
//
require('normalize.css');
require('prismjs/themes/prism-solarizedlight.css');
import Prism from 'prismjs/components/prism-core'; // eslint-disable-line no-unused-vars
import 'prismjs/components/prism-markup-templating';
// import 'prismjs/components/prism-kotlin';
// import '../prism-overrides/elm';
// import '../prism-overrides/clojure';
// import '../prism-overrides/fsharp';
// import '../prism-overrides/reason';
// import '../prism-overrides/rust';
//
// Import and preload images
//
const preload = images => {
    images.forEach(src => {
        const image = new Image();
        image.src = src;
    });
};
const city = require('../assets/city.jpg');
preload([
    city
]);
//
// Create Spectacle theme
const theme = createTheme({
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Helvetica'
});

class Title extends React.Component {
    render() {
        return (
            <Slide transition={[]} bgColor="primary">
                <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                Spectacle Boilerplate
                </Heading>
                <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                open the presentation/index.js file to get started
                </Text>
            </Slide>
        );
    }
}
const Hello = ({className}) => (
    <Slide>
    	<div className={className}>Hello!</div>
        <span>This component is styled with Emotion</span>
    </Slide>
);
const FancyHello = styled(Hello)`
    color: hotpink;
    font-size: 4em;
`;
Hello.propTypes = {
    className: PropTypes.string
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={[]} transitionDuration={0} theme={theme}>
                <Title />
                <FancyHello />
                <Slide transition={[]} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>Typography</Heading>
                    <Heading size={1} textColor="secondary">Heading 1</Heading>
                    <Heading size={2} textColor="secondary">Heading 2</Heading>
                    <Heading size={3} textColor="secondary">Heading 3</Heading>
                    <Heading size={4} textColor="secondary">Heading 4</Heading>
                    <Heading size={5} textColor="secondary">Heading 5</Heading>
                    <Text size={6} textColor="secondary">Standard text</Text>
                </Slide>
                <Slide transition={[]} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>Standard List</Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide transition={[]} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
                <CodeSlide
                    bgColor="beige"
                    transition={[]}
                    lang="javascript"
                    showLineNumbers={false}
                    code={code}
                    ranges={[/* eslint-disable no-magic-numbers */
                        {loc: [0, 7], title: 'Code'},
                        {loc: [0, 1]},
                        {loc: [1, 2]},
                        {loc: [1, 2], note: 'Heres a note!'}/* eslint-enable no-magic-numbers */
                    ]}/>
            </Deck>
        );
    }
}
