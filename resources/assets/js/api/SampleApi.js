import API from './API'

const API_URL = '/api';

let SampleApi = {

  getTasks() {
    var getUrl = `${API_URL}/tasks`;
    return API.getInfo(getUrl, null);
  },
  postTasks(comment){
    var postUrl = `${API_URL}/tasks`;
    return API.postInfo(postUrl, JSON.stringify({comment}), null);
  },
    deleteTasks(id) {
    var postUrl = `${API_URL}/delete/${file_id}`;
    return API.postInfo(postUrl, null, null);
  }
  //  postTasks(id){
  //   var postUrl = `${API_URL}/task/post`;
  //   return API.postInfo(postUrl, JSON.stringify({Taks}), null);
  // },
  // getInitialStateFromView() {
  //   return JSON.parse(document.getElementById('initial-state').innerHTML);
  // },
  // getAuctions() {
  //   var getUrl = `${API_URL}/auction/list`;
  //   return API.getInfo(getUrl, null);
  // },
  // postUploadFile(listing_id, base_64, cb){
  //   var postUrl = `${API_URL}/auction/${listing_id}/file`;
  //   return API.postInfo(postUrl, JSON.stringify({base_64}), cb);
  // },
  // getPermissions(cb) {
  //   var getUrl = `${API_URL}/auction/permissions`;
  //   return API.getInfo(getUrl, cb);
  // },
  // getUserProfile(cb) {
  //   var getUrl = `${API_URL}/auction/get_user_profile`;
  //   return API.getInfo(getUrl, cb);
  // },
  // getVehicleDetail(auction_id) {
  //   var getUrl = `${API_URL}/auction/${auction_id}`;
  //   return API.getInfo(getUrl);
  // },
  // getEditVehicleDetail(auction_id) {
  //   var getUrl = `${API_URL}/auction/${auction_id}/edit_vehicle`;
  //   return API.getInfo(getUrl);
  // },
  // postSubmitBid(auction_id, bid_amount, cb) {
  //   var postUrl = `${API_URL}/auction/${auction_id}/bid`;
  //   return API.postInfo(postUrl, JSON.stringify({bid_amount}), cb);
  // },
  // deleteImage(index, listing_id, file_id) {
  //   var postUrl = `${API_URL}/auction/${listing_id}/delete/${file_id}`;
  //   return API.postInfo(postUrl, null, null);
  // },
  // postSubmitUpdateVehicle(auction, auction_id, cb) {
  //   var postUrl = `${API_URL}/auction/${auction_id}/update`;
  //   return API.postInfo(postUrl, JSON.stringify({auction}), cb);
  // }
}
export default SampleApi;