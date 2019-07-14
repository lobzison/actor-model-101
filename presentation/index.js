import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import {Deck, Heading, List,
     ListItem, Slide, Text, Notes, Image, Link,
    Spectacle} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from '../spectacle-code-slide';
//
// Import code examples
//
//import code from './examples/ex';
//
// Import PrismJS and its dependencies
//
//require('normalize.css');
require('prismjs/themes/prism.css');
import Prism from 'prismjs/components/prism-core'; // eslint-disable-line no-unused-vars
import 'prismjs/components/prism-markup-templating';
//import 'prismjs/components/prism-java';
import 'prismjs/components/prism-scala';
import forEach from 'lodash/forEach';
const preload = imageCollection => {
    forEach(imageCollection, src => {
      const image = new Image();
      image.src = src;
    });
  };

const actors = {example: require('../assets/actors.svg'),
                query: require('../assets/query.svg'),
                errorKernel: require('../assets/errorKernel.svg'),
                server: require('../assets/server.jpg'),
                abstract1: require('../assets/abstract1.jpg'),
                abstract2: require('../assets/abstract2.jpg'),
                abstract3: require('../assets/abstract3.jpg'),
            };
preload(actors);

//
// Create Spectacle theme
const theme = createTheme({
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#07a',
    quarternary: '#77aa00'
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
                <Slide>
                    <Heading caps fit>actor</Heading>
                    <Heading caps fit>model</Heading>
                    <Heading caps fit>basics</Heading>
                </Slide>
                <Slide>
                    <Text fit>Originated in 1973 as</Text>
                    <Text fit>a computation model to handle</Text>
                    <Text fit>higly concurrent computation</Text>
                </Slide>
                <Slide>
                    <Heading fit caps size={2}>Actor</Heading>
                    <Heading fit caps size={2}>primitive unit</Heading>
                    <Heading fit caps size={2}>of computation</Heading>
                </Slide>
                <Slide>
                    <List>
                        <ListItem textSize="60">processing</ListItem>
                        <ListItem textSize="60">storage</ListItem>
                        <ListItem textSize="60">communication</ListItem>
                    </List>
                </Slide>
                <Slide>
                    <Heading fit caps size={2}>Communication</Heading>
                    <Heading fit caps size={2}>handled by messagaging</Heading>
                </Slide>
                <Slide>
                    <Text textSize="47">Actors send messages asynchronously</Text>
                    <Text textSize="47">messages arrives without order</Text>
                    <Text textSize="47">with at most once delivery</Text>
                </Slide>
                <Slide>
                    <Text fit>Received massages</Text>
                    <Text fit>are placed into reciever's messagebox</Text>
                    <Text fit>where they are waiting to be processed</Text>
                </Slide>
                <Slide>
                    <Heading fit size={2}>When message is</Heading>
                    <Heading fit size={2} margin="30px">processed actor can</Heading>
                        <Text textSize="60">Create other actors</Text>
                        <Text textSize="60">Send messages</Text>
                        <Text textSize="60">Change behaviour of itself</Text>
                    <Notes>
                        behaviour - change how to react to next message
                        includes changes to the local state
                    </Notes>
                </Slide>
                <Slide>
                   <Image src={actors.example} width = '1200px'/> 
                </Slide>
                <Slide>
                    <Text caps fit>Error kernel</Text>
                    <Text caps fit>pattern example</Text>
                </Slide>
                <Slide>
                    <Image src={actors.errorKernel} width = '1200px'/> 
                </Slide>
                <Slide>
                    <Heading size={4}>Actor model implementations</Heading>
                    <Text margin="20">Erlang</Text>
                    <Text margin="20">Akka</Text>
                    <Text margin="20">others</Text>
                </Slide>
                <Slide>
                    <Heading caps fit>Query</Heading>
                    <Heading caps fit>server</Heading>
                    <Heading caps fit>example</Heading>
                </Slide>
                <Slide>
                    <Image src={actors.query} width = '1000px'/> 
                </Slide>
                <CodeSlide
                    bgColor="white"
                    size='20px'
                    transition={[]}
                    lang="scala"
                    showLineNumbers={true}
                    code={require('raw-loader!./examples/untyped/src/main/scala/untyped/UserNode.scala')}
                    ranges={[
                        {loc: [0, 0], title: 'querying server'},
                        {loc: [11, 19], title: 'message types'},
                        {loc: [13, 14], note: 'from user'},
                        {loc: [15, 18], note: 'to user'},
                        {loc: [21, 21], title: 'usernode actor' },
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
                    bgColor="white"
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
                        {loc: [24, 28], note: 'close resource'},
                    ]}/>
                <Slide bgImage={actors.server}>
                    <Heading size={2} fit textColor="primary">Scalability</Heading> 
                    <Heading size={2} fit textColor="primary">beyond one machine</Heading>
                </Slide>
                <Slide>
                    <Heading fit caps textColor="secondary">the Ugly</Heading>
                    <Heading fit caps textColor="tertiary">the Bad</Heading>
                    <Heading fit caps textColor="quarternary">the good</Heading>
                </Slide>
                <Slide>
                    <Heading size={2} margin="50" textColor="secondary">The ugly</Heading>
                    <Text>degugging</Text>
                    <Text>reading logs</Text>
                </Slide>
                <Slide>
                    <Heading size={2} margin="50" textColor="tertiary">The bad</Heading>
                    <Text textColor="tertiary">composability</Text>
                    <Text textColor="tertiary">hard to reason</Text>
                    <Text textColor="tertiary">low level</Text>
                </Slide>
                <Slide>
                    <Heading size={2} margin="50" textColor="quarternary">The good</Heading>
                    <Text textColor="quarternary">ok model for high concurrency</Text>
                    <Text textColor="quarternary">"best" model for cluster computing</Text>
                </Slide>
                <Slide>
                    <Text textSize="120">Links</Text>
                    <Link textSize="60" href="https://www.edx.org/course/programming-reactive-systems">
                        Reactive programming course
                    </Link>
                    <Text/>
                    <Link textSize="60" href="https://youtu.be/7erJ1DV_Tlo">
                        Great explanation video
                    </Link>
                    <Text/>
                    <Link textSize="60" href="https://akka.io/">
                        Akka
                    </Link>
                    <Text></Text>
                    <Link textSize="60" href="https://github.com/lobzison/actor-model-101">
                        Presentation repo
                    </Link>
                </Slide>
                <Slide>
                    <Heading fit caps href="https://github.com/FormidableLabs/spectacle">
                        Spectacle.js
                    </Heading>
                </Slide>
            </Deck>
        );

    }
}