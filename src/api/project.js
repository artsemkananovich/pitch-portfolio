import {api} from 'api';
import {delay} from 'utils';

/**
 * Fetch project list
 */
export const allProjectsRequest = async () => {
  try {
    // In order to see loading indicator, added a delay
    await delay(1000);

    return [];
  } catch (error) {
    return null;
  }
};
