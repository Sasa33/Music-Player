import * as Ajax from './ajax';
export const GET_OFFICIAL_RANK = 'GET_OFFICAIL_RANK';
export const GET_GLOBAL_RANK = 'GET_GLOBAL_RANK';


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

const nationalRankDetail = (response) => ({
  type: GET_GLOBAL_RANK,
  nationalRank: response,
});

export const getNationalRank = () => {
  return function (dispatch) {
    Ajax.getAjax('/api/nationalrank', (response) => {
      if (response) {
        dispatch(nationalRankDetail(response.data))
      }
    })
  }
};