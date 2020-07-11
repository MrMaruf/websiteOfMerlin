import { Characteristic } from './characteristic.model';
import { Stat } from './stat.model';

export class Character {
    private _originName: string;
    private _name: string;
    private _level:number;
    private _stats: Stat[];

    constructor(age: number, level: number, health: number, stamina: number, magicka: number, magickaModifier: number, name: string, numSkillPoints: number, talent: number, talentCalculated: number) {
        this._stats['health'] = health;
        this._stats.push(characteristics);
        this._age = age;
        this._level = level;
        this._health = health;
        this._stats['stamin'] = stamina;
        this._magicka = magicka;
        this._magickaModifier = magickaModifier;
        this._name = name;
        this._numSkillPoints = numSkillPoints;
        this._talent = talent;
        this._talentCalculated = talentCalculated;
    }

    calculateTalent(newTalentModifier:number) {
        this._talent = this._talentInnate + (1 * newTalentModifier);
        this._talentCalculated = this._talent * (1 + (this._magicka * this._magickaModifier));
    }

    setCharacter() {
        this._magickaModifier = (1 * Math.pow(5, Math.abs(this._level / 15))) / 100
    }

    /**
     * Getter talentCalculated
     * @return {number}
     */
    public get talentCalculated(): number {
        return this._talentCalculated;
    }

    /**
     * Setter talentCalculated
     * @param {number} value
     */
    public set talentCalculated(value: number) {
        this._talentCalculated = value;
    }

    /**
     * Getter talent
     * @return {number}
     */
    public get talent(): number {
        return this._talent;
    }

    /**
     * Setter talent
     * @param {number} value
     */
    public set talent(value: number) {
        this._talent = value;
    }

    /**
     * Getter numSkillPoints
     * @return {number}
     */
    public get numSkillPoints(): number {
        return this._numSkillPoints;
    }

    /**
     * Setter numSkillPoints
     * @param {number} value
     */
    public set numSkillPoints(value: number) {
        this._numSkillPoints = value;
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
     * Getter magicka
     * @return {number}
     */
    public get magicka(): number {
        return this._stats['magicka'];
    }

    /**
     * Setter magicka
     * @param {number} value
     */
    public set magicka(value: number) {
        this._stats['magicka'] = value;
    }

    /**
     * Getter health
     * @return {number}
     */
    public get health(): number {
        return this._stats['health'];
    }

    /**
     * Setter health
     * @param {number} value
     */
    public set health(value: number) {
        this._stats['health'] = value;
    }

    /**
     * Getter stamina
     * @return {number}
     */
    public get stamina(): number {
        return this._stats['stamin'];
    }

    /**
     * Setter stamina
     * @param {number} value
     */
    public set stamina(value: number) {
        this._stats['stamin'] = value;
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
     * Getter age
     * @return {number}
     */
    public get age(): number {
        return this._age;
    }

    /**
     * Setter age
     * @param {number} value
     */
    public set age(value: number) {
        this._age = value;
    }

}