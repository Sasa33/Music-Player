import * as Ajax from './ajax';
export const GET_PERSONAL_DETAIL = 'GET_PERSONAL_DETAIL';

const personalizedDetail = (response) => ({
  type: GET_PERSONAL_DETAIL,
  personalizedDetail: response,
});

export const getPersonalized = () => {
  return function (dispatch) {
    Ajax.getAjax('/api/personalized', (response) => {
      if (response) {
        dispatch(personalizedDetail(response.data))
      }
    })
  }
};