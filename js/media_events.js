const video = document.querySelector("#video");
const rateChangeButton = document.querySelector("#rateChangeBtn");

const onProgress = () => console.log("progress");
const onStalled = () => console.log("stalled");
const onSuspend = () => console.log("suspend");
const onLoadStart = () => console.log("load start");
const onAbort = () => console.log("abort");
const onLoadedMetaData = () => console.log("loaded metadata");
const onLoadedData = () => console.log("loaded data");
const onCanPlay = () => console.log("can play");
const onCanPlayThrough = () => console.log("can play through");
const onError = () => console.log("error");
const onPlay = () => console.log("play");
const onPlaying = () => console.log("playing");
const onPause = () => console.log("pause");
const onEnded = () => console.log("ended");
const onTimeUpdate = () => console.log("time update");
const onVolumeChange = () => console.log("volume change");
const onRateChange = () => console.log("rate change");
const onRateUpdate = () => video.playbackRate = 0.5;
const onDurationChange = () => console.log("duration change");
const onCueChange = () => console.log("cue change");
const onSeeking = () => console.log("seeking");
const onSeeked = () => console.log("seeked");
const onWaiting = () => console.log("buffering");
const onEmptied = () => console.log("emptied");

const init = () => {
  video?.addEventListener("progress", onProgress);
  video?.addEventListener("stalled", onStalled);
  video?.addEventListener("suspend", onSuspend);
  video?.addEventListener("loadstart", onLoadStart);
  video?.addEventListener("abort", onAbort); 
  video?.addEventListener("loadeddata", onLoadedData);
  video?.addEventListener("loadedmetadata", onLoadedMetaData);
  video?.addEventListener("canplay", onCanPlay);
  video?.addEventListener("canplaythrough", onCanPlayThrough);
  video?.addEventListener("error", onError);
  video?.addEventListener("play", onPlay);
  video?.addEventListener("playing", onPlaying);
  video?.addEventListener("pause", onPause);
  video?.addEventListener("ended", onEnded);
  video?.addEventListener("timeupdate", onTimeUpdate);
  video?.addEventListener("volumechange", onVolumeChange);
  video?.addEventListener("ratechange", onRateChange);
  rateChangeButton?.addEventListener("click", onRateUpdate);
  video?.addEventListener("durationchange", onDurationChange);
  video?.addEventListener("cuechange", onCueChange);
  video?.addEventListener("seeking", onSeeking);
  video?.addEventListener("seeked", onSeeked);
  video?.addEventListener("waiting", onWaiting);
  video?.addEventListener("emptied", onEmptied);
}

init();
