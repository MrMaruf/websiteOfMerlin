import { ThrowStmt } from '@angular/compiler';

export class Skill {
    private _name: string;
    private _description: string;
    private _level: number;
    private _history: string;
    private _changed: boolean;

    //constructors

	constructor(name: string, description: string, level: number, history: string, changed: boolean) {
		this._name = name;
		this._description = description;
		this._level = level;
		this._history = history;
		this._changed = changed;
	}

    //methods
    changeLevel(newLevel: number) {
        this._level = newLevel;
        this._history += " -> " + this._level;
        this._changed = true;
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
     * Getter level
     * @return {number}
     */
	public get level(): number {
		return this._level;
	}

    /**
     * Setter level
     * @param {number} value
     */
	public set level(value: number) {
		this._level = value;
	}

    /**
     * Getter history
     * @return {string}
     */
	public get history(): string {
		return this._history;
	}

    /**
     * Setter history
     * @param {string} value
     */
	public set history(value: string) {
		this._history = value;
	}

    /**
     * Getter changed
     * @return {boolean}
     */
	public get changed(): boolean {
		return this._changed;
	}

    /**
     * Setter changed
     * @param {boolean} value
     */
	public set changed(value: boolean) {
		this._changed = value;
	}
    
}
