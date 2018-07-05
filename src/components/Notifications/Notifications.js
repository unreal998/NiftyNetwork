import React from 'react';
import photoIcon from '../../icons/photoIcon.png';
import photoIcon2 from '../../icons/photoIcon2.png';
import photoIcon3 from '../../icons/photoIcon3.png';
import photoIconLar from '../../icons/photoIconLar.jpg';
import photoIconLar2 from '../../icons/photoIcon2Lar.png';
import photoIconLar3 from '../../icons/photoIcon3Lar.png';
import photoSmall from '../../icons/photoSmall.jpg';
import photo from '../../icons/photo.png';
import like from '../../icons/like.svg';
import repo from '../../icons/repost.svg';


import './Notification.scss';

function Notifications() {
  return (
      <div className="notificationContainer">
        <div className="nift">
          <div className="niftHeader">
            <p>23.08.2018</p>
            <div className="userDataNift">
              <img src={photoIcon} />
              <p>First and second name twitted:</p>
            </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <img src={photoIconLar} />
            <div className = "interact">
              <span className= "like">
                <p>15</p>
                <img src={like}/>
              </span>
              <span className= "repo">
                <p>2</p>
                <img src={repo}/>
              </span>
            </div>
          </div>
        </div>

        <div className="nift">
          <div className="niftHeader">
          <p>23.08.2018</p>
          <div className="userDataNift">
            <img src={photoIcon2} />
            <p>Rozetka twitted:</p>
          </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <img src={photoIconLar2} />
            <div className = "interact">
              <span className= "like">
                <p>15</p>
                <img src={like}/>
              </span>
              <span className= "repo">
                <p>2</p>
                <img src={repo}/>
              </span>
            </div>
          </div>
        </div>

        <div className="nift">
          <div className="niftHeader">
            <p>23.08.2018</p>
            <div className="userDataNift">
              <img src={photoIcon3} />
              <p>Facebook twitted:</p>
            </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <img src={photoIconLar3} />
            <div className = "interact">
              <span className= "like">
                <p>15</p>
                <img src={like}/>
              </span>
              <span className= "repo">
                <p>2</p>
                <img src={repo}/>
              </span>
            </div>
          </div>
        </div>

        <div className="nift">
          <div className="niftHeader">
          <p>23.08.2018</p>
          <div className="userDataNift">
              <img src={photoSmall} />
              <p>You twitted:</p>
          </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <img src={photo} />
            <div className = "interact">
              <span className= "like">
                <p>15</p>
                <img src={like}/>
              </span>
              <span className= "repo">
                <p>2</p>
                <img src={repo}/>
              </span>
            </div>
          </div>
        </div>

        <div className="nift">
          <div className="niftHeader">
          <p>23.08.2018</p>
          <div className="userDataNift">
              <img src={photoSmall} />
              <p>You twitted:</p>
          </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <h1>#FIRSTNIFT</h1>
            <div className = "interact">
              <span className= "like">
                <p>15</p>
               <img src={like}/>
              </span>
              <span className= "repo">
                <p>2</p>
                <img src={repo}/>
              </span>
            </div>
          </div>
        </div>

      <div className="nift">
          <div className="niftHeader">
          <p>23.08.2018</p>
          <div className="userDataNift">
              <img src={photoSmall} />
              <p>You twitted:</p>
          </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <h1>#FIRSTNIFT</h1>
            <div className = "interact">
              <span className= "like">
                <p>15</p>
                <img src={like}/>
              </span>
              <span className= "repo">
                <p>2</p>
               <img src={repo}/>
              </span>
            </div>
          </div>
        </div>

      <div className="nift">
          <div className="niftHeader">
          <p>23.08.2018</p>
          <div className="userDataNift">
              <img src={photoSmall} />
              <p>You twitted:</p>
          </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <h1>#FIRSTNIFT</h1>
            <div className = "interact">
              <span className= "like">
                <p>15</p>
                <img src={like}/>
              </span>
              <span className= "repo">
                <p>2</p>
                <img src={repo}/>
              </span>
            </div>
          </div>
        </div>
        <div className="nift">
          <div className="niftHeader">
          <p>23.08.2018</p>
          <div className="userDataNift">
              <img src={photoSmall} />
              <p>You twitted:</p>
          </div>
          </div>
          <hr/>
          <div className = "niftBody">
            <h1>#FIRSTNIFT</h1>
            <div className = "interact">
              <span className= "like">
                <p>15</p>
                <img src={like}/>
              </span>
              <span className= "repo">
                <p>2</p>
                <img src={repo}/>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Notifications;
