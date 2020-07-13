import { Characteristic } from './characteristic.model';
import { Stat } from './stat.model';
import { StatType } from './enums';
import { Progression } from './progression.model';
import { Skill } from './skill.model';

export class Character {
    private _originName: string;
    private _name: string;
    private _progression: Progression;
    private _age: number;
    private _stats: Map<string, Stat> = new Map();

    constructor(age: number, progression: Progression, name: string, stats:Map<string, Stat>, originName:string = "Magnus") {
        
        this._age = age;
        this._progression = progression;
        this._name = name;
        this._originName = originName;

    }
    setUpStat(type:StatType|string|number): Stat{
        let newStat;

        switch(type)
        {
            case StatType['characteristic']:
                newStat = new Characteristic();
                break;
            case StatType['skill']:
                newStat = new Skill()
                break;
            case StatType['effect']:
                newStat = new Stat(type);
        }
        
        return newStat;
    }
    addStat(newStat:Stat): void{
        this._stats.set(newStat.name, newStat);
    }

    /**
     * Getter originName
     * @return {string}
     */
	public get originName(): string {
		return this._originName;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter progression
     * @return {Progression}
     */
	public get progression(): Progression {
		return this._progression;
	}

    /**
     * Getter age
     * @return {number}
     */
	public get age(): number {
		return this._age;
	}

    /**
     * Getter stats
     * @return {Map<string, Stat> }
     */
	public get stats(): Map<string, Stat>  {
		return this._stats;
	}

    /**
     * Setter originName
     * @param {string} value
     */
	public set originName(value: string) {
		this._originName = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter progression
     * @param {Progression} value
     */
	public set progression(value: Progression) {
		this._progression = value;
	}

    /**
     * Setter age
     * @param {number} value
     */
	public set age(value: number) {
		this._age = value;
	}

    /**
     * Setter stats
     * @param {Map<string, Stat> } value
     */
	public set stats(value: Map<string, Stat> ) {
		this._stats = value;
	}

}