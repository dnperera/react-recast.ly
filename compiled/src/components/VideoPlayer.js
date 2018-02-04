"use strict";

var VideoPlayer = function VideoPlayer(_ref) {
  var video = _ref.video;
  return React.createElement(
    "div",
    { className: "video-player" },
    React.createElement(
      "div",
      { className: "embed-responsive embed-responsive-16by9" },
      React.createElement("iframe", { className: "embed-responsive-item", src: "https://www.youtube.com/embed/" + video.id.videoId, allowFullScreen: true })
    ),
    React.createElement(
      "div",
      { className: "video-player-details" },
      React.createElement(
        "h3",
        null,
        video.snippet.title,
        "e"
      ),
      React.createElement(
        "div",
        null,
        video.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInZpZGVvIiwiaWQiLCJ2aWRlb0lkIiwic25pcHBldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsU0FDaEI7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx5Q0FBZjtBQUNFLHNDQUFRLFdBQVUsdUJBQWxCLEVBQTBDLHdDQUFzQ0EsTUFBTUMsRUFBTixDQUFTQyxPQUF6RixFQUFvRyxxQkFBcEc7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxzQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLRixjQUFNRyxPQUFOLENBQWNDLEtBQW5CO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQU1KLGNBQU1HLE9BQU4sQ0FBY0U7QUFBcEI7QUFGRjtBQUpGLEdBRGdCO0FBQUEsQ0FBbEI7O0FBWUE7QUFDQTtBQUNBTixZQUFZTyxTQUFaLEdBQXdCO0FBQ3RCTixTQUFPTyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFEUixDQUF4Qjs7QUFJQTtBQUNBO0FBQ0FDLE9BQU9aLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlZpZGVvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFZpZGVvUGxheWVyID0gKHt2aWRlb30pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvLmlkLnZpZGVvSWR9YH0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLWRldGFpbHNcIj5cbiAgICAgIDxoMz57dmlkZW8uc25pcHBldC50aXRsZX1lPC9oMz5cbiAgICAgIDxkaXY+e3ZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuLy8gUHJvcFR5cGVzIHRlbGwgb3RoZXIgZGV2ZWxvcGVycyB3aGF0IGBwcm9wc2AgYSBjb21wb25lbnQgZXhwZWN0c1xuLy8gV2FybmluZ3Mgd2lsbCBiZSBzaG93biBpbiB0aGUgY29uc29sZSB3aGVuIHRoZSBkZWZpbmVkIHJ1bGVzIGFyZSB2aW9sYXRlZFxuVmlkZW9QbGF5ZXIucHJvcFR5cGVzID0ge1xuICB2aWRlbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlZpZGVvUGxheWVyID0gVmlkZW9QbGF5ZXI7XG4iXX0=