declare namespace Template {
    let text: {
        narrator: {
            T0000: string;
            T0001: string;
        };
        aisaka: {
            T0000: string;
            T0001: string;
        };
        kohana: {
            T0000: string;
        };
    };
}
declare namespace Template {
    type StoryDecisionEndingImpact = {
        _isGoodEnding: boolean;
    };
    function ValidateEnding(data: StoryDecisionEndingImpact): void;
}
declare namespace Template {
    function Intro(): fS.SceneReturn;
}
declare namespace Template {
    type Items = {
        [key: string]: fS.ItemDefinition;
    };
    let items: Items;
    function AddItem(item: fS.ItemDefinition): void;
    function GetInventory(): Promise<string[]>;
    function AddItemToInventory(item: string): boolean;
}
declare namespace Template {
}
declare namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let dataForSave: {};
}
declare namespace Template {
    let menuState: boolean;
    const inGameMenu: {
        save: string;
        load: string;
        close: string;
        open: string;
    };
    let gameMenu: fS.Menu;
    function buttonFunctions(option: string): Promise<void>;
    function handleKeyPress(event: KeyboardEvent): Promise<void>;
}
declare namespace Template {
}
declare namespace Template {
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    function GetTransistion(id: string): fS.AnimationDefinition;
}
