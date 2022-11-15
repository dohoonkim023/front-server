import { API } from './Token';

/**
 *
 * @param { {id: string, password: string, ottType: string} } ottForm
 */
export const ottAuthAPI = async (ottForm) => {
  return await API.post('http://localhost:8081/api/v1/ottAuth', ottForm);
};
