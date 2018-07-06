import React from 'react';
import PropsType from 'prop-types';
import like from '../../icons/like.svg';
import repo from '../../icons/repost.svg';


function Nnift(props) {
  return (
    <div className="notificationNift">
          <div className="niftHeader">
            <p>{props.date}</p>
            <div className="userDataNift">
              <img src={props.smallIcon} />
              <p>{props.name} nifted:</p>
            </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <img src={props.largeIcon} />
            <h1>{props.text}</h1>
            <div className = "interact">
              <span className= "like">
                <p>{props.likes}</p>
                <img src={like}/>
              </span>
              <span className= "repo">
                <p>{props.repost}</p>
                <img src={repo}/>
              </span>
            </div>
          </div>
          </div>
  );
}
Nnift.propTypes = {
  smallIcon: PropsType.string,
  largeIcon: PropsType.string,
  text: PropsType.string,
  name: PropsType.string,
  date: PropsType.string,
  likes: PropsType.string,
  repost: PropsType.string,
};


export default Nnift;
