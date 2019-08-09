import React from 'react';
import './PageSkill.css';
import {UiBadge} from './UiBadge';

export default class Skill extends React.Component {
  constructor(props){
    super(props);
    this.title = "Compétences"
    this.skills = [
      {name: 'HTML', score: '85', icon: 'fab fa-html5 badge'},
      {name: 'CSS', score: '85', icon: 'fab fa-css3-alt badge'},
      {name: 'Sass', score: '60', icon: 'fab fa-sass badge'},
      {name: 'Javascript', score: '70', icon: 'fab fa-js badge'},
      {name: 'Gulp', score: '65', icon: 'fab fa-gulp badge'},
      {name: 'Linux', score: '70', icon: 'fab fa-linux badge'}
    ]
  }

  render(){

    return (
      <div id="skill" className="panel part2">
        <h2 className="text-center">{this.title}</h2>
        <div className="flex flex-around flex-middle font-large margin-b badge-skill">
          {this.skills.map((skill) =>(
            <UiBadge name={skill.name} score={skill.score} icon={skill.icon} />
          ))}

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
