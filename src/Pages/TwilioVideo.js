import React, { Component } from 'react'
import Video from 'twilio-video';
import axios from 'axios';
import './global.css';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

class VideoChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      identity: null,
      peerUserId: 0,
      peerIdentity: "",
      roomName: 'devdigital',
      roomNameErr: false, // Track error for room name TextField
      previewTracks: null,
      localMediaAvailable: false,
      hasJoinedRoom: false,
      hasParticipantsJoinedRoom: false,
      activeRoom: '', // Track the current active room
      jwt: ''
    }

    this.joinRoom = this.joinRoom.bind(this);
    this.roomJoined = this.roomJoined.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
    this.detachTracks = this.detachTracks.bind(this);
    this.detachParticipantTracks = this.detachParticipantTracks.bind(this);
  }

  getTwillioToken = () => {
    const currentUserName = this.refs["yourname"].value;
    if (currentUserName.length === 0) {
      ToastsStore.error("Please enter the username!");
      return;
    }

    axios.get('/token/' + currentUserName).then(results => {
      const { identity, jwt } = results.data;
      this.setState(
        {
          identity,
          jwt
        }, () => {
          if (jwt.length === 0 || identity.length === 0) {
            ToastsStore.error("Issue to fetch token!");
          } else {
            this.setState({ userName: currentUserName });
          }
        });
    });
  }

  joinRoom() {
    if (!this.state.roomName.trim()) {
      this.setState({ roomNameErr: true });
      return;
    }

    console.log("Joining room '" + this.state.roomName + "'...");
    let connectOptions = {
      name: this.state.roomName
    };

    if (this.state.previewTracks) {
      connectOptions.tracks = this.state.previewTracks;
    }

    // Join the Room with the token from the server and the
    // LocalParticipant's Tracks.
    Video.connect(this.state.jwt, connectOptions).then(this.roomJoined, error => {
      ToastsStore.error('Please verify your connection of webcam!');
      ToastsStore.error('Webcam-Video permission should not block!');
    });
  }

  attachTracks(tracks, container) {
    tracks.forEach(track => {
      container.appendChild(track.attach());
    });
  }

  // Attaches a track to a specified DOM container
  attachParticipantTracks(participant, container) {
    var tracks = Array.from(participant.tracks.values());
    this.attachTracks(tracks, container);
  }

  detachTracks(tracks) {
    tracks.forEach(track => {
      track.detach().forEach(detachedElement => {
        detachedElement.remove();
      });
    });
  }

  detachParticipantTracks(participant) {
    var tracks = Array.from(participant.tracks.values());
    this.detachTracks(tracks);
  }

  roomJoined(room) {
    // Called when a participant joins a room
    console.log("Joined as '" + this.state.identity + "'");
    this.setState({
      activeRoom: room,
      localMediaAvailable: true,
      hasJoinedRoom: true
    });

    // Attach LocalParticipant's Tracks, if not already attached.
    var previewContainer = this.refs.groupChat_localMedia;
    console.log('previewContainer.querySelector(video)', previewContainer.querySelector('.video'));

    if (!previewContainer.querySelector('.video')) {
      this.attachParticipantTracks(room.localParticipant, this.refs.groupChat_localMedia);
    }
  }


  render() {

    /* Hide 'Join Room' button if user has already joined a room */
    let joinOrLeaveRoomButton = this.state.hasJoinedRoom ? (
      <button className="btn btn-warning" onClick={this.leaveRoom} > Leave Room</button>
    ) : (
        <button className="btn btn-success ml-2" onClick={this.getTwillioToken} >Join Room</button>
      );
    /** */

    return (
      <React.Fragment>
        <div className="container">
          <a target="_blank" href="https://github.com/ankitkanojia/twillio_videochat"><img className="githubribbon attachment-full size-full" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149" alt="Fork me on GitHub" data-recalc-dims="1" /></a>
          <h2 className="mt-2">Twillio Real-Time Programmable Video</h2>
          {!this.state.hasJoinedRoom &&
            <div className="row">
              <div className="col-3 form-inline">
                <div className="form-group mt-2">
                  <input className="form-control" type="text" ref="yourname" />  {joinOrLeaveRoomButton}
                </div>
              </div>
            </div>
          }
          <div className="row mt-3">
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <div ref="groupChat_localMedia"></div>
                  <div className="text-center">
                    {!this.state.hasJoinedRoom && <Loader type="Puff" color="#00BFFF" />}
                  </div>
                </div>
                <div className="card-footer">{this.state.hasJoinedRoom ? <button className="btn btn-warning" onClick={this.leaveRoom} > Leave Room</button> : <span>&nbsp;</span>}</div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <div ref="remoteMedia"></div>
                  <div className="text-center">
                    {!this.state.hasParticipantsJoinedRoom && !this.state.peerIdentity && <Loader type="Puff" color="#00BFFF" />}
                  </div>
                </div>
                <div className="card-footer text-center">
                  {(!this.state.hasParticipantsJoinedRoom && !this.state.peerIdentity) ? <span>Wait for peer user to connect channel  !!!</span> : <span>Peer User Name : {`${this.state.peerIdentity}`}</span >}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastsContainer store={ToastsStore} />
      </React.Fragment>
    )
  }
}

export default VideoChat;