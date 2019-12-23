import { Skill } from './skill.model';
import { Status } from './enums';

export class Ability{
    private _name: string;
    private _description: string;
    private _tier: number;
    private _skill: Skill;
    private _status: Status;


	constructor(name: string, description: string, tier: number, skill: Skill, status: Status) {
		this._name = name;
		this._description = description;
		this._tier = tier;
		this._skill = skill;
		this._status = status;
    }
    
    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
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

    /**
     * Getter tier
     * @return {number}
     */
	public get tier(): number {
		return this._tier;
	}

    /**
     * Setter tier
     * @param {number} value
     */
	public set tier(value: number) {
		this._tier = value;
	}

    /**
     * Getter status
     * @return {Status}
     */
	public get status(): Status {
		return this._status;
	}

    /**
     * Setter status
     * @param {Status} value
     */
	public set status(value: Status) {
		this._status = value;
	}

}

