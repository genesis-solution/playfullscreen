const Broadcast = require("../models/broadcast.model.js");
const Broadcaster = require("../models/broadcaster.model.js");
const Team = require("../models/team.model.js");
const User = require("../models/user.model.js");
var async = require("async");
const request = require("request");

exports.getLives = async (req, res) => {
  async.parallel(
    {
      broadcasters: function (callback) {
        Broadcaster.findLive((err, data) => {
          callback(err, data);
        });
      },
      broadcasts: function (callback) {
        Broadcast.findLive((err, data) => {
          callback(err, data);
        });
      },
      teams: function (callback) {
        Team.findLive((err, data) => {
          callback(err, data);
        });
      },
    },
    function (err, result) {
      console.log(result);
      if (err) {
        res
          .status(500)
          .json({ message: "Something went wrong, please try again." });
      } else {
        let liveStreams = [];
        for (const index in result["broadcasts"]) {
          liveStreams.push({
            ...result["broadcasts"][index],
            type: "broadcast",
          });
        }
        for (const index in result["broadcasters"]) {
          liveStreams.push({
            ...result["broadcasters"][index],
            type: "broadcaster",
          });
        }
        for (const index in result["teams"]) {
          liveStreams.push({ ...result["teams"][index], type: "team" });
        }
        res.json(liveStreams);
      }
    }
  );
};

exports.getArchives = async (req, res) => {
  async.parallel(
    {
      recent: function (callback) {
        var options = {
          host: "proxy",
          method: "GET",
          url: "http://video.bunnycdn.com/library/99534/videos?orderBy=date",
          headers: {
            accept: "application/json",
            AccessKey: "985126ef-827f-45b2-ac9aa63d0410-edba-430b",
          },
        };
        request(options, function (error, response) {
          if (error) {
            // callback(error, []);
            callback(null, [
              {
                videoLibraryId: 99534,
                guid: "ca8a119a-30a8-4fe6-9b7f-9fbb4894eca3",
                title: "Test",
                dateUploaded: "2023-03-07T18:01:28.36",
                views: 0,
                isPublic: false,
                length: 101,
                status: 4,
                framerate: 29.97,
                width: 1280,
                height: 720,
                availableResolutions: "360p,480p,720p",
                thumbnailCount: 52,
                encodeProgress: 100,
                storageSize: 43704046,
                captions: [],
                hasMP4Fallback: true,
                collectionId: "",
                thumbnailFileName: "thumbnail.jpg",
                averageWatchTime: 0,
                totalWatchTime: 0,
                category: "adult",
                chapters: [],
                moments: [],
                metaTags: [
                  {
                    property: "description",
                    value: "description",
                  },
                ],
              },
            ]);
          } else {
            const info = JSON.parse(response.body);
            let list = info["items"].filter((item) => {
              return item.status == 4;
            });
            callback(error, list);
          }
        });
      },
      mostviewed: function (callback) {
        var options = {
          method: "GET",
          url: "http://video.bunnycdn.com/library/99534/videos?orderBy=views",
          headers: {
            accept: "application/json",
            AccessKey: "985126ef-827f-45b2-ac9aa63d0410-edba-430b",
          },
        };
        request(options, function (error, response) {
          if (error) {
            // callback(error, []);
            callback(null, [
              {
                videoLibraryId: 99534,
                guid: "ca8a119a-30a8-4fe6-9b7f-9fbb4894eca3",
                title: "Test",
                dateUploaded: "2023-03-07T18:01:28.36",
                views: 0,
                isPublic: false,
                length: 101,
                status: 4,
                framerate: 29.97,
                width: 1280,
                height: 720,
                availableResolutions: "360p,480p,720p",
                thumbnailCount: 52,
                encodeProgress: 100,
                storageSize: 43704046,
                captions: [],
                hasMP4Fallback: true,
                collectionId: "",
                thumbnailFileName: "thumbnail.jpg",
                averageWatchTime: 0,
                totalWatchTime: 0,
                category: "adult",
                chapters: [],
                moments: [],
                metaTags: [
                  {
                    property: "description",
                    value: "description",
                  },
                ],
              },
            ]);
          } else {
            const info = JSON.parse(response.body);
            let list = info["items"].filter((item) => {
              return item.status == 4;
            });
            callback(error, list);
          }
        });
      },
    },
    function (err, result) {
      console.log(result);
      if (err) {
        res
          .status(500)
          .json({ message: "Something went wrong, please try again." });
      } else {
        res.json(result);
      }
    }
  );
};

