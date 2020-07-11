import { StatType } from './enums';

export class Stat{
    private _name:string;
    private _description:string;
    private _type: StatType;


	constructor(name:string, description:string, type:StatType | string | number) {
        this._name = name;
        this._description = description;
        this._type = StatType[type];
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