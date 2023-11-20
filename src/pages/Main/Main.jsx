import React from 'react';
import styled from 'styled-components';
import {useQuery} from '@tanstack/react-query';

import {allProjectsRequest} from 'api/project';

import PageTransition from 'components/PageTransition';
import {MiddleContainer} from 'components/Containers';
import Loader from 'components/Loader';

export default function Main() {
  // Work data
  const {data, isLoading} = useQuery({
    queryKey: ['allProjectsRequest'],
    queryFn: allProjectsRequest,
  });

  return (
    <PageTransition>
      <Holder>
        <MiddleContainer>
          {isLoading ? (
            <Loader label="Loading project data" />
          ) : (
            <div className="p-fluid scalein animation-duration-300">
              Main page
            </div>
          )}
        </MiddleContainer>
      </Holder>
    </PageTransition>
  );
}

const Holder = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: aliceblue;
  padding-top: 10em;
`;