exports.getUpcomings = async (req, res) => {
  Broadcast.findUpcoming((err, broadcasts) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again." });
    } else {
      let data = Array.isArray(broadcasts)
        ? broadcasts.map((broadcast) => {
            broadcast.embedUrl =
              "https://player.castr.com/" + broadcast.embedUrl.split("?")[0];
            return broadcast;
          })
        : [];
      res.json(data);
    }
  });
};

exports.getHomes = async (req, res) => {
  async.parallel(
    {
      live: function (callback) {
        async.parallel(
          {
            broadcasters: function (callback) {
              Broadcaster.findLive((err, data) => {
                callback(err, data);
              });
            },
            broadcasts: function (callback) {
              Broadcast.findLive((err, data) => {
                callback(err, data);
              });
            },
            teams: function (callback) {
              Team.findLive((err, data) => {
                callback(err, data);
              });
            },
          },
          function (err, result) {
            if (err) {
              callback(err, null);
            } else {
              let liveStreams = [];
              for (const index in result["broadcasts"]) {
                liveStreams.push({
                  ...result["broadcasts"][index],
                  type: "broadcast",
                });
              }
              for (const index in result["broadcasters"]) {
                liveStreams.push({
                  ...result["broadcasters"][index],
                  type: "broadcaster",
                });
              }
              for (const index in result["teams"]) {
                liveStreams.push({ ...result["teams"][index], type: "team" });
              }
              callback(err, liveStreams.slice(0, 5));
            }
          }
        );
      },

      upcoming: function (callback) {
        Broadcast.findUpcoming((err, broadcasts) => {
          if (err) {
            callback(err, null);
          } else {
            let data = Array.isArray(broadcasts)
              ? broadcasts.map((broadcast) => {
                  broadcast.embedUrl =
                    "https://player.castr.com/" +
                    broadcast.embedUrl.split("?")[0];
                  return broadcast;
                })
              : [];

            callback(err, data.slice(0, 5));
          }
        });
      },

      archive: function (callback) {
        var options = {
          method: "GET",
          url: "http://video.bunnycdn.com/library/99534/videos?orderBy=views",
          headers: {
            accept: "application/json",
            AccessKey: "985126ef-827f-45b2-ac9aa63d0410-edba-430b",
          },
        };
        request(options, function (error, response) {
          if (error) {
            // callback(error, []);
            callback(null, [
              {
                videoLibraryId: 99534,
                guid: "ca8a119a-30a8-4fe6-9b7f-9fbb4894eca3",
                title: "Test",
                dateUploaded: "2023-03-07T18:01:28.36",
                views: 0,
                isPublic: false,
                length: 101,
                status: 4,
                framerate: 29.97,
                width: 1280,
                height: 720,
                availableResolutions: "360p,480p,720p",
                thumbnailCount: 52,
                encodeProgress: 100,
                storageSize: 43704046,
                captions: [],
                hasMP4Fallback: true,
                collectionId: "",
                thumbnailFileName: "thumbnail.jpg",
                averageWatchTime: 0,
                totalWatchTime: 0,
                category: "adult",
                chapters: [],
                moments: [],
                metaTags: [
                  {
                    property: "description",
                    value: "description",
                  },
                ],
              },
            ]);
          } else {
            const info = JSON.parse(response.body);
            let list = info["items"].filter((item) => {
              return item.status == 4;
            });
            callback(error, list);
          }
        });
      },
    },
    function (err, result) {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Something went wrong, please try again." });
      } else {
        res.json(result);
      }
    }
  );
};

