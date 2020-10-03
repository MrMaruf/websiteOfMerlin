import { Character } from './character.model';
import { Parent } from './parent.model';

export class Story extends Parent{
    mainCharacter: Character;
    characters: Character[];
}