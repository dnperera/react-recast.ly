"use strict";

var Search = function Search(_ref) {
  var handleSearchInputChange = _ref.handleSearchInputChange;
  return (

    //const videoSearch =_.debounce((term) =>{this.videoSearch(term)},500);
    //    //onChange={(e) => handleSearchInputChange( e.target.value )}

    React.createElement(
      "div",
      { className: "search-bar form-inline" },
      React.createElement("input", {
        className: "form-control",
        type: "text",
        onChange: function onChange(e) {
          return handleSearchInputChange(e.target.value);
        }
      }),
      React.createElement(
        "button",
        { className: "btn hidden-sm-down" },
        React.createElement("span", { className: "glyphicon glyphicon-search" })
      )
    )
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBRUMsdUJBQUYsUUFBRUEsdUJBQUY7QUFBQTs7QUFFWDtBQUNBOztBQUVBO0FBQUE7QUFBQSxRQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUNBLG1CQUFVLGNBRFY7QUFFQSxjQUFLLE1BRkw7QUFHQSxrQkFBVSxrQkFBQ0MsQ0FBRDtBQUFBLGlCQUFPRCx3QkFBeUJDLEVBQUVDLE1BQUYsQ0FBU0MsS0FBbEMsQ0FBUDtBQUFBO0FBSFYsUUFERjtBQU1FO0FBQUE7QUFBQSxVQUFRLFdBQVUsb0JBQWxCO0FBQ0Usc0NBQU0sV0FBVSw0QkFBaEI7QUFERjtBQU5GO0FBTFc7QUFBQSxDQUFiOztBQWlCQTtBQUNBO0FBQ0FDLE9BQU9MLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2ggPSAoe2hhbmRsZVNlYXJjaElucHV0Q2hhbmdlfSkgPT4gKFxuXG4gIC8vY29uc3QgdmlkZW9TZWFyY2ggPV8uZGVib3VuY2UoKHRlcm0pID0+e3RoaXMudmlkZW9TZWFyY2godGVybSl9LDUwMCk7XG4gIC8vICAgIC8vb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSggZS50YXJnZXQudmFsdWUgKX1cblxuICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICA8aW5wdXQgXG4gICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgdHlwZT1cInRleHRcIiBcbiAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlKCBlLnRhcmdldC52YWx1ZSApfVxuICAgIC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc2VhcmNoXCI+PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj4gXG4pO1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LlNlYXJjaCA9IFNlYXJjaDtcbiJdfQ==