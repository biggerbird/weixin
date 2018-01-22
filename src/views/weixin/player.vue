<template>
        <div class="player">
          <video-player class="vjs-custom-skin" 
                        :options="playerOptions"
                        @ready="playerReadied">
          </video-player>
          <video-player class="vjs-custom-skin" 
                        :options="playerOptions"
                        @ready="playerReadied2">
          </video-player>
        </div>
</template>

<script>
  // export
  export default {
    data() {
      return {
        playerOptions: {
          // videojs and plugin options
          height: '360',
          sources: [{
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "http://9342.liveplay.myqcloud.com/live/9342_6b0caab10c.m3u8"
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false
          },
          flash: { hls: { withCredentials: false }},
          html5: { hls: { withCredentials: false }},
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
        },
        playerOptions2: {
          height: '360',
          sources: [{
            type: "rtmp/mp4",
            src: "http://9342.liveplay.myqcloud.com/live/9342_6e4b951ad9.flv"
          }],
          techOrder: ['flash'],
          autoplay: false,
          controls: true,
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-9.jpg"
        }
      }
    },
    methods: {
      playerReadied(player) {
        var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
        player.tech_.hls.xhr.beforeRequest = function(options) {
          // console.log(options)
          return options
        }
      }
    }
  }
</script>