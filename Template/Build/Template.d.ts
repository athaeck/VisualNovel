declare namespace Template {
}
declare namespace Template {
    function Intro(): fS.SceneReturn;
}
declare namespace Template {
    let items: {
        pen: {
            name: string;
            description: string;
            image: string;
        };
    };
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
