import { baseurl } from "../../const/const";

export const videoActions = {
  REQUEST: "@@video/REQUEST",
  GET_HOME_VIDEOS_REQUEST_FULFILED: "@@video/GET_HOME_VIDEOS_REQUEST_FULFILED",
  GET_HOME_VIDEOS_REQUEST_ERROR: "@@video/GET_HOME_VIDEOS_REQUEST_ERROR",
  GET_BROADCASTER_VIDEOS_REQUEST_FULFILED: "@@video/GET_BROADCASTER_VIDEOS_REQUEST_FULFILED",
  GET_BROADCASTER_VIDEOS_REQUEST_ERROR: "@@video/GET_BROADCASTER_VIDEOS_REQUEST_ERROR",
  GET_TEAM_VIDEOS_REQUEST_FULFILED: "@@video/GET_TEAM_VIDEOS_REQUEST_FULFILED",
  GET_TEAM_VIDEOS_REQUEST_ERROR: "@@video/GET_TEAM_VIDEOS_REQUEST_ERROR",
  GET_ARCHIVE_VIDEOS_REQUEST_FULFILED: "@@video/GET_ARCHIVE_VIDEOS_REQUEST_FULFILED",
  GET_ARCHIVE_VIDEOS_REQUEST_ERROR: "@@video/GET_ARCHIVE_VIDEOS_REQUEST_ERROR",
  GET_LIVE_STREAMS_REQUEST_FULFILED: "@@video/GET_LIVE_STREAMS_REQUEST_FULFILED",
  GET_LIVE_STREAMS_REQUEST_ERROR: "@@video/GET_LIVE_STREAMS_REQUEST_ERROR",
  GET_UPCOMING_STREAMS_REQUEST_FULFILED: "@@video/GET_UPCOMING_STREAMS_REQUEST_FULFILED",
  GET_UPCOMING_STREAMS_REQUEST_ERROR: "@@video/GET_UPCOMING_STREAMS_REQUEST_ERROR",
  GET_STREAM_INFO_REQUEST_FULFILED: "@@video/GET_STREAM_INFO_REQUEST_FULFILED",
  GET_STREAM_INFO_REQUEST_ERROR: "@@video/GET_STREAM_INFO_REQUEST_ERROR",
  GET_ARCHIVE_INFO_REQUEST_FULFILED: "@@video/GET_ARCHIVE_INFO_REQUEST_FULFILED",
  GET_ARCHIVE_INFO_REQUEST_ERROR: "@@video/GET_ARCHIVE_INFO_REQUEST_ERROR",
  GET_PACKAGE_INFO_REQUEST_FULFILED: "@@video/GET_PACKAGE_INFO_REQUEST_FULFILED",
  GET_PACKAGE_INFO_REQUEST_ERROR: "@@video/GET_PACKAGE_INFO_REQUEST_ERROR",
  SET_SELECTED_STREAM: "@@video/SET_SELECTED_STREAM",
  CLEAR_STREAM_INFO: "@@video/CLEAR_STREAM_INFO",
  CLEAR_ARCHIVE_INFO: "@@video/CLEAR_ARCHIVE_INFO",
  CLEAR_PACKAGE_INFO: "@@video/CLEAR_PACKAGE_INFO",
  CLEAR_ERROR: "@@video/CLEAR_ERROR",
  

  getHomeVideos: () => ({
    type: videoActions.REQUEST,
    payload: {
      method: "get",
      url: baseurl + "/videos/home",
      sucess: videoActions.getHomeVideosFulfilled,
      error: videoActions.getHomeVideosError,
    },
  }),
  getHomeVideosFulfilled: (resp) => ({
    type: videoActions.GET_HOME_VIDEOS_REQUEST_FULFILED,
    payload: { resp },
  }),
  getHomeVideosError: (error) => ({
    type: videoActions.GET_HOME_VIDEOS_REQUEST_ERROR,
    payload: { error },
  }),
  getBroadcasterVideos: (publish_point) => ({
    type: videoActions.REQUEST,
    payload: {
      method: "post",
      data: {
        publish_point,
      },
      url: baseurl + "/videos/broadcaster",
      sucess: videoActions.getBroadcasterVideosFulfilled,
      error: videoActions.getBroadcasterVideosError,
    },
  }),
  getBroadcasterVideosFulfilled: (resp) => ({
    type: videoActions.GET_BROADCASTER_VIDEOS_REQUEST_FULFILED,
    payload: { resp },
  }),
  getBroadcasterVideosError: (error) => ({
    type: videoActions.GET_BROADCASTER_VIDEOS_REQUEST_ERROR,
    payload: { error },
  }),
  getTeamVideos: (publish_point) => ({
    type: videoActions.REQUEST,
    payload: {
      method: "post",
      data: {
        publish_point,
      },
      url: baseurl + "/videos/team",
      sucess: videoActions.getTeamVideosFulfilled,
      error: videoActions.getTeamVideosError,
    },
  }),
  getTeamVideosFulfilled: (resp) => ({
    type: videoActions.GET_TEAM_VIDEOS_REQUEST_FULFILED,
    payload: { resp },
  }),
  getTeamVideosError: (error) => ({
    type: videoActions.GET_TEAM_VIDEOS_REQUEST_ERROR,
    payload: { error },
  }),
  getArchiveVideos: () => ({
    type: videoActions.REQUEST,
    payload: {
      method: "get",
      url: baseurl + "/videos/archive",
      sucess: videoActions.getArchiveVideosFulfilled,
      error: videoActions.getArchiveVideosError,
    },
  }),
  getArchiveVideosFulfilled: (resp) => ({
    type: videoActions.GET_ARCHIVE_VIDEOS_REQUEST_FULFILED,
    payload: { resp },
  }),
  getArchiveVideosError: (error) => ({
    type: videoActions.GET_ARCHIVE_VIDEOS_REQUEST_ERROR,
    payload: { error },
  }),
  getLiveStreams: () => ({
    type: videoActions.REQUEST,
    payload: {
      method: "get",
      url: baseurl + "/videos/live",
      sucess: videoActions.getLiveStreamsFulfilled,
      error: videoActions.getLiveStreamsError,
    },
  }),
  getLiveStreamsFulfilled: (resp) => ({
    type: videoActions.GET_LIVE_STREAMS_REQUEST_FULFILED,
    payload: { resp },
  }),
  getLiveStreamsError: (error) => ({
    type: videoActions.GET_LIVE_STREAMS_REQUEST_ERROR,
    payload: { error },
  }),
  getUpcomingStreams: () => ({
    type: videoActions.REQUEST,
    payload: {
      method: "get",
      url: baseurl + "/videos/upcoming",
      sucess: videoActions.getUpcomingStreamsFulfilled,
      error: videoActions.getUpcomingStreamsError,
    },
  }),
  getUpcomingStreamsFulfilled: (resp) => ({
    type: videoActions.GET_UPCOMING_STREAMS_REQUEST_FULFILED,
    payload: { resp },
  }),
  getUpcomingStreamsError: (error) => ({
    type: videoActions.GET_UPCOMING_STREAMS_REQUEST_ERROR,
    payload: { error },
  }),
  getStreamInfo: (stream) => ({
    type: videoActions.REQUEST,
    payload: {
      method: "post",
      data: stream,
      url: baseurl + "/videos/getStreamInfo",
      sucess: videoActions.getStreamInfoFulfilled,
      error: videoActions.getStreamInfoError,
    },
  }),
  getStreamInfoFulfilled: (resp) => ({
    type: videoActions.GET_STREAM_INFO_REQUEST_FULFILED,
    payload: { resp },
  }),
  getStreamInfoError: (error) => ({
    type: videoActions.GET_STREAM_INFO_REQUEST_ERROR,
    payload: { error },
  }),
  getArchiveInfo: (stream) => ({
    type: videoActions.REQUEST,
    payload: {
      method: "post",
      data: stream,
      url: baseurl + "/videos/getArchiveInfo",
      sucess: videoActions.getArchiveInfoFulfilled,
      error: videoActions.getArchiveInfoError,
    },
  }),
  getArchiveInfoFulfilled: (resp) => ({
    type: videoActions.GET_ARCHIVE_INFO_REQUEST_FULFILED,
    payload: { resp },
  }),
  getArchiveInfoError: (error) => ({
    type: videoActions.GET_ARCHIVE_INFO_REQUEST_ERROR,
    payload: { error },
  }),
  getPackageInfo: (stream) => ({
    type: videoActions.REQUEST,
    payload: {
      method: "post",
      data: stream,
      url: baseurl + "/videos/getPackageInfo",
      sucess: videoActions.getPackageInfoFulfilled,
      error: videoActions.getPackageInfoError,
    },
  }),
  getPackageInfoFulfilled: (resp) => ({
    type: videoActions.GET_PACKAGE_INFO_REQUEST_FULFILED,
    payload: { resp },
  }),
  getPackageInfoError: (error) => ({
    type: videoActions.GET_PACKAGE_INFO_REQUEST_ERROR,
    payload: { error },
  }),
  clearStreamInfo: () => ({
    type: videoActions.CLEAR_STREAM_INFO,
  }),
  clearArchiveInfo: () => ({
    type: videoActions.CLEAR_ARCHIVE_INFO,
  }),
  clearError: () => ({
    type: videoActions.CLEAR_ERROR,
  }),
  clearPackageInfo: () => ({
    type: videoActions.CLEAR_PACKAGE_INFO,
  })
};
