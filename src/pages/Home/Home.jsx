import React from 'react';
import styled from 'styled-components';
import {useQuery} from '@tanstack/react-query';

import {allProjectsRequest} from 'api/project';

import PageTransition from 'components/PageTransition';
import {MiddleContainer} from 'components/Containers';
import Loader from 'components/Loader';
import {device} from 'theme/device';
import WaveText from 'components/WaveText';

export default function Home() {
  // Work data
  const {data, isLoading} = useQuery({
    queryKey: ['allProjectsRequest'],
    queryFn: allProjectsRequest,
  });

  return (
    <PageTransition>
      <Holder>
        <MiddleContainer>
          <Content>
            <Title>
              <WaveText
                text="We are a data visualization studio that focuses on building meaningful experiences with data."
                delay={0.3}
                duration={0.02}
              />
            </Title>
          </Content>
        </MiddleContainer>
      </Holder>
    </PageTransition>
  );
}

const Holder = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  padding-top: 10em;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Title = styled.h1`
  max-width: 16em;
  color: #f4f4f4;
  font-size: 3em;
  font-weight: 900;
  margin: 2em 0 1em 0;
  padding: 0;
  @media ${device.mobileL} {
    font-size: 2em;
  }
`;
