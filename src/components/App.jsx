class App extends React.Component {
  constructor( props) {
    super(props);
    this.state = {
      videos:exampleVideoData,
      currentVideo:exampleVideoData[0]
    }
  }
  componentDidMount(){
    this.getYouTubeVideos('Sri Lanka');
  }

  getYouTubeVideos(query){
    var options ={
      key : this.props.API_KEY,
      query : query,
      max :5
    }

    this.props.searchYouTube(options,(videos) => {
      this.setState({
        videos :videos,
        currentVideo : videos[0]
      })
    })
  }

  handleVideoListEntryTitleClick(video){
    this.setState({
      currentVideo:video
    })
  }

  render() {
    
    return(
      <div>
        <nav className="navbar">
          <Search handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.state.videos} 
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
            />
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
