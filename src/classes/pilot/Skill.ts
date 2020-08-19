import { CompendiumItem, SkillFamily, ItemType } from "@/class";
import { ICompendiumItemData } from "@/interface";
import { store } from "@/hooks";

export interface ISkillData extends ICompendiumItemData {
    detail: string;
    family: string;
}

export class Skill extends CompendiumItem {
    private _detail: string;
    private _family: SkillFamily;

    public constructor(data: ISkillData) {
        super(data);
        this._detail = data.detail;
        this._family = SkillFamily[data.family] as SkillFamily;
        this._item_type = ItemType.Skill;
    }

    public get Detail(): string {
        return this._detail;
    }

    public get Trigger(): string {
        return this._name;
    }

    public get Family(): string {
        return this._family;
    }

    public static Deserialize(id: string): Skill {
        let v = store.compendium.getReferenceByID("Skills", id);
        return v;
    }

    public Serialize(): ISkillData {
        return {
            detail: this._detail,
            family: this._family,
        
            brew: this._brew,
            counters: this.Counters,
            description: this._description,
            id: this.ID,
            name: this._name
        };
    }
}
