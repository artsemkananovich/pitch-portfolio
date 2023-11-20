import React from 'react';
import styled from 'styled-components';
import {useStore} from 'state/store';

export default function Project() {
  const currentProject = useStore(state => state.currentProject);

  if (!currentProject) {
    return <>No data</>;
  }

  return <Holder>Project</Holder>;
}

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-bottom: 5em;
`;
