"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getYouTubeVideos('Sri Lanka');
    }
  }, {
    key: "getYouTubeVideos",
    value: function getYouTubeVideos(query) {
      var _this2 = this;

      var options = {
        key: this.props.API_KEY,
        query: query,
        max: 5
      };

      this.props.searchYouTube(options, function (videos) {
        _this2.setState({
          videos: videos,
          currentVideo: videos[0]
        });
      });
    }
  }, {
    key: "handleVideoListEntryTitleClick",
    value: function handleVideoListEntryTitleClick(video) {
      this.setState({
        currentVideo: video
      });
    }
  }, {
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar" },
          React.createElement(Search, { handleSearchInputChange: this.getYouTubeVideos.bind(this) })
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-7" },
            React.createElement(VideoPlayer, { video: this.state.currentVideo })
          ),
          React.createElement(
            "div",
            { className: "col-md-5" },
            React.createElement(VideoList, {
              videos: this.state.videos,
              handleVideoListEntryTitleClick: this.handleVideoListEntryTitleClick.bind(this)
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZGVvcyIsImV4YW1wbGVWaWRlb0RhdGEiLCJjdXJyZW50VmlkZW8iLCJnZXRZb3VUdWJlVmlkZW9zIiwicXVlcnkiLCJvcHRpb25zIiwia2V5IiwiQVBJX0tFWSIsIm1heCIsInNlYXJjaFlvdVR1YmUiLCJzZXRTdGF0ZSIsInZpZGVvIiwiYmluZCIsImhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSwwR0FDWkEsS0FEWTs7QUFFbEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQU9DLGdCQURJO0FBRVhDLG9CQUFhRCxpQkFBaUIsQ0FBakI7QUFGRixLQUFiO0FBRmtCO0FBTW5COzs7O3dDQUNrQjtBQUNqQixXQUFLRSxnQkFBTCxDQUFzQixXQUF0QjtBQUNEOzs7cUNBRWdCQyxLLEVBQU07QUFBQTs7QUFDckIsVUFBSUMsVUFBUztBQUNYQyxhQUFNLEtBQUtSLEtBQUwsQ0FBV1MsT0FETjtBQUVYSCxlQUFRQSxLQUZHO0FBR1hJLGFBQUs7QUFITSxPQUFiOztBQU1BLFdBQUtWLEtBQUwsQ0FBV1csYUFBWCxDQUF5QkosT0FBekIsRUFBaUMsVUFBQ0wsTUFBRCxFQUFZO0FBQzNDLGVBQUtVLFFBQUwsQ0FBYztBQUNaVixrQkFBUUEsTUFESTtBQUVaRSx3QkFBZUYsT0FBTyxDQUFQO0FBRkgsU0FBZDtBQUlELE9BTEQ7QUFNRDs7O21EQUU4QlcsSyxFQUFNO0FBQ25DLFdBQUtELFFBQUwsQ0FBYztBQUNaUixzQkFBYVM7QUFERCxPQUFkO0FBR0Q7Ozs2QkFFUTs7QUFFUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFLDhCQUFDLE1BQUQsSUFBUSx5QkFBeUIsS0FBS1IsZ0JBQUwsQ0FBc0JTLElBQXRCLENBQTJCLElBQTNCLENBQWpDO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFdBQUQsSUFBYSxPQUFPLEtBQUtiLEtBQUwsQ0FBV0csWUFBL0I7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0UsZ0NBQUMsU0FBRDtBQUNFLHNCQUFRLEtBQUtILEtBQUwsQ0FBV0MsTUFEckI7QUFFRSw4Q0FBZ0MsS0FBS2EsOEJBQUwsQ0FBb0NELElBQXBDLENBQXlDLElBQXpDO0FBRmxDO0FBREY7QUFKRjtBQUpGLE9BREY7QUFrQkQ7Ozs7RUFyRGVFLE1BQU1DLFM7O0FBd0R4QjtBQUNBOzs7QUFDQUMsT0FBT25CLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciggcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZGVvczpleGFtcGxlVmlkZW9EYXRhLFxuICAgICAgY3VycmVudFZpZGVvOmV4YW1wbGVWaWRlb0RhdGFbMF1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmdldFlvdVR1YmVWaWRlb3MoJ1NyaSBMYW5rYScpO1xuICB9XG5cbiAgZ2V0WW91VHViZVZpZGVvcyhxdWVyeSl7XG4gICAgdmFyIG9wdGlvbnMgPXtcbiAgICAgIGtleSA6IHRoaXMucHJvcHMuQVBJX0tFWSxcbiAgICAgIHF1ZXJ5IDogcXVlcnksXG4gICAgICBtYXggOjVcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnNlYXJjaFlvdVR1YmUob3B0aW9ucywodmlkZW9zKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlkZW9zIDp2aWRlb3MsXG4gICAgICAgIGN1cnJlbnRWaWRlbyA6IHZpZGVvc1swXVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVmlkZW9MaXN0RW50cnlUaXRsZUNsaWNrKHZpZGVvKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRWaWRlbzp2aWRlb1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8U2VhcmNoIGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlPXt0aGlzLmdldFlvdVR1YmVWaWRlb3MuYmluZCh0aGlzKX0vPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICA8VmlkZW9QbGF5ZXIgdmlkZW89e3RoaXMuc3RhdGUuY3VycmVudFZpZGVvfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgPFZpZGVvTGlzdCBcbiAgICAgICAgICAgICAgdmlkZW9zPXt0aGlzLnN0YXRlLnZpZGVvc30gXG4gICAgICAgICAgICAgIGhhbmRsZVZpZGVvTGlzdEVudHJ5VGl0bGVDbGljaz17dGhpcy5oYW5kbGVWaWRlb0xpc3RFbnRyeVRpdGxlQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuQXBwID0gQXBwO1xuIl19