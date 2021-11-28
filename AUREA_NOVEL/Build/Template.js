"use strict";
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    console.log("AUREA_NOVEL starting");
    Template.transition = {
        clock: {
            duration: 1,
            alpha: "./Images/Transitions/puzzle.png",
            edge: 1
        }
    };
    Template.sound = {
        // Music
        backgroundTheme: "",
        // Sound
        click: ""
    };
    Template.location = {
        bedroom: {
            name: "bedroom",
            background: "./Images/Backgrounds/Bedroom_Night.png"
        }
    };
    Template.characters = {
        narrator: {
            name: "narrator"
        },
        you: {
            name: "you",
            origin: Template.fS.ORIGIN.CENTER,
            pose: {
                // Pfad als String angeben
                angry: "./Images/Backgrounds/Bedroom_Night.png",
                happy: "./Images/Backgrounds/Bedroom_Night.png",
                upset: "./Images/Backgrounds/Bedroom_Night.png"
            }
        }
    };
    Template.dataForSave = {};
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.fS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("moin");
        let text = {
            narrator: {
                T0000: "moin",
                T0001: "1"
            },
            you: {
                T0000: "Hi",
                T0001: "2"
            }
        };
        await Template.fS.Location.show(Template.location.bedroom);
        await Template.fS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.fS.Character.show(Template.characters.you, Template.characters.you.pose.happy, Template.fS.positionPercent(30, 100));
        await Template.fS.update(1);
        await Template.fS.Speech.tell(Template.characters.you, text.you.T0000);
        await Template.fS.Speech.tell(Template.characters.narrator, text.narrator.T0000);
        await Template.fS.Character.hide(Template.characters.you);
        let firstDialogueElementOptions = {
            iSayOk: "Okey",
            iChoose: "Goose",
            iSayYes: "not",
            iSayNo: "yes"
        };
        let firstDialogueElement = await Template.fS.Menu.getInput(firstDialogueElementOptions, "indioClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iChoose:
                await Template.fS.Speech.tell(Template.characters.you, text.you.T0000);
                break;
            case firstDialogueElementOptions.iSayOk:
                await Template.fS.Character.show(Template.characters.you, Template.characters.you.pose.happy, Template.fS.positionPercent(30, 100));
                break;
            case firstDialogueElementOptions.iSayYes:
                await await Template.fS.Speech.tell(Template.characters.you, text.you.T0000);
                break;
            default:
                await Template.fS.Speech.tell(Template.characters.you, "anny are you okey?");
                break;
        }
        // await fS.update(1);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map