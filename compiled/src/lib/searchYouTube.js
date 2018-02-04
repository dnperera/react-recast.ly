'use strict';

var searchYouTube = function searchYouTube(_ref, callback) {
  var key = _ref.key,
      query = _ref.query,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 5 : _ref$max;

  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  }).done(function (_ref2) {
    var items = _ref2.items;

    if (callback) {
      callback(items);
    }
  }).fail(function (_ref3) {
    var responseJSON = _ref3.responseJSON;

    responseJSON.error.errors.forEach(function (err) {
      return console.log(err);
    });
  });
};

window.searchYouTube = searchYouTube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VhcmNoWW91VHViZS5qcyJdLCJuYW1lcyI6WyJzZWFyY2hZb3VUdWJlIiwiY2FsbGJhY2siLCJrZXkiLCJxdWVyeSIsIm1heCIsIiQiLCJnZXQiLCJwYXJ0IiwicSIsIm1heFJlc3VsdHMiLCJ0eXBlIiwidmlkZW9FbWJlZGRhYmxlIiwiZG9uZSIsIml0ZW1zIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsImVycm9yIiwiZXJyb3JzIiwiZm9yRWFjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsZ0JBQWdCLFNBQWhCQSxhQUFnQixPQUFvQkMsUUFBcEIsRUFBaUM7QUFBQSxNQUEvQkMsR0FBK0IsUUFBL0JBLEdBQStCO0FBQUEsTUFBM0JDLEtBQTJCLFFBQTNCQSxLQUEyQjtBQUFBLHNCQUFyQkMsR0FBcUI7QUFBQSxNQUFyQkEsR0FBcUIsNEJBQWpCLENBQWlCOztBQUNuRDtBQUNBQyxJQUFFQyxHQUFGLENBQU0sOENBQU4sRUFBcUQ7QUFDcERDLFVBQU0sU0FEOEM7QUFFcERMLFNBQUtBLEdBRitDO0FBR3BETSxPQUFHTCxLQUhpRDtBQUlwRE0sZ0JBQVlMLEdBSndDO0FBS3BETSxVQUFNLE9BTDhDO0FBTXBEQyxxQkFBaUI7QUFObUMsR0FBckQsRUFPR0MsSUFQSCxDQU9RLGlCQUFZO0FBQUEsUUFBVkMsS0FBVSxTQUFWQSxLQUFVOztBQUNuQixRQUFHWixRQUFILEVBQVk7QUFDWEEsZUFBU1ksS0FBVDtBQUNBO0FBQ0QsR0FYRCxFQVlDQyxJQVpELENBWU0saUJBQWtCO0FBQUEsUUFBaEJDLFlBQWdCLFNBQWhCQSxZQUFnQjs7QUFDdkJBLGlCQUFhQyxLQUFiLENBQW1CQyxNQUFuQixDQUEwQkMsT0FBMUIsQ0FBa0MsVUFBQ0MsR0FBRDtBQUFBLGFBQVFDLFFBQVFDLEdBQVIsQ0FBWUYsR0FBWixDQUFSO0FBQUEsS0FBbEM7QUFDQSxHQWREO0FBZUQsQ0FqQkQ7O0FBbUJBRyxPQUFPdEIsYUFBUCxHQUF1QkEsYUFBdkIiLCJmaWxlIjoic2VhcmNoWW91VHViZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzZWFyY2hZb3VUdWJlID0gKHtrZXkscXVlcnksbWF4PTV9LCBjYWxsYmFjaykgPT4ge1xuICAvLyBUT0RPXG4gICQuZ2V0KCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCcse1xuICBcdHBhcnQ6ICdzbmlwcGV0JyxcbiAgXHRrZXk6IGtleSxcbiAgXHRxOiBxdWVyeSxcbiAgXHRtYXhSZXN1bHRzOiBtYXgsXG4gIFx0dHlwZTogJ3ZpZGVvJyxcbiAgXHR2aWRlb0VtYmVkZGFibGU6ICd0cnVlJ1xuICB9KS5kb25lKCh7aXRlbXN9KSA9PntcbiAgXHRpZihjYWxsYmFjayl7XG4gIFx0XHRjYWxsYmFjayhpdGVtcyk7XG4gIFx0fVxuICB9KVxuICAuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pPT57XG4gIFx0cmVzcG9uc2VKU09OLmVycm9yLmVycm9ycy5mb3JFYWNoKChlcnIpID0+Y29uc29sZS5sb2coZXJyKSk7XG4gIH0pXG59O1xuXG53aW5kb3cuc2VhcmNoWW91VHViZSA9IHNlYXJjaFlvdVR1YmU7XG4iXX0=