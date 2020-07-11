import { Stat } from './stat.model';

export class Modifier{
    private _origin:Stat;
    private _description: string;
    private _multiplier:number;
    private _modifier: number;

	constructor(origin:Stat, multiplayer:number = 1, ) {
	}

    /**
     * Getter origin
     * @return {Stat}
     */
	public get origin(): Stat {
		return this._origin;
	}

    /**
     * Getter multiplier
     * @return {number}
     */
	public get multiplier(): number {
		return this._multiplier;
	}

    /**
     * Getter modifier
     * @return {number}
     */
	public get modifier(): number {
		return this._modifier;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Setter origin
     * @param {Stat} value
     */
	public set origin(value: Stat) {
		this._origin = value;
	}

    /**
     * Setter multiplier
     * @param {number} value
     */
	public set multiplier(value: number) {
		this._multiplier = value;
	}

    /**
     * Setter modifier
     * @param {number} value
     */
	public set modifier(value: number) {
		this._modifier = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

}