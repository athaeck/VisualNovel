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
        nachttisch: {
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
        bro: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                upset: string;
            };
        };
        cam: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
        image: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                idle: string;
            };
        };
    };
    let dataForSave: {
        nameOfYou: string;
    };
    function fromLeftToRight(): fS.AnimationDefinition;
    function fromCenterToRight(): fS.AnimationDefinition;
    function fromDownLeftToTopRight(): fS.AnimationDefinition;
    function fromCentertoCenter(): fS.AnimationDefinition;
}
declare namespace Aurea_Novel {
    function Scene(): fS.SceneReturn;
}
declare namespace Aurea_Novel {
    function SevdaTest(): fS.SceneReturn;
}
