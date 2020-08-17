import { Character } from './character.model';
import { Save } from './save.model';
import { Skill } from './skill.model';
import { Ability } from './ability.model';
import { Spell } from './spell.model';

export class Chapter {
    private _name: string;
    private _number: number;
    private _description: string;
    private _character: Character;


    constructor(name: string, number: number, description: string, character: Character) {
        this._name = name;
        this._number = number;
        this._description = description;
        this._character = character;
    }

    setChapter() {
        // this.character.setCharacter();
        let talentModifier = 0
        if (this._number > 34)
            talentModifier = 0.45
        // this.character.calculateTalent(talentModifier);
        
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
     * Getter number
     * @return {number}
     */
    public get number(): number {
        return this._number;
    }

    /**
     * Setter number
     * @param {number} value
     */
    public set number(value: number) {
        this._number = value;
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
     * Getter character
     * @return {Character}
     */
    public get character(): Character {
        return this._character;
    }

    /**
     * Setter character
     * @param {Character} value
     */
    public set character(value: Character) {
        this._character = value;
    }


}