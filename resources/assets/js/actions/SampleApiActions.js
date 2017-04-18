import AppDispatcher from '../AppDispatcher';
import SampleApiActionTypes from '../constants/SampleApiActionTypes';
import SampleApi from '../api/SampleApi';

let SampleApiActions = {

  getTasks() {
    AppDispatcher.dispatchAsync(SampleApi.getTasks(), {
      request: SampleApiActionTypes.GET_TASKS,
      success: SampleApiActionTypes.GET_TASKS_SUCCESS,
      failure: SampleApiActionTypes.GET_TASKS_ERROR
    });
  }

/*
 addComment: function(comment) {
        AppDispatcher.dispatch({
            actionType: SampleApiActionTypes.POST_TASKS,
            comment: comment,
        });
    },

  deleteTasks(){
    AppDispatcher.dispatchAsync(SampleApi.deleteTasks(id), {
      request: SampleApiActionTypes.DELETE_TASKS,
      success: SampleApiActionTypes.DELETE_TASKS_SUCCESS,
      failure: SampleApiActionTypes.DELETE_TASKS_ERROR
    });
  }
*/
  // },
  // updateFilterValue(field, value) {
  //   AppDispatcher.dispatch({
  //     type: ActionTypes.UPDATE_FILTER_VALUE,
  //     payload: {field, value}
  //   })
  // },
  // postComments(upload_vehicle, cb){
  //   AppDispatcher.dispatchAsync(AuctionAPI.postSubmitUploadVehicle(upload_vehicle ,cb), {
  //     request: ActionTypes.POST_UPLOAD_VEHICLE,
  //     success: ActionTypes.POST_UPLOAD_VEHICLE_SUCCESS,
  //     failure: ActionTypes.POST_UPLOAD_VEHICLE_ERROR
  //   });
  // },
  // updateField(section, field, value) {
  //   AppDispatcher.dispatch({
  //     type: ActionTypes.UPDATE_FIELD,
  //     payload: {section, field, value}
  //   })
  // },
  // updateFieldVehicleDetail(section, field, value) {
  //   AppDispatcher.dispatch({
  //     type: ActionTypes.UPDATE_FIELD_VEHICLE_DETAIL,
  //     payload: {section, field, value}
  //   })
  // },
  // updateEditField(section, field, value) {
  //   AppDispatcher.dispatch({
  //     type: ActionTypes.UPDATE_EDIT_FIELD,
  //     payload: {section, field, value}
  //   })
  // },
  // uploadVehicleImage(name, file, base_64){
  //   AppDispatcher.dispatch({
  //     type: ActionTypes.UPDATE_VEHICLE_IMAGE,
  //     payload: {name, file, base_64}
  //   })
  // },
  // deleteVehicleImage(name){
  //  AppDispatcher.dispatch({
  //     type: ActionTypes.DELETE_VEHICLE_IMAGE,
  //     payload: {name}
  //   })
  // },
  // deleteImage(index, listing_id, file_id) {
  //   AppDispatcher.dispatchAsync(AuctionAPI.deleteImage(index, listing_id, file_id), {
  //     request: ActionTypes.EDIT_DELETE_IMAGE,
  //     success: ActionTypes.EDIT_DELETE_IMAGE_SUCCESS,
  //     failure: ActionTypes.EDIT_DELETE_IMAGE_ERROR
  //   }, {index})
  // },
  // postUploadFile(listing_id, base_64, cb){
  //   AppDispatcher.dispatchAsync(AuctionAPI.postUploadFile(listing_id, base_64, cb), {
  //     request: ActionTypes.POST_UPLOAD_FILE,
  //     success: ActionTypes.POST_UPLOAD_FILE_SUCCESS,
  //     failure: ActionTypes.POST_UPLOAD_FILE_ERROR
  //   });
  // },
  // getPermissions(cb) {
  //   AppDispatcher.dispatchAsync(AuctionAPI.getPermissions(cb), {
  //     request: ActionTypes.GET_PERMISSIONS,
  //     success: ActionTypes.GET_PERMISSIONS_SUCCESS,
  //     failure: ActionTypes.GET_PERMISSIONS_ERROR
  //   })
  // },
  // getUserProfile(cb) {
  //   AppDispatcher.dispatchAsync(AuctionAPI.getUserProfile(cb), {
  //     request: ActionTypes.GET_USER_PROFILE,
  //     success: ActionTypes.GET_USER_PROFILE_SUCCESS,
  //     failure: ActionTypes.GET_USER_PROFILE_ERROR
  //   })
  // },
  // getVehicleDetail(auction_id) {
  //   AppDispatcher.dispatchAsync(AuctionAPI.getVehicleDetail(auction_id), {
  //     request: ActionTypes.GET_VEHICLE_DETAIL,
  //     success: ActionTypes.GET_VEHICLE_DETAIL_SUCCESS,
  //     failure: ActionTypes.GET_VEHICLE_DETAIL_ERROR
  //   })
  // },
  // getEditVehicleDetail(auction_id) {
  //   AppDispatcher.dispatchAsync(AuctionAPI.getEditVehicleDetail(auction_id), {
  //     request: ActionTypes.GET_EDIT_VEHICLE,
  //     success: ActionTypes.GET_EDIT_VEHICLE_SUCCESS,
  //     failure: ActionTypes.GET_EDIT_VEHICLE_ERROR
  //   })
  // },
  // updatePreviewImage(path) {
  //   AppDispatcher.dispatch({
  //     type: ActionTypes.UPDATE_PREVIEW_IMAGE,
  //     payload: {path}
  //   })
  // },
  // editVehicleImage(index, file, base_64) {
  //   AppDispatcher.dispatch({
  //     type: ActionTypes.EDIT_VEHICLE_IMAGE,
  //     payload: {index, file, base_64}
  //   })
  // },
  // postSubmitBid(auction_id, bid_amount, cb) {
  //   AppDispatcher.dispatchAsync(AuctionAPI.postSubmitBid(auction_id, bid_amount, cb), {
  //     request: ActionTypes.POST_SUBMIT_BID,
  //     success: ActionTypes.POST_SUBMIT_BID_SUCCESS,
  //     failure: ActionTypes.POST_SUBMIT_BID_ERROR
  //   })
  // },
  // postSubmitUpdateVehicle(auction, auction_id, cb) {
  //   AppDispatcher.dispatchAsync(AuctionAPI.postSubmitUpdateVehicle(auction, auction_id, cb), {
  //     request: ActionTypes.POST_UPDATE_VEHICLE,
  //     success: ActionTypes.POST_UPDATE_VEHICLE_SUCCESS,
  //     failure: ActionTypes.POST_UPDATE_VEHICLE_ERROR
  //   })
  // }
};
export default SampleApiActions;