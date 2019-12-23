export class Save {
    private _name: string = "";
    private _description: string = "";
    private _index: number = 0;

    
    constructor(name: string, description: string, index: number) {
        this._name = name;
        this._description = description;
        this._index = index;
    }

    

    /**
     * Getter name
     * @return {string }
     */
	public get name(): string  {
		return this._name;
	}

    /**
     * Setter name
     * @param {string } value
     */
	public set name(value: string ) {
		this._name = value;
	}

    /**
     * Getter description
     * @return {string }
     */
	public get description(): string  {
		return this._description;
	}

    /**
     * Setter description
     * @param {string } value
     */
	public set description(value: string ) {
		this._description = value;
	}

    /**
     * Getter index
     * @return {number }
     */
	public get index(): number  {
		return this._index;
	}

    /**
     * Setter index
     * @param {number } value
     */
	public set index(value: number ) {
		this._index = value;
	}


}
