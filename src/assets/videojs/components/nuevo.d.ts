import { VideoJsPlayer, VideoJsPlayerOptions } from 'video.js';

declare module 'video.js' {
  export interface VideoJsPlayer {
   nuevo(options: nuevoOptions): void;
   loadTracks(tracks?:any): void;
   setSource(sources?:any): void;
   changeSource(sources?:any): void;
   related():void;
   share():void;
   reind():void;
   forward():void;
   snapshot():void;
   thumbnails(thumbnails?:any):void;
   playlist:any;
   visualizer(options?:any): void;
   offline:any;
   vroll(list?:any): void;
   hlsjs:any;
   ima:any;
   chromecast:any;
   vastAds:any;
  }
 
}


export interface nuevoOptions {
	
  logo?:string;
  logoposition?:string;
  logooffsetX?:number;
  logooffsetY?:number;
  logourl?:string;
  related?:any[] | undefined;
  audioInfo?:any | undefined;
  target?:string;
  settingsButton?:boolean;
  relatedMenu?:boolean;
  rateMenu?:boolean;
  shareMenu?:boolean;
  qualityMenu?:boolean;
  pipButton?:boolean;
  buttonRewind?:boolean;
  buttonForward?:boolean;
  rewindforward?:number;
  contextMenu?:boolean;
  url?:string;
  title?:string;
  metatitle?:string;
  metasubtitle?:string;
  description?:string;
  embed?:string;
  endAction?:string;
  pubid?:string;
  slideImage?:string | undefined;
  slideWidth?:number;
  slideHeight?:number;
  slideType?:string;
  currentSlide?:string;
  limit?:number;
  limitmessage?:string;
  videoInfo?:boolean;
  infoTitle?:string;
  infoDescription?:string;
  infoUrl?:string;
  infoSize?:number;
  infoIcon?:string;
  infoFont?:string;
  infoBold?:string;
  infoBottom?:boolean;
  zoomMenu?:boolean;
  zoomInfo?:boolean;
  rate?:number;
  chapterMarkers?:boolean,
  timetooltip?:boolean,
  captionsSettings?:any[] | undefined;
  mousedisplay?:boolean;
  errordisplay?:boolean;
  resume?:boolean;
  video_id?:string;
  playlistID?:string;
  playlistMaxH?:number;
  playlistUI?:boolean;
  playlistShow?:boolean;
  playlistAutoHide?:boolean;
  playlistNavigation?:boolean;
  playlistRepeat?:boolean;
  playlist?:boolean;
  contextText?:string;
  contextUrl?:string;
  contextHTML?:string;
  snapshot?:boolean;
  snapshotType?:string;
  snapshotWatermark?:string;
  ghostThumb?:boolean;
  minhd?:number;
  liveReconnect?:boolean;
  singlePlay?:boolean;
  captionsSize?:number;
  tooltips?:boolean;
}