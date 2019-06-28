import React from 'react';
import './Skill.css';

export default class Skill extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div id="skill" class="panel part2">
        <h2 class="text-center">Compétences</h2>
        <div class="flex flex-around flex-middle font-large margin-b badge-skill">
          <div class="html text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                  <i class="fab fa-html5 badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    85%
                  </div>
                </div>
              </div>
            </div>
            <div>HTML</div>
          </div>
          <div class="css text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                  <i class="fab fa-css3-alt badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    85%
                  </div>
                </div>
              </div>
            </div>
            <div>CSS</div>
          </div>
          <div class="sass text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                <i class="fab fa-sass badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    60%
                  </div>
                </div>
              </div>
            </div>
            <div>Sass</div>
          </div>
          <div class="javascript text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                  <i class="fab fa-js badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    70%
                  </div>
                </div>
              </div>
            </div>
            <div>Javascript</div>
          </div>
        </div>
        <div class="flex flex-around flex-middle font-large badge-skill">
          <div class="gulp text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                  <i class="fab fa-gulp badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    65%
                  </div>
                </div>
              </div>
            </div>
            <div>Gulp</div>
          </div>
          <div class="ubntu text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                  <i class="fab fa-linux badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    70%
                  </div>
                </div>
              </div>
            </div>
            <div>Linux</div>
          </div>
        </div>

        <h2 class="text-center">En dehors du travail</h2>
        <div class="flex flex-around flex-middle font-large">
          <div class="muscu text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                  <i class="fas fa-dumbbell badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    <i class="fas fa-dumbbell badge"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>Musculation</div>
          </div>
          <div class="game text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                  <i class="fas fa-gamepad badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    <i class="fas fa-gamepad badge"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>Jeux vidéo</div>
          </div>
          <div class="magic text-center">
            <div class="badge">
              <div class="badge-inner">
                <div class="badge-front">
                  <i class="fab fa-wizards-of-the-coast badge"></i>
                </div>
                <div class="badge-back">
                  <div class="badge">
                    <i class="fab fa-wizards-of-the-coast badge"></i>
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
