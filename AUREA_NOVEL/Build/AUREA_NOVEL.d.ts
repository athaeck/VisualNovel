declare namespace AUREA_NOVEL {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    function fromCenterToMidLeft(): fS.AnimationDefinition;
    function fromDownLeftToTopRight(): fS.AnimationDefinition;
    function fromLeftToRight(): fS.AnimationDefinition;
    let dataForSave: {
        player: {
            name: string;
        };
        choice: {
            selectHandy: boolean;
        };
        puls: number;
    };
}
declare namespace AUREA_NOVEL {
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
        crystal: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        ent: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        goma: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        illusion: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        inkubus: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        golem: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        sebu: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
    };
    function ValidateGender(): Promise<void>;
}
declare namespace AUREA_NOVEL {
    type StoryDecisionEndingImpact = {
        _isGoodEnding: boolean;
    };
    function ValidateEnding(data: StoryDecisionEndingImpact): Promise<void>;
    function End(): fS.SceneReturn;
}
declare namespace AUREA_NOVEL {
    function Fight(): fS.SceneReturn;
}
declare namespace AUREA_NOVEL {
    function Glade(): fS.SceneReturn;
}
declare namespace AUREA_NOVEL {
    function Intro(): fS.SceneReturn;
}
declare namespace AUREA_NOVEL {
    type Items = {
        [key: string]: fS.ItemDefinition;
    };
    let items: {
        handy: {
            name: string;
            description: string;
            image: string;
        };
        crystal_sheet: {
            name: string;
            description: string;
            image: string;
        };
        ent_sheet: {
            name: string;
            description: string;
            image: string;
        };
        goma_sheet: {
            name: string;
            descpription: string;
            image: string;
        };
        illusion_sheet: {
            name: string;
            descpription: string;
            image: string;
        };
        inkubus_sheet: {
            name: string;
            descpription: string;
            image: string;
        };
        sebu_sheet: {
            name: string;
            descpription: string;
            image: string;
        };
        golem_sheet: {
            name: string;
            descpription: string;
            image: string;
        };
    };
}
declare namespace AUREA_NOVEL {
    let locations: {
        hospital_room: {
            name: string;
            background: string;
        };
        blackscreen: {
            name: string;
            background: string;
        };
        portal: {
            name: string;
            background: string;
        };
        landscape: {
            name: string;
            background: string;
        };
    };
}
declare namespace AUREA_NOVEL {
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
declare namespace AUREA_NOVEL {
    let sound: {
        hospital_background: string;
        glade: string;
        tochscreen: string;
        click: string;
        handy_notification: string;
        footsteps_socks: string;
        door_knocking: string;
        portal_sound: string;
    };
}
declare namespace AUREA_NOVEL {
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
declare namespace AUREA_NOVEL {
    function Vault(): fS.SceneReturn;
}
