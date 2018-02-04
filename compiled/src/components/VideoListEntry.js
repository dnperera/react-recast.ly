"use strict";

var VideoListEntry = function VideoListEntry(_ref) {
  var video = _ref.video,
      handleVideoListEntryTitleClick = _ref.handleVideoListEntryTitleClick;
  return React.createElement(
    "div",
    { className: "video-list-entry media" },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "media-object", src: video.snippet.thumbnails.default.url, alt: "" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        {
          className: "video-list-entry-title",
          onClick: function onClick() {
            handleVideoListEntryTitleClick(video);
          } },
        video.snippet.title
      ),
      React.createElement(
        "div",
        { className: "video-list-entry-detail" },
        video.snippet.description
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInZpZGVvIiwiaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrIiwic25pcHBldCIsInRodW1ibmFpbHMiLCJkZWZhdWx0IiwidXJsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBU0MsOEJBQVQsUUFBU0EsOEJBQVQ7QUFBQSxTQUNuQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSx5QkFBZjtBQUNFLG1DQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLRCxNQUFNRSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUFwRSxFQUF5RSxLQUFJLEVBQTdFO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFVLHdCQURaO0FBRUUsbUJBQVMsbUJBQU07QUFBQ0osMkNBQStCRCxLQUEvQjtBQUFzQyxXQUZ4RDtBQUdHQSxjQUFNRSxPQUFOLENBQWNJO0FBSGpCLE9BREY7QUFNRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFmO0FBQTBDTixjQUFNRSxPQUFOLENBQWNLO0FBQXhEO0FBTkY7QUFKRixHQURtQjtBQUFBLENBQXJCOztBQWdCQTtBQUNBO0FBQ0FSLGVBQWVTLFNBQWYsR0FBMkI7QUFDekJSLFNBQU9TLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCOztBQUlBO0FBQ0E7QUFDQUMsT0FBT2QsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiVmlkZW9MaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVmlkZW9MaXN0RW50cnkgPSAoeyB2aWRlbyxoYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2sgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnkgbWVkaWFcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17dmlkZW8uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsfSBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS10aXRsZVwiIFxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7aGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrKHZpZGVvKX19PlxuICAgICAgICB7dmlkZW8uc25pcHBldC50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LWRldGFpbFwiPnt2aWRlby5zbmlwcGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5WaWRlb0xpc3RFbnRyeSA9IFZpZGVvTGlzdEVudHJ5O1xuIl19