"use strict";
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    //   console.log("Tutorial_WS21 starting");
    //   // define transitions
    //   export let transitions = {
    //     clock: {
    //       duration: 1,
    //       alpha: "",
    //       edge: 1
    //     }
    //   };
    //   export let sound = {
    //     // music
    //     backgroundTheme: "",
    //     // sound
    //     click: ""
    //   };
    //   export let locations = {
    //     bedroom: {
    //       name: "Bedroom",
    //       background: "./Images/Backgrounds/Bedroom.png"
    //     }
    //   };
    // // Stilfrage - Eigenen Styleguide für FS veröffentlichen? 
    //   export let characters = {
    //     narrator: {
    //       name: ""
    //     },
    //     aisaka: {
    //       name: "Aisaka",
    //       origin: fS.ORIGIN.BOTTOMCENTER,
    //       pose: {
    //         angry: "./Images/Characters/aisaka_angry.png",
    //         happy: "./Images/Characters/aisaka_happy.png",
    //         upset: "./Images/Characters/aisaka_upset.png"
    //       }
    //     },
    //     kohana: {
    //       name: "Kohana",
    //       origin: fS.ORIGIN.BOTTOMCENTER,
    //       pose: {
    //         angry: "./Images/Characters/kohana_angry.png",
    //         happy: "./Images/Characters/kohana_happy.png",
    //         upset: "./Images/Characters/kohana_upset.png"
    //       }
    //     }
    //   };
    function fromCenterToMidLeft() {
        return {
            start: {
                translation: Template.fS.positions.center,
                rotation: -1, scaling: new Template.fS.Position(0.1, 0.1), color: Template.fS.Color.CSS("white", 0)
            }, end: {
                translation: Template.fS.positionPercent(20, 70), rotation: 1, scaling: new Template.fS.Position(0.1, 0.1), color: Template.fS.Color.CSS("white", 1)
            },
            duration: 2,
            playmode: Template.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromCenterToMidLeft = fromCenterToMidLeft;
    function fromDownLeftToTopRight() {
        return {
            start: {
                translation: Template.fS.positions.bottomleft,
                rotation: -1, scaling: new Template.fS.Position(0.1, 0.1), color: Template.fS.Color.CSS("white", 1)
            }, end: {
                translation: Template.fS.positions.topright, rotation: 1, scaling: new Template.fS.Position(0.1, 0.1), color: Template.fS.Color.CSS("white", 1)
            },
            duration: 5,
            playmode: Template.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromDownLeftToTopRight = fromDownLeftToTopRight;
    function fromLeftToRight() {
        return {
            start: {
                translation: Template.fS.positionPercent(10, 80),
                rotation: -1, scaling: new Template.fS.Position(1, 1), color: Template.fS.Color.CSS("white", 1)
            }, end: {
                translation: Template.fS.positionPercent(90, 80), rotation: 1, scaling: new Template.fS.Position(1, 1), color: Template.fS.Color.CSS("white", 1)
            },
            duration: 5,
            playmode: Template.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromLeftToRight = fromLeftToRight;
    Template.dataForSave = {
        player: {
            name: ""
        },
        puls: 60
    };
    window.addEventListener("load", start);
    function start(_event) {
        Template.gameMenu = Template.fS.Menu.create(Template.inGameMenu, Template.buttonFunctions, "game-menu");
        let scenes = [
            { scene: Template.Intro, name: "Introduction" },
            { scene: Template.Glade, name: "Glade" },
            { scene: Template.End, name: "Ende" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.fS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
///<reference path="./Main.ts"/>
var Template;
///<reference path="./Main.ts"/>
(function (Template) {
    const malePath = "./Images/Characters/player.png";
    const femalePath = "./Images/Characters/player_female.png";
    Template.characters = {
        narrator: {
            name: "Erzähler",
            origin: Template.fS.ORIGIN.CENTER,
            pose: {}
        },
        du: {
            name: Template.dataForSave.player.name,
            origin: Template.fS.ORIGIN.CENTER,
            pose: {
                idle: ""
            }
        },
        handy: {
            name: "Handy",
            origin: Template.fS.ORIGIN.CENTER,
            pose: {
                idle: "./Images/Items/Handy.png"
            }
        },
        instaPost: {
            name: "Post",
            origin: Template.fS.ORIGIN.BOTTOMLEFT,
            pose: {
                idle: ""
            }
        }
    };
    async function ValidateGender() {
        let name = Template.characters.du.name;
        const response = await fetch(`https://api.genderize.io?name=${name}`);
        const body = await response.json();
        if (response.status === 200) {
            Template.characters.du.pose.idle = await eval(`${body.gender}Path`);
        }
        else {
            Template.characters.du.pose.idle = malePath;
        }
    }
    Template.ValidateGender = ValidateGender;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function PlayGoodEnd() {
        Template.fS.Sound.play(Template.sound.hospital_background, 0.2, true);
        await Template.fS.Location.show(Template.locations.hospital_room);
        await Template.fS.update(Template.transitions.long.duration, Template.transitions.long.alpha, Template.transitions.long.edge);
        await Template.fS.Character.show(Template.characters.du, Template.characters.du.pose.idle, Template.fS.positionPercent(10, 80));
        await Template.fS.Speech.tell(Template.characters.du, "Was ein Traum, zumindest denke ich dass es ein Traum war. Ich bin so voller Medikamenten, dass ich gar nicht unterschieden kann, ob das gerade wirklich stattgefunden hat oder nicht.");
        Template.fS.Text.setClass("end-screen");
        Template.fS.Text.print("Du hast das Koma überlebt.");
    }
    async function PlayBadEnding() {
        Template.fS.Text.setClass("end-screen");
        Template.fS.Text.print("Du bist leider in deinem Komaschlaf verstorben.");
    }
    async function ValidateEnding(data) {
        if (data._isGoodEnding) {
            await PlayGoodEnd();
        }
        else {
            await PlayBadEnding();
        }
    }
    Template.ValidateEnding = ValidateEnding;
    async function End() {
        console.log("Start End Sequenz");
        const endDefinition = {
            _isGoodEnding: Template.dataForSave.puls <= 90
        };
        await ValidateEnding(endDefinition);
    }
    Template.End = End;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Glade() {
        console.log("Start Glade Sequenz");
        Template.fS.Sound.play(Template.sound.glade, 0.2, true);
        await Template.fS.Location.show(Template.locations.landscape);
        await Template.fS.Character.show(Template.characters.du, Template.characters.du.pose.idle, Template.fS.positionPercent(10, 80));
        await Template.fS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        await Template.fS.Speech.tell(Template.characters.du, "Wo bin ich? Wie bin ich hier her gekommen? Wie komme ich zurück?");
    }
    Template.Glade = Glade;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Intro() {
        console.log("Start with hospital room scene");
        // fS.Inventory.add(items.pen)
        // const is: string[] = await fS.Inventory.open();
        // console.log(is);
        let delay_5sec = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(5)]);
        let delay_2sec = Template.fS.Progress.defineSignal([() => Template.fS.Progress.delay(2)]);
        // let text = {
        //   narrator: {
        //     T0000: "",
        //     T0001: ""
        //   },
        //   aisaka: {
        //     T0000: "Hi",
        //     T0001: ""
        //   },
        //   kohana: {
        //     T0000: "Test"
        //   }
        // };
        async function ViewInsta() {
            for (let i = 0; i < 10; i++) {
                Template.fS.Sound.play(Template.sound.tochscreen, 1);
                const postPath = `./Images/Items/insta_0${i}.jpg`;
                Template.characters.instaPost.pose.idle = postPath;
                await Template.fS.Character.animate(Template.characters.instaPost, Template.characters.instaPost.pose.idle, Template.fromDownLeftToTopRight());
                // await fS.Progress.defineSignal([() => fS.Progress.delay(5)]);
                await Template.fS.Character.hide(Template.characters.instaPost);
            }
        }
        Template.fS.Sound.play(Template.sound.hospital_background, 0.2, true);
        await Template.fS.Location.show(Template.locations.hospital_room);
        await Template.fS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge);
        // await fS.Character.show(characters.aisaka, characters.aisaka.pose.happy, fS.positionPercent(30, 100));
        // await fS.Character.sho
        // await fS.update(1);
        await Template.fS.Speech.tell(Template.characters.narrator, "Es war einmal ein sehr einsamer und düsterer Tag.");
        await Template.fS.Speech.tell(Template.characters.narrator, "Unser Hauptakteur der Geschichte liegt hier in diesem Zimmer.");
        await Template.fS.Speech.tell(Template.characters.narrator, "Sagen wie er heißt kann ich leider nicht, da bräuchte ich deine Hilfe. Wie würdest du ihn gerne nennen wollen? ");
        // await fS.Speech.tell(characters.aisaka, "Hi2.");
        // await fS.Character.hide(characters.aisaka);
        // characters.
        // await fS.update(1);
        Template.dataForSave.player.name = await Template.fS.Speech.getInput();
        Template.characters.du.name = Template.dataForSave.player.name;
        await Template.fS.update(1);
        await Template.fS.Speech.tell(Template.characters.narrator, `Damit wäre meine Pflicht der Einleitung getan. ${Template.characters.du.name} wird nun also übernehmen. Viel Vergnügen!`);
        await Template.ValidateGender();
        await Template.fS.Character.show(Template.characters.du, Template.characters.du.pose.idle, Template.fS.positionPercent(10, 80));
        await Template.fS.update(1);
        await Template.fS.Speech.tell(Template.characters.du, "Wieder so ein Tag, der seinem vorangegangenem Tag gleicht. Wieder kein Entertainment heute.");
        await Template.fS.Speech.tell(Template.characters.du, "Der Tag ist nun schon fast vorbei und ich bin immernoch hier ans Bett gefangen.");
        await Template.fS.Speech.tell(Template.characters.du, "Hoffentlich hörrt das bald auf.");
        await Template.fS.Speech.tell(Template.characters.du, "Ich kann mir die Zeit vielleicht mit meinem Handy vertreiben. Oder ich versuch ein bisschen zu schlafen, es ist jedenfalls schon echt dunkel draußen.");
        await Template.fS.Speech.tell(Template.characters.narrator, "Ich werde immer mal wieder einspringen um dir als Spieler ein paar Dinge zu erklären oder fehlende Informationen zu ergänzen.");
        await Template.fS.Speech.tell(Template.characters.narrator, "Zum Beispiel erhälst du gleich dein Handy als Gegenstand um mit ihm zu interagieren.");
        let boredom_killer = {
            liegen_bleiben: "Liegen bleiben",
            handy_rausholen: "Handy rausholen"
        };
        let boredom_killer_element = await Template.fS.Menu.getInput(boredom_killer, "boredom-killer");
        let selected_sleep = false;
        switch (boredom_killer_element) {
            case boredom_killer.liegen_bleiben:
                selected_sleep = true;
                await Template.fS.Speech.tell(Template.characters.du, "Dann versuch ich doch nochmal zu schlafen.");
                await Template.fS.Speech.tell(Template.characters.du, "Ich kann hier aber auch wirklich gar nichts anderes machen. Ich werde morgen mal versuchen mir meine Zeit anders zu vertreiben und was zu suchen.");
                break;
            default:
                await Template.fS.Speech.tell(Template.characters.narrator, "Zunächst erhälst du einen Überblick über den erhaltenen Gegenstand. Dieser wird sobald du die Information geschlossen hast in dein Inventar für spätere Aktionen abgelegt.");
                await Template.fS.Character.animate(Template.characters.handy, Template.characters.handy.pose.idle, Template.fromCenterToMidLeft());
                Template.fS.Text.setClass("item-definition");
                Template.fS.Text.addClass("handy-information");
                Template.fS.Text.print(`<div>  
                          <div class="flex-wrapper">
                            <div class="content-part">
                              <h1>${Template.items.handy.name}</h1>
                               <span>${Template.items.handy.description}</span>
                            </div>
                            <div class="image-part">
                               <div class="item-image-wrapper">
                                  <img class="item-image" src="${Template.items.handy.image}" />
                                </div>
                            </div>
                          </div>
                      </div>`);
                await Template.fS.Character.hide(Template.characters.handy);
                await Template.fS.update(1);
                Template.fS.Inventory.add(Template.items.handy);
                Template.fS.Sound.play(Template.sound.handy_notification, 1, false);
                await Template.fS.Speech.tell(Template.characters.du, "Oh wie wenn man vom Teufel spricht, spricht das Handy. Mal sehen was Instagram so her gibt.");
                await ViewInsta();
                await delay_5sec();
                // await fS.update(1);
                await Template.fS.Speech.tell(Template.characters.du, "Mheee. LAAAAAANGWEILIG. Mir ist langweilig. Dann versuch ich doch nochmal einen Moment zu schlafen.");
                break;
        }
        await Template.fS.Location.show(Template.locations.blackscreen);
        Template.fS.Character.hideAll();
        Template.fS.Speech.hide();
        Template.fS.Sound.fade(Template.sound.hospital_background, 0, 1, true);
        await Template.fS.update(1);
        await delay_5sec();
        Template.fS.Sound.play(Template.sound.hospital_background, 0.2, true);
        Template.fS.Sound.play(Template.sound.door_knocking, 0.5, false);
        await delay_2sec();
        await Template.fS.update(1);
        await Template.fS.Location.show(Template.locations.hospital_room);
        await Template.fS.Character.show(Template.characters.du, Template.characters.du.pose.idle, Template.fS.positionPercent(10, 80));
        await Template.fS.update(Template.transitions.long.duration, Template.transitions.long.alpha, Template.transitions.long.edge);
        Template.fS.Speech.show();
        await Template.fS.Speech.tell(Template.characters.du, "Ja?");
        Template.fS.Sound.play(Template.sound.door_knocking, 0.5, false);
        await delay_2sec();
        await Template.fS.Speech.tell(Template.characters.du, "Jahaa?");
        Template.fS.Sound.play(Template.sound.door_knocking, 0.5, false);
        await delay_2sec();
        await Template.fS.Speech.tell(Template.characters.du, "Herein!");
        await Template.fS.Speech.tell(Template.characters.du, "Wieso kommt er nicht herein?");
        await Template.fS.Speech.tell(Template.characters.du, "Hmhh. Er hat aufgehört, dann geh ich wohl mal nachsehen.");
        await Template.fS.Character.animate(Template.characters.du, Template.characters.du.pose.idle, Template.fromLeftToRight());
        await Template.fS.Speech.tell(Template.characters.du, "AAAAAAAAh was zum?");
        await Template.fS.Location.show(Template.locations.portal);
        Template.fS.Sound.play(Template.sound.portal_sound, 0.5, false);
        Template.fS.Character.hideAll();
        Template.fS.Speech.hide();
        Template.fS.Sound.fade(Template.sound.hospital_background, 0, 1, true);
        await Template.fS.update(1);
        await delay_2sec();
    }
    Template.Intro = Intro;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.items = {
        // pen: {
        //     name : "das",
        //     description : "ist",
        //     image : "das"
        // }
        handy: {
            name: "Handy",
            description: "Das ist mein Handy. Vielleicht kann ich mir damit die Zeit vertreiben.",
            image: "./Images/Items/Handy.png"
        }
    };
    function AddItem(item) {
        Template.items[item.name] = item;
    }
    Template.AddItem = AddItem;
    async function GetInventory() {
        return await Template.fS.Inventory.open();
    }
    Template.GetInventory = GetInventory;
    function AddItemToInventory(item) {
        const i = Template.items[item];
        if (i) {
            Template.fS.Inventory.add(i);
            return true;
        }
        else {
            return false;
        }
    }
    Template.AddItemToInventory = AddItemToInventory;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        hospital_room: {
            name: "Krankenhauszimmer",
            background: "./Images/Backgrounds/Krankenhauszimmer_1.png"
        },
        blackscreen: {
            name: "Blackscreen",
            background: "./Images/Backgrounds/blackscreen.png"
        },
        portal: {
            name: "Portal",
            background: "./Images/Backgrounds/portal.png"
        },
        landscape: {
            name: "Glade",
            background: "./Images/Backgrounds/landscape.png"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.menuState = true;
    Template.inGameMenu = {
        save: "Speichern",
        load: "Laden",
        close: "Menü schließen",
        open: "Menü öffnen",
        credits: "Credits",
        volumeup: "+",
        volumedown: "-"
    };
    let volume = 5.0;
    function incrementSound() {
        if (volume >= 10)
            return;
        volume += 0.5;
        Template.fS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        Template.fS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    function showCredits() {
        Template.fS.Text.addClass("credits");
        Template.fS.Text.print(
        // "Die Visual Novel wurde mit FudgeStory erstellt." +
        // "<br/>" +
        // "Von Nick Häcker" +
        // "<br/>" +
        // "Die Elemente wurden selbst gezeichnet." +
        // "<br/>"
        `
            Characktere: https://www.vecteezy.com/vector-art/2382548-isometric-charcter-concept <br/>
            Blackscreen Location: https://www.bravo.de/assets/field/image/blacklivesmatter_darum_posten_alle_stars_ein_schwarzes_foto.jpg <br/>
            von <b>Nick Häcker</b>
            `);
    }
    Template.showCredits = showCredits;
    async function buttonFunctions(option) {
        console.log(option);
        switch (option) {
            case Template.inGameMenu.save:
                await Template.fS.Progress.save();
                break;
            case Template.inGameMenu.close:
                Template.gameMenu.close();
                Template.menuState = false;
                break;
            case Template.inGameMenu.load:
                await Template.fS.Progress.load();
                break;
            case Template.inGameMenu.volumeup:
                incrementSound();
                break;
            case Template.inGameMenu.volumedown:
                decrementSound();
                break;
            case Template.inGameMenu.credits:
                showCredits();
                break;
            default:
                Template.gameMenu.open();
                Template.menuState = true;
                break;
        }
    }
    Template.buttonFunctions = buttonFunctions;
    document.addEventListener("keydown", handleKeyPress);
    async function handleKeyPress(event) {
        switch (event.code) {
            case Template.f.KEYBOARD_CODE.F8:
                buttonFunctions("Speichern");
                console.log("saved successfull");
                break;
            case Template.f.KEYBOARD_CODE.F9:
                buttonFunctions("Laden");
                console.log("load successfull");
                break;
            case Template.f.KEYBOARD_CODE.M:
                if (Template.menuState) {
                    console.log("close");
                    buttonFunctions("Menü schließen");
                }
                else {
                    console.log("open");
                    buttonFunctions("Menü öffnen");
                }
                break;
        }
    }
    Template.handleKeyPress = handleKeyPress;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        // music
        hospital_background: "./Audio/Hospital_Room_Ambience.wav",
        glade: "./Audio/Light_Wind Loop.wav",
        // sound
        tochscreen: "./Audio/tochscreen.wav",
        click: "",
        handy_notification: "./Audio/Notification_02.wav",
        footsteps_socks: "./Audio/Footsteps_Socks _90_fpm.wav",
        door_knocking: "./Audio/Triple_Knock_on_Wooden_Door_v2.wav",
        portal_sound: "./Audio/mystic_portal.wav"
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.transitions = {
        clock: {
            duration: 1,
            alpha: "./FreeTransitions/Others/020.jpg",
            edge: 1
        },
        long: {
            duration: 5,
            alpha: "./FreeTransitions/Others/039.jpg",
            edge: 1
        }
    };
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map