exports.getBroadcasterVideos = async (req, res) => {
  const { publish_point } = req.body;
  Broadcaster.findByPublishPoint(publish_point, (err, broadcaster) => {
    console.log(broadcaster);
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again." });
    } else {
      async.parallel(
        {
          live: function (callback) {
            Broadcast.findLiveByBroadcaster(
              broadcaster.id,
              (err, broadcasts) => {
                let liveStreams = [];
                for (const index in broadcasts) {
                  liveStreams.push({
                    ...broadcasts[index],
                    type: "broadcast",
                  });
                }

                if (broadcaster.stream_key && broadcaster.stream_key != "") {
                  liveStreams.push({
                    ...broadcaster,
                    type: "broadcaster",
                  });
                }
                callback(err, liveStreams);
              }
            );
          },
          upcoming: function (callback) {
            Broadcast.findUpcomingByBroadcaster(
              broadcaster.id,
              (err, broadcasts) => {
                if (err) {
                  callback(err, null);
                } else {
                  let data = Array.isArray(broadcasts)
                    ? broadcasts.map((broadcast) => {
                        broadcast.embedUrl =
                          "https://player.castr.com/" +
                          broadcast.embedUrl.split("?")[0];
                        return broadcast;
                      })
                    : [];
                  callback(err, data);
                }
              }
            );
          },
          archive: function (callback) {
            var options = {
              method: "GET",
              url: "http://video.bunnycdn.com/library/99534/videos?orderBy=views",
              headers: {
                accept: "application/json",
                AccessKey: "985126ef-827f-45b2-ac9aa63d0410-edba-430b",
              },
            };
            request(options, function (error, response) {
              if (error) {
                // callback(error, []);
                let info = {
                  totalItems: 6,
                  currentPage: 1,
                  itemsPerPage: 100,
                  items: [
                    {
                      videoLibraryId: 99534,
                      guid: "86223a81-be8a-41a4-8c3e-2e937d2e9913",
                      title: "Nostrica Day 1",
                      dateUploaded: "2023-03-22T22:20:08.066",
                      views: 0,
                      isPublic: false,
                      length: 100,
                      status: 4,
                      framerate: 25.017,
                      width: 1920,
                      height: 1080,
                      availableResolutions: "360p,480p,720p,1080p",
                      thumbnailCount: 50,
                      encodeProgress: 100,
                      storageSize: 445452746,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "other-people",
                      chapters: [],
                      moments: [],
                      metaTags: [],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "6a82ce8b-731d-4e2f-9fdf-186ea0b5c7b8",
                      title: "Test",
                      dateUploaded: "2023-03-22T07:17:47.422",
                      views: 0,
                      isPublic: false,
                      length: 6,
                      status: 4,
                      framerate: 25,
                      width: 1280,
                      height: 720,
                      availableResolutions: "360p,480p,720p",
                      thumbnailCount: 3,
                      encodeProgress: 100,
                      storageSize: 9588371,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "animated",
                      chapters: [],
                      moments: [],
                      metaTags: [],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "95d24f6f-ace0-4b5f-a084-6893f485d33d",
                      title: "Funk Town",
                      dateUploaded: "2023-03-21T02:27:37.838",
                      views: 0,
                      isPublic: false,
                      length: 115,
                      status: 4,
                      framerate: 30,
                      width: 1920,
                      height: 1080,
                      availableResolutions: "360p,480p,720p,1080p",
                      thumbnailCount: 58,
                      encodeProgress: 100,
                      storageSize: 307329771,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "gaming",
                      chapters: [],
                      moments: [],
                      metaTags: [
                        {
                          property: "broadcaster",
                          value: "101",
                        },
                        {
                          property: "description",
                          value: "Funky Music",
                        },
                      ],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "8c8d098f-dc55-4daf-a0dc-15df5816e304",
                      title: "Nostr",
                      dateUploaded: "2023-03-21T01:51:18.262",
                      views: 0,
                      isPublic: false,
                      length: 19,
                      status: 4,
                      framerate: 30,
                      width: 1920,
                      height: 1080,
                      availableResolutions: "360p,480p,720p,1080p",
                      thumbnailCount: 10,
                      encodeProgress: 100,
                      storageSize: 39976360,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "other-people",
                      chapters: [],
                      moments: [],
                      metaTags: [
                        {
                          property: "broadcaster",
                          value: "101",
                        },
                        {
                          property: "description",
                          value: "Nostr Costa Rica Event",
                        },
                      ],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "1508cbef-c623-4d3a-b503-a1378ed7d79f",
                      title: "Nostrica MArch 19 2023 Open Source",
                      dateUploaded: "2023-03-21T01:49:54.092",
                      views: 0,
                      isPublic: false,
                      length: 0,
                      status: 6,
                      framerate: 0,
                      width: 0,
                      height: 0,
                      availableResolutions: null,
                      thumbnailCount: 0,
                      encodeProgress: 0,
                      storageSize: 0,
                      captions: [],
                      hasMP4Fallback: false,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "unknown",
                      chapters: [],
                      moments: [],
                      metaTags: [],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "3d26b304-e045-464e-9db7-75b851a90d88",
                      title: "Nostrica MArch 19 2023 Open Source",
                      dateUploaded: "2023-03-21T01:46:11.256",
                      views: 0,
                      isPublic: false,
                      length: 0,
                      status: 6,
                      framerate: 0,
                      width: 0,
                      height: 0,
                      availableResolutions: null,
                      thumbnailCount: 0,
                      encodeProgress: 0,
                      storageSize: 0,
                      captions: [],
                      hasMP4Fallback: false,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "unknown",
                      chapters: [],
                      moments: [],
                      metaTags: [],
                      transcodingMessages: [],
                    },
                  ],
                };
                let videos = [];
                for (const item of info["items"]) {
                  let flag = false;
                  for (const tag of item.metaTags) {
                    if (
                      tag.property == "broadcaster" &&
                      tag.value == "" + broadcaster.id
                    ) {
                      flag = true;
                      break;
                    }
                  }
                  if (flag == true && item.status == 4) {
                    videos.push(item);
                  }
                }
                callback(null, videos);
              } else {
                let videos = [];
                const info = JSON.parse(response.body);

                for (const item of info["items"]) {
                  let flag = false;
                  for (const tag of item.metaTags) {
                    if (
                      tag.property == "broadcaster" &&
                      tag.value == "" + broadcaster.id
                    ) {
                      flag = true;
                      break;
                    }
                  }
                  if (flag == true && item.status == 4) {
                    videos.push(item);
                  }
                }
                callback(error, info["items"]);
              }
            });
          },
        },
        function (err, result) {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ message: "Something went wrong, please try again." });
          } else {
            res.json(result);
          }
        }
      );
    }
  });
};

exports.getTeamVideos = async (req, res) => {
  const { publish_point } = req.body;
  Team.findByPublishPoint(publish_point, (err, team) => {
    console.log(team);
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again." });
    } else {
      async.parallel(
        {
          live: function (callback) {
            Broadcast.findLiveByTeam(team.id, (err, broadcasts) => {
              let liveStreams = [];
              for (const index in broadcasts) {
                liveStreams.push({
                  ...broadcasts[index],
                  type: "broadcast",
                });
              }

              if (team.stream_key && team.stream_key != "") {
                liveStreams.push({
                  ...team,
                  type: "team",
                });
              }
              callback(err, liveStreams);
            });
          },
          upcoming: function (callback) {
            Broadcast.findUpcomingByTeam(team.id, (err, broadcasts) => {
              if (err) {
                callback(err, null);
              } else {
                let data = Array.isArray(broadcasts)
                  ? broadcasts.map((broadcast) => {
                      broadcast.embedUrl =
                        "https://player.castr.com/" +
                        broadcast.embedUrl.split("?")[0];
                      return broadcast;
                    })
                  : [];
                callback(err, data);
              }
            });
          },
          archive: function (callback) {
            var options = {
              method: "GET",
              url: "http://video.bunnycdn.com/library/99534/videos?orderBy=views",
              headers: {
                accept: "application/json",
                AccessKey: "985126ef-827f-45b2-ac9aa63d0410-edba-430b",
              },
            };
            request(options, function (error, response) {
              if (error) {
                // callback(error, []);
                let info = {
                  totalItems: 6,
                  currentPage: 1,
                  itemsPerPage: 100,
                  items: [
                    {
                      videoLibraryId: 99534,
                      guid: "9d61bc76-6137-4366-8f23-cace8157a2ed",
                      title: "TTest",
                      dateUploaded: "2023-05-02T01:34:55.518",
                      views: 0,
                      isPublic: false,
                      length: 101,
                      status: 4,
                      framerate: 29.97,
                      width: 1280,
                      height: 720,
                      availableResolutions: "360p,480p,720p",
                      thumbnailCount: 52,
                      encodeProgress: 100,
                      storageSize: 43699013,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "adult",
                      chapters: [],
                      moments: [],
                      metaTags: [
                        {
                          property: "away",
                          value: "47",
                        },
                        {
                          property: "broadcaster",
                          value: "150",
                        },
                        {
                          property: "description",
                          value: "test",
                        },
                        {
                          property: "home",
                          value: "11",
                        },
                      ],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "cedcc50c-549a-4bd1-9102-476af6091f0e",
                      title: "Test",
                      dateUploaded: "2023-05-02T01:24:17.607",
                      views: 0,
                      isPublic: false,
                      length: 101,
                      status: 4,
                      framerate: 29.97,
                      width: 1280,
                      height: 720,
                      availableResolutions: "360p,480p,720p",
                      thumbnailCount: 52,
                      encodeProgress: 100,
                      storageSize: 43707919,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "adult",
                      chapters: [],
                      moments: [],
                      metaTags: [
                        {
                          property: "away",
                          value: "74",
                        },
                        {
                          property: "broadcaster",
                          value: "627",
                        },
                        {
                          property: "description",
                          value: "test",
                        },
                        {
                          property: "home",
                          value: "39",
                        },
                      ],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "86223a81-be8a-41a4-8c3e-2e937d2e9913",
                      title: "Nostrica Day 1",
                      dateUploaded: "2023-03-22T22:20:08.066",
                      views: 0,
                      isPublic: false,
                      length: 100,
                      status: 4,
                      framerate: 25.017,
                      width: 1920,
                      height: 1080,
                      availableResolutions: "360p,480p,720p,1080p",
                      thumbnailCount: 50,
                      encodeProgress: 100,
                      storageSize: 445452746,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "other-people",
                      chapters: [],
                      moments: [],
                      metaTags: [],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "6a82ce8b-731d-4e2f-9fdf-186ea0b5c7b8",
                      title: "Test",
                      dateUploaded: "2023-03-22T07:17:47.422",
                      views: 0,
                      isPublic: false,
                      length: 6,
                      status: 4,
                      framerate: 25,
                      width: 1280,
                      height: 720,
                      availableResolutions: "360p,480p,720p",
                      thumbnailCount: 3,
                      encodeProgress: 100,
                      storageSize: 9588371,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "animated",
                      chapters: [],
                      moments: [],
                      metaTags: [
                        {
                          property: "broadcaster",
                          value: "101",
                        },
                        {
                          property: "description",
                          value: "test",
                        },
                      ],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "95d24f6f-ace0-4b5f-a084-6893f485d33d",
                      title: "Funk Town",
                      dateUploaded: "2023-03-21T02:27:37.838",
                      views: 0,
                      isPublic: false,
                      length: 115,
                      status: 4,
                      framerate: 30,
                      width: 1920,
                      height: 1080,
                      availableResolutions: "360p,480p,720p,1080p",
                      thumbnailCount: 58,
                      encodeProgress: 100,
                      storageSize: 307329771,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "gaming",
                      chapters: [],
                      moments: [],
                      metaTags: [
                        {
                          property: "broadcaster",
                          value: "101",
                        },
                        {
                          property: "description",
                          value: "Funky Music",
                        },
                      ],
                      transcodingMessages: [],
                    },
                    {
                      videoLibraryId: 99534,
                      guid: "8c8d098f-dc55-4daf-a0dc-15df5816e304",
                      title: "Nostr",
                      dateUploaded: "2023-03-21T01:51:18.262",
                      views: 0,
                      isPublic: false,
                      length: 19,
                      status: 4,
                      framerate: 30,
                      width: 1920,
                      height: 1080,
                      availableResolutions: "360p,480p,720p,1080p",
                      thumbnailCount: 10,
                      encodeProgress: 100,
                      storageSize: 39976360,
                      captions: [],
                      hasMP4Fallback: true,
                      collectionId: "",
                      thumbnailFileName: "thumbnail.jpg",
                      averageWatchTime: 0,
                      totalWatchTime: 0,
                      category: "other-people",
                      chapters: [],
                      moments: [],
                      metaTags: [
                        {
                          property: "broadcaster",
                          value: "101",
                        },
                        {
                          property: "description",
                          value: "Nostr Costa Rica Event",
                        },
                      ],
                      transcodingMessages: [],
                    },
                  ],
                };
                let videos = [];
                for (const item of info["items"]) {
                  let flag = false;
                  for (const tag of item.metaTags) {
                    if (
                      (tag.property == "away" || tag.property == "home") &&
                      tag.value == "" + team.id
                    ) {
                      flag = true;
                      break;
                    }
                  }
                  if (flag == true) {
                    videos.push(item);
                  }
                }
                callback(null, videos);
              } else {
                let videos = [];
                const info = JSON.parse(response.body);

                for (const item of info["items"]) {
                  let flag = false;
                  for (const tag of item.metaTags) {
                    if (
                      (tag.property == "away" || tag.property == "home") &&
                      tag.value == "" + team.id
                    ) {
                      flag = true;
                      break;
                    }
                  }
                  if (flag == true && item.status == 4) {
                    videos.push(item);
                  }
                }
                callback(error, info["items"]);
              }
            });
          },
        },
        function (err, result) {
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({ message: "Something went wrong, please try again." });
          } else {
            res.json(result);
          }
        }
      );
    }
  });
};

exports.getStreamInfo = async (req, res) => {
  const { id, type } = req.body;
  const user_id = req.session.getUserId();
  let purchaseStatus = false;

  User.purchaseLiveState(user_id, id, type, (err, purchased) => {
    if (purchased) {
      purchaseStatus = true;
    }
  })

  if (type == "team") {
    async.waterfall(
      [
        function (callback) {
          Team.findById(id, (err, team) => {
            callback(err, team);
          });
        },
        function (team, callback) {
          var options = {
            method: "GET",
            url: "https://api.castr.io/streams/" + team.stream_id + "/hlsurl",
            headers: {
              "x-api-key": "castrkey_746f9270-46d9-11ed-a53f-4302cc64d24c",
            },
          };
          request(options, function (error, response) {
            const res = JSON.parse(response.body);
            callback(error, { team, hlsUrl: res.hlsUrl });
          });
        },
      ],
      function (err, result) {
        if (err) {
          res
            .status(500)
            .json({ message: "Something went wrong, please try again." });
        } else {
          purchaseStatus? res.json({...result, purchased:true}):res.json({...result, purchased:false});
        }
      }
    );
  } else if (type == "broadcast") {
    async.waterfall(
      [
        function (callback) {
          Broadcast.findById(id, (err, broadcast) => {
            callback(err, broadcast);
          });
        },
        function (broadcast, callback) {
          if (broadcast.broadcaster_id) {
            Broadcaster.findById(
              broadcast.broadcaster_id,
              (err, broadcaster) => {
                callback(err, { ...broadcast, broadcaster });
              }
            );
          } else {
            callback(null, broadcast);
          }
        },
        function (broadcast, callback) {
          var options = {
            method: "GET",
            url:
              "https://api.castr.io/streams/" + broadcast.stream_id + "/hlsurl",
            headers: {
              "x-api-key": "castrkey_746f9270-46d9-11ed-a53f-4302cc64d24c",
            },
          };
          request(options, function (error, response) {
            const res = JSON.parse(response.body);
            callback(error, { ...broadcast, hlsUrl: res.hlsUrl });
          });
        },
      ],
      function (err, result) {
        if (err) {
          res
            .status(500)
            .json({ message: "Something went wrong, please try again." });
        } else {
          purchaseStatus? res.json({...result, purchased:true}):res.json({...result, purchased:false});
        }
      }
    );
  } else if (type == "broadcaster") {
    async.waterfall(
      [
        function (callback) {
          Broadcaster.findById(id, (err, broadcaster) => {
            callback(err, broadcaster);
          });
        },
        function (broadcaster, callback) {
          var options = {
            method: "GET",
            url:
              "https://api.castr.io/streams/" +
              broadcaster.stream_id +
              "/hlsurl",
            headers: {
              "x-api-key": "castrkey_746f9270-46d9-11ed-a53f-4302cc64d24c",
            },
          };
          request(options, function (error, response) {
            const res = JSON.parse(response.body);
            callback(error, { broadcaster, hlsUrl: res.hlsUrl });
          });
        },
      ],
      function (err, result) {
        if (err) {
          res
            .status(500)
            .json({ message: "Something went wrong, please try again." });
        } else {
          purchaseStatus? res.json({...result, purchased:true}):res.json({...result, purchased:false});
        }
      }
    );
  } else {
    res
      .status(500)
      .json({ message: "Something went wrong, please try again." });
  }
};

exports.getArchiveInfo = async (req, res) => {
    
  const { id, type } = req.body;
  const user_id = req.session.getUserId();
        
  User.purchaseVideoState(user_id, req.body, (err, purchased) => {
    if (purchased) {
      var options = {
        method: "GET",
        url: "http://video.bunnycdn.com/library/99534/videos/" + id,
        headers: {
          accept: "application/json",
          AccessKey: "985126ef-827f-45b2-ac9aa63d0410-edba-430b",
        },
      };
      request(options, function (error, response) {
        if (error) {
          // callback(error, []);
          // res
          // .status(500)
          // .json({ message: "Something went wrong, please try again." });
          console.log(error, '=============')
          info = {
            videoLibraryId: 99534,
            guid: "97b3ca9a-7907-475d-92ed-a00bd286392b",
            title: "Nostrica Archive test",
            dateUploaded: "2023-03-09T21:45:06.796",
            views: 0,
            isPublic: false,
            length: 184,
            status: 4,
            framerate: 25,
            width: 640,
            height: 480,
            availableResolutions: "360p,480p",
            thumbnailCount: 92,
            encodeProgress: 100,
            storageSize: 98923621,
            captions: [],
            hasMP4Fallback: true,
            collectionId: "",
            thumbnailFileName: "thumbnail.jpg",
            averageWatchTime: 0,
            totalWatchTime: 0,
            category: "animated",
            chapters: [],
            moments: [],
            metaTags: [
              {
                property: "broadcaster",
                value: "627",
              },
              {
                property: "description",
                value: "test of nostrica broadcast",
              },
            ],
          };
          let description = "";
          for (const tag of info.metaTags) {
            if (tag.property == "broadcaster") {
              Broadcaster.findById(tag.value, (err, data) => {
                res.json({
                  hlsUrl:
                    "https://vz-7ab8c5be-62f.b-cdn.net/" + id + "/playlist.m3u8",
                  poster:
                    "https://dashboard.playfullscreen.a2hosted.com" +
                    "/images/" +
                    id +
                    ".png",
                  title: info.title,
                  description,
                  length: info.length,
                  broadcaster: data,
                  purchased: true,
                  price: purchased.price
                });
              });
            } else if (tag.property == "description") {
              description = tag.value;
            }
          }
        } else {
          console.log('success', '=============')
          
          const info = JSON.parse(response.body);
          for (const tag of info.metaTags) {
            if (tag.property == "broadcaster") {
              Broadcaster.findById(tag.value, (err, data) => {
                res.json({
                  hlsUrl:
                    "https://vz-7ab8c5be-62f.b-cdn.net/" + id + "/playlist.m3u8",
                  poster:
                    "https://dashboard.playfullscreen.a2hosted.com" +
                    "/images/" +
                    id +
                    ".png",
                  title: info.title,
                  length: info.length,
                  broadcaster: data,
                  purchased: true,
                  price: response.cost
                });
              });
              break;
            }
          }
        }
      });
    }
    else
    {
      res.json({
        hlsUrl: id,
        poster: "",
        title: '',
        length: '',
        broadcaster: '',
        purchased: false,
        price: 0
      });
    }
  })
};

exports.getPackageInfo = async (req, res) => {
  const {id, type} = req.body;

  Broadcaster.getPackages(id, type, (err, packages) => {
    if (packages) {
      res.json({packages});
    } else {
      res.status(500).json({message:'something went wrong'})
    }

    res.end()
  })

}