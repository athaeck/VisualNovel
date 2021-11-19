"use strict";
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    console.log("AUREA_NOVEL starting");
    Template.transition = {
        clock: {
            duration: 1,
            alpha: "../Images/Transitions/puzzle.png",
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
            name: "",
            background: "../Images/Backgrounds/Bedroom_Night.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        you: {
            name: "",
            origin: Template.fS.ORIGIN.CENTER,
            pose: {
                // Pfad als String angeben
                angry: "",
                happy: "",
                upset: ""
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
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map