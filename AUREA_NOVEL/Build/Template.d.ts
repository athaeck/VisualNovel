declare namespace Aurea_Novel {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        click: string;
    };
    let location: {
        bedroom: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        you: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
    };
    let dataForSave: {};
    function fromLeftToRight(): fS.AnimationDefinition;
}
declare namespace Aurea_Novel {
    function Scene(): fS.SceneReturn;
}
declare namespace Aurea_Novel {
    function SevdaTest(): fS.SceneReturn;
}
