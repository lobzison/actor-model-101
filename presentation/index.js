import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {BlockQuote, Cite, Deck, Heading, List, ListItem, Quote, Slide, Text} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from '../spectacle-code-slide';
//
// Import code examples
//
//import code from './examples/ex';
//
// Import PrismJS and its dependencies
//
require('normalize.css');
require('prismjs/themes/prism-dark.css');
import Prism from 'prismjs/components/prism-core'; // eslint-disable-line no-unused-vars
import 'prismjs/components/prism-markup-templating';
//import 'prismjs/components/prism-java';
import 'prismjs/components/prism-scala';

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
                    size='20px'
                    transition={[]}
                    lang="scala"
                    showLineNumbers={true}
                    code={require('raw-loader!./examples/untyped/src/main/scala/untyped/UserNode.scala')}
                    ranges={[
                        {loc: [0, 0], title: 'untyped example'},
                        {loc: [11, 19], title: 'message types'},
                        {loc: [13, 14], note: 'from user'},
                        {loc: [15, 18], note: 'to user'},
                        {loc: [21, 21], title: 'actor' },
                        {loc: [20, 21]},
                        {loc: [23, 24], note: 'id -> executor, requester'},
                        {loc: [25, 26], note: 'partial function'},
                        {loc: [26, 39], note: 'react to message'},
                        {loc: [26, 27]},
                        {loc: [27, 28]},
                        {loc: [28, 29]},
                        {loc: [29, 33]},
                        {loc: [33, 34]},
                        {loc: [34, 35]},
                        {loc: [35, 36]},
                        {loc: [36, 37], note: '! = tell'},
                        {loc: [37, 38], note: 'reply to invalid'},
                        {loc: [39, 46]},
                        {loc: [40, 42], note: 'get saved executor and requester'},
                        {loc: [42, 43], note: 'shutdown executor'},
                        {loc: [43, 44], note: 'send results to user'},
                        {loc: [45, 46], note: 'remove from map'},
                        {loc: [48, 58]},
                        {loc: [49, 50], note: 'execute after 1 sec'},
                        {loc: [50, 52], note: 'get saved executor and requester'},
                        {loc: [52, 53], note: 'remove from map'},
                        {loc: [53, 54], note: 'shutdown executor'},
                        {loc: [54, 55], note: 'send timeout ot user'},
                        {loc: [59, 64], title: 'supervision strategy'},
                        {loc: [60, 63], note: '5 times in 1 second max'},
                    ]}/>
                <CodeSlide
                    bgColor="beige"
                    size='20px'
                    transition={[]}
                    lang="scala"
                    showLineNumbers={true}
                    code={require('raw-loader!./examples/untyped/src/main/scala/untyped/QueryExecutor.scala')}
                    ranges={[
                        {loc: [0, 0], title: 'query executor'},
                        {loc: [5, 9], note: 'message types'},
                        {loc: [9, 10]},
                        {loc: [10, 11]},
                        {loc: [11, 12]},
                        {loc: [13, 18]},
                        {loc: [19, 22], note: 'resend message to itself'},
                        {loc: [23, 32], note: 'close resource'},
                    ]}/>
            </Deck>
        );
    }
}
