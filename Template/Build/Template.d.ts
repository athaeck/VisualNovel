declare namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    function fromCenterToMidLeft(): fS.AnimationDefinition;
    function fromDownLeftToTopRight(): fS.AnimationDefinition;
    let dataForSave: {
        player: {
            name: string;
        };
        puls: number;
    };
}
declare namespace Template {
    type Characters = {
        [key: string]: fS.CharacterDefinition;
    };
    let characters: {
        narrator: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {};
        };
        du: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        handy: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        instaPost: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
    };
    function ValidateGender(): Promise<void>;
}
declare namespace Template {
    type StoryDecisionEndingImpact = {
        _isGoodEnding: boolean;
    };
    function ValidateEnding(data: StoryDecisionEndingImpact): Promise<void>;
    function End(): fS.SceneReturn;
}
declare namespace Template {
    function Intro(): fS.SceneReturn;
}
declare namespace Template {
    type Items = {
        [key: string]: fS.ItemDefinition;
    };
    let items: {
        handy: {
            name: string;
            description: string;
            image: string;
        };
    };
    function AddItem(item: fS.ItemDefinition): void;
    function GetInventory(): Promise<string[]>;
    function AddItemToInventory(item: string): boolean;
}
declare namespace Template {
    let locations: {
        hospital_room: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
    let menuState: boolean;
    const inGameMenu: {
        save: string;
        load: string;
        close: string;
        open: string;
        credits: string;
        volumeup: string;
        volumedown: string;
    };
    let gameMenu: fS.Menu;
    function incrementSound(): void;
    function decrementSound(): void;
    function showCredits(): void;
    function buttonFunctions(option: string): Promise<void>;
    function handleKeyPress(event: KeyboardEvent): Promise<void>;
}
declare namespace Template {
    let sound: {
        hospital_background: string;
        tochscreen: string;
        click: string;
        handy_notification: string;
        footsteps_socks: string;
        door_knocking: string;
    };
}
declare namespace Template {
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        long: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
