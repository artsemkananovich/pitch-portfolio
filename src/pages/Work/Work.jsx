import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Outlet, useNavigate, useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';

import {allProjectsRequest} from 'api/project';
import {useStore} from 'state/store';

import PageTransition from 'components/PageTransition';
import {MiddleContainer} from 'components/Containers';

export default function Work() {
  const {projectId} = useParams();
  const navigate = useNavigate();

  // Work data
  const {data, isLoading} = useQuery({
    queryKey: ['allProjectsRequest'],
    queryFn: allProjectsRequest,
  });

  const currentProject = useStore(state => state.currentProject);
  const setCurrentProject = useStore(state => state.setCurrentProject);

  useEffect(() => {
    if (projectId) {
      const newProject = data?.find(d => d['ID'] === projectId);
      if (newProject) {
        setCurrentProject(newProject);
      }
    } else {
      setCurrentProject(null);
    }
  }, [data, projectId]);

  return (
    <PageTransition>
      <Holder>
        <MiddleContainer>
          Work page
          <Outlet />
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
