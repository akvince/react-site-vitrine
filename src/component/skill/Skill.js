import React from 'react';
import './Skill.css';

export default class Skill extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div id="skill" className="panel part2">
        <h2 className="text-center">Compétences</h2>
        <div className="flex flex-around flex-middle font-large margin-b badge-skill">
          <div className="html text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                  <i className="fab fa-html5 badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    85%
                  </div>
                </div>
              </div>
            </div>
            <div>HTML</div>
          </div>
          <div className="css text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                  <i className="fab fa-css3-alt badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    85%
                  </div>
                </div>
              </div>
            </div>
            <div>CSS</div>
          </div>
          <div className="sass text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                <i className="fab fa-sass badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    60%
                  </div>
                </div>
              </div>
            </div>
            <div>Sass</div>
          </div>
          <div className="javascript text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                  <i className="fab fa-js badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    70%
                  </div>
                </div>
              </div>
            </div>
            <div>Javascript</div>
          </div>
        </div>
        <div className="flex flex-around flex-middle font-large badge-skill">
          <div className="gulp text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                  <i className="fab fa-gulp badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    65%
                  </div>
                </div>
              </div>
            </div>
            <div>Gulp</div>
          </div>
          <div className="ubntu text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                  <i className="fab fa-linux badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    70%
                  </div>
                </div>
              </div>
            </div>
            <div>Linux</div>
          </div>
        </div>

        <h2 className="text-center">En dehors du travail</h2>
        <div className="flex flex-around flex-middle font-large">
          <div className="muscu text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                  <i className="fas fa-dumbbell badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    <i className="fas fa-dumbbell badge"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>Musculation</div>
          </div>
          <div className="game text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                  <i className="fas fa-gamepad badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    <i className="fas fa-gamepad badge"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>Jeux vidéo</div>
          </div>
          <div className="magic text-center">
            <div className="badge">
              <div className="badge-inner">
                <div className="badge-front">
                  <i className="fab fa-wizards-of-the-coast badge"></i>
                </div>
                <div className="badge-back">
                  <div className="badge">
                    <i className="fab fa-wizards-of-the-coast badge"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>Magic</div>
          </div>
        </div>
      </div>
    );
  }

}
