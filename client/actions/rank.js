import * as Ajax from './ajax';
export const GET_OFFICIAL_RANK = 'GET_OFFICAIL_RANK';


const officialRankDetail = (response) => ({
  type: GET_OFFICIAL_RANK,
  officialRank: response,
});

export const getOfficialRank = () => {
  return function (dispatch) {
    Ajax.getAjax('/api/officialrank', (response) => {
      if (response) {
        dispatch(officialRankDetail(response.data))
      }
    })
  }
};