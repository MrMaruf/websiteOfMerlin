import { Stat } from './stat.model';
import { StatType } from './enums';

export class Characteristic extends Stat{
    constructor(name:string = "", description:string = "", level = 0){
        super(StatType['characteristic'], name, description, level);
    }
}