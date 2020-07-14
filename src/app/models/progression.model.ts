export class Progression {


    private _level: number;
    private _growthCharacterPoints: number;
    private _growthSkillPoints: number;
    private _characterPoints: number;
    private _skillPoints: number;

    constructor(level: number = -1, growthCP: number = -1, CP: number = -1, growthSP: number = -1, SP: number = -1) {
        this._level = level;
        this._growthCharacterPoints = growthCP;
        this._growthSkillPoints = growthSP;
        this._characterPoints = CP;
        this._skillPoints = SP;
    }

    public raiseLevel(additionalCP: number = 0, additionalSP: number = 0) {
        this.level++;
        this._characterPoints += (this.growthCharacterPoints + additionalCP);
        this._skillPoints += (this.growthSkillPoints + additionalSP);
    }
    /**
     * Getter level
     * @return {number}
     */
    public get level(): number {
        return this._level;
    }

    /**
     * Getter growthCharacterPoints
     * @return {number}
     */
    public get growthCharacterPoints(): number {
        return this._growthCharacterPoints;
    }

    /**
     * Getter growthSkillPoints
     * @return {number}
     */
    public get growthSkillPoints(): number {
        return this._growthSkillPoints;
    }

    /**
     * Getter $characterPoints
     * @return {number}
     */
    public get characterPoints(): number {
        return this._characterPoints;
    }

    /**
     * Getter $skillPoints
     * @return {number}
     */
    public get skillPoints(): number {
        return this._skillPoints;
    }

    /**
     * Setter level
     * @param {number} value
     */
    public set level(value: number) {
        this._level = value;
    }

    /**
     * Setter growthCharacterPoints
     * @param {number} value
     */
    public set growthCharacterPoints(value: number) {
        this._growthCharacterPoints = value;
    }

    /**
     * Setter growthSkillPoints
     * @param {number} value
     */
    public set growthSkillPoints(value: number) {
        this._growthSkillPoints = value;
    }

    /**
     * Setter $characterPoints
     * @param {number} value
     */
    public set characterPoints(value: number) {
        this._characterPoints = value;
    }

    /**
     * Setter $skillPoints
     * @param {number} value
     */
    public set skillPoints(value: number) {
        this._skillPoints = value;
    }


}