import { Skill } from './skill.model';
import { StatType } from './enums';
import { Stat } from './stat.model';

export class Ability extends Stat{
    private _skill: Skill;


	constructor(name: string ="", description: string ="", skill: Skill) {
        super(StatType['ability'], name, description);
		this._skill = skill;
    }
    
   
    /**
     * Getter skill
     * @return {Skill}
     */
	public get skill(): Skill {
		return this._skill;
	}

    /**
     * Setter skill
     * @param {Skill} value
     */
	public set skill(value: Skill) {
		this._skill = value;
	}
}

