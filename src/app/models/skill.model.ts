import { ThrowStmt } from '@angular/compiler';
import { Stat } from './stat.model';
import { StatType } from './enums';
import { Modifier } from './modifier.model';

export class Skill extends Stat {
    private _modifiers: Modifier[];
    private _history: number[];
    private _changed: boolean = false;

    //constructors

    constructor(name: string = "", description: string = "", level: number = 0, history: number[] = [], modifiers:Modifier[] = [], changed: boolean = false) {
        super(StatType['skill'], name, description, level);
        this._modifiers = modifiers
        this._history = history;
        this._changed = changed;
    }

    //methods
    changeLevel(newLevel: number) {
        this.level = newLevel;
        this._history.push(newLevel);
    }

    public getHistory(): string {
        let msg: string = "";
        let previousValue;
        for (let value of this._history) {
            if (previousValue)
                msg += (previousValue < value ? " ➔+ " + value : " ➔- " + value)
            else
                msg += value;
            previousValue = value;
        }
        return msg;
    }

    // /**
    //  * Getter level
    //  * @return {number}
    //  */
    // public get level(): number {
    //     return this._level;
    // }

    /**
     * Setter level
     * @param {number} value
     */
    public set level(value: number) {
        this.changeLevel(value)
        // this._level = value;
    }

    /**
     * Getter history
     * @return {string}
     */
    public get history(): number[] {
        return this._history;
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
