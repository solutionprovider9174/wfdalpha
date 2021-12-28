import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import TimelineObserver from 'react-timeline-animation';

export default function Roadmaps() {
  return (
    <Flex
      w="100%"
      pt="47px"
      mt="117px"
      justify="center"
      direction="column"
      alignItems="center"
    >
      <Flex w="85%" direction="column" fontFamily="Sk-Modernist-Regular">
        <Text
          fontFamily="PilatExtended-Regular"
          fontWeight="400"
          fontSize="22px"
        >
          RoadMap
        </Text>
        <Flex
          mt="15px"
          mb="100px"
          direction="row"
          fontFamily="PilatExtended-Regular"
          fontWeight="700"
          fontSize="35px"
        >
          <Text color="#00A3FF">WeFund&nbsp;</Text>
          <Text>Technical RoadMap</Text>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <TimelineObserver
            initialColor="white"
            fillColor="#FF8500"
            handleObserve={(setObserver) => (
              <Timeline className="timeline" setObserver={setObserver} />
            )}
          />
          <Flex
            id="sphere"
            position="relative"
            style={{ transition: 'transform 0.5s' }}
          >
            <Image alt={'Wefund'} src="/sphere.svg" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

const Timeline = ({ setObserver }) => {
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [message4, setMessage4] = useState('');
  const [message5, setMessage5] = useState('');
  const [message6, setMessage6] = useState('');

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const timeline6 = useRef(null);

  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);
  const circle6 = useRef(null);

  const someCallback = () => {
    setMessage1(
      'Make running the platform with the basic functionality, create a project, back a project and stak the amount in Anchor, project done and project fail + yield transfer, will be done in December 2021'
    );
  };

  const someCallback2 = () => {
    setMessage2(
      'Set up the Core Team, in terms of knowledge, responsability, team management and following the same vision, will be done in December 2021'
    );
  };

  const someCallback3 = () => {
    setMessage3('Whitepaper 2.0, will be done in December 2021');
  };

  const someCallback4 = () => {
    setMessage4(
      'Set up the tokenomics, the date for closing the seed, when and how long for the Pre Sale and understand what kind of IDO we want to apply and when, will be done in January 2022'
    );
  };

  const someCallback5 = () => {
    setMessage5(
      'Have full functionality platform with all the function mentioned on the Whitepaper2.0, on the TGE'
    );
  };

  const someCallback6 = () => {
    setMessage6(
      'Have full functionality platform with all the function mentioned on the Whitepaper2.0, on the TGE'
    );
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(timeline6.current);

    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
    setObserver(circle6.current, someCallback6);
  }, []);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        <div className="message">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        <div className="message">{message3}</div>
      </div>
      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className="circle">
          4
        </div>
        <div className="message">{message4}</div>
      </div>
      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className="circle">
          5
        </div>
        <div className="message">{message5}</div>
      </div>
      <div id="timeline6" ref={timeline6} className="timeline" />
      <div className="circleWrapper">
        <div id="circle6" ref={circle6} className="circle">
          6
        </div>
        <div className="message">{message6}</div>
      </div>
    </div>
  );
};
