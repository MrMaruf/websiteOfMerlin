import { Complexity } from './enums';

export class Spell {
    private _name: string;
    private _description: string;
    private _complexity: Complexity;

	constructor(name: string, description: string, $complexity: Complexity) {
		this._name = name;
		this._description = description;
		this._complexity = $complexity;
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
     * Getter $complexity
     * @return {Complexity}
     */
	public get complexity(): Complexity {
		return this._complexity;
	}

    /**
     * Setter $complexity
     * @param {Complexity} value
     */
	public set complexity(value: Complexity) {
		this._complexity = value;
	}

}
