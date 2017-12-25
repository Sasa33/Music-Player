import * as Ajax from './ajax'

export const GET_SEARCH = 'GET_SEARCH';


const getSearch = (response) => ({
  type: GET_SEARCH,
  searchDetail: response,
});

export const getSearchDetail = (data) => {
  return function(dispatch) {
    if(data) {
      // use JSON.parse to convert string to array
      let arr=JSON.parse(window.localStorage.getItem('searchRecord')) || [];

      Array.prototype.removeByValue = function(val) {
        for(var i=0; i<this.length; i++) {
          if(this[i] == val) {
            this.splice(i, 1);  // remove i-th item in the array
            break;
          }
        }
      };

      arr.removeByValue(data);
      arr.unshift(data); // put new search data in the beginning of the array
      window.localStorage.setItem('searchRecord', JSON.stringify(arr));
    }

    Ajax.getAjax(`/api/search?search=${data}`, function(response){
      if (response) {
        dispatch(getSearch(response.data));
      }
    })
  }
};