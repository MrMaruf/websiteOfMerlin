import { StatType } from './enums';

export class Stat{
    private _name:string;
    private _description:string;
    private _type: StatType;
    private _level: number;


	constructor( type:StatType | string | number, name:string = "", description:string = "", level = 0) {
        this._name = name;
        this._description = description;
        this._type = StatType[type];
    }

    /**
     * Getter level
     * @return {number}
     */
	public get level(): number {
		return this._level;
	}

    /**
     * Setter type
     * @param {StatType} value
     */
	public set type(value: StatType) {
		this._type = value;
	}

    /**
     * Setter level
     * @param {number} value
     */
	public set level(value: number) {
		this._level = value;
	}
    
    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Getter type
     * @return {StatType}
     */
	public get type(): StatType {
		return this._type;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}
}