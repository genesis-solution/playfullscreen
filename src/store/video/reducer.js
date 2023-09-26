import { videoActions } from "./actions";

export class VideosState {
  constructor() {
    this.home = null;
    this.live = null;
    this.archive = null;
    this.upcoming = null;
    this.archiveinfo = null;
    this.error = "";
    this.status = "";
    this.packages = [];
  }
}

export function VideoReducer(state = new VideosState(), { payload, type }) {
  switch (type) {
    case videoActions.REQUEST:
      return {
        ...state,
        status: "request_pending",
      };
    case videoActions.GET_HOME_VIDEOS_REQUEST_FULFILED:
      return {
        ...state,
        home: payload.resp,
        status: "get_home_videos_request_success",
      };
    case videoActions.GET_HOME_VIDEOS_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_home_videos_request_fail",
      };
    case videoActions.GET_BROADCASTER_VIDEOS_REQUEST_FULFILED:
      return {
        ...state,
        broadcaster_videos: payload.resp,
        status: "get_broadcaster_videos_request_success",
      };
    case videoActions.GET_BROADCASTER_VIDEOS_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_broadcaster_videos_request_fail",
      };
    case videoActions.GET_TEAM_VIDEOS_REQUEST_FULFILED:
      return {
        ...state,
        team_videos: payload.resp,
        status: "get_team_videos_request_success",
      };
    case videoActions.GET_TEAM_VIDEOS_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_team_videos_request_fail",
      };
    case videoActions.GET_ARCHIVE_VIDEOS_REQUEST_FULFILED:
      return {
        ...state,
        archive: payload.resp,
        status: "get_archive_videos_request_success",
      };
    case videoActions.GET_ARCHIVE_VIDEOS_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_archive_videos_request_fail",
      };
    case videoActions.GET_LIVE_STREAMS_REQUEST_FULFILED:
      return {
        ...state,
        live: payload.resp,
        status: "get_live_streams_request_success",
      };
    case videoActions.GET_LIVE_STREAMS_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_live_streams_request_fail",
      };
    case videoActions.GET_UPCOMING_STREAMS_REQUEST_FULFILED:
      return {
        ...state,
        upcoming: payload.resp,
        status: "get_upcoming_streams_request_success",
      };
    case videoActions.GET_UPCOMING_STREAMS_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_upcoming_streams_request_fail",
      };
    case videoActions.GET_STREAM_INFO_REQUEST_FULFILED:
      return {
        ...state,
        streaminfo: payload.resp,
        status: "get_stream_info_request_success",
      };
    case videoActions.GET_STREAM_INFO_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_stream_info_request_fail",
      };
    case videoActions.GET_ARCHIVE_INFO_REQUEST_FULFILED:
      return {
        ...state,
        archiveinfo: payload.resp,
        status: "get_stream_info_request_success",
      };
    case videoActions.GET_ARCHIVE_INFO_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_stream_info_request_fail",
      };
    case videoActions.GET_PACKAGE_INFO_REQUEST_FULFILED:
      return {
        ...state,
        packages: payload.resp.packages,
        status: "get_package_info_request_success",
      }
    case videoActions.GET_PACKAGE_INFO_REQUEST_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_package_info_request_fail",
      };
    case videoActions.SET_SELECTED_STREAM:
      return {
        ...state,
        selectedStream: payload.stream,
      };
    case videoActions.CLEAR_STREAM_INFO:
      return {
        ...state,
        streaminfo: null,
      };
    case videoActions.CLEAR_ARCHIVE_INFO:
      return {
        ...state,
        archiveinfo: null,
      };
    case videoActions.CLEAR_ERROR:
      return {
        ...state,
        error: "",
        status: "",
      };
    default:
      return {
        ...state,
      };
  }
}
