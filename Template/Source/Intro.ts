namespace Template {
  export async function Intro(): fS.SceneReturn {
    console.log("Start with hospital room scene");


    // fS.Inventory.add(items.pen)
    // const is: string[] = await fS.Inventory.open();
    // console.log(is);



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

    async function ViewInsta(): Promise<void> {

      for (let i = 0; i < 10; i++) {
        fS.Sound.play(sound.tochscreen, 1);
        const postPath: string = `./Images/Items/insta_0${i}.jpg`;
        characters.instaPost.pose.idle = postPath;
        await fS.Character.animate(characters.instaPost, characters.instaPost.pose.idle, fromDownLeftToTopRight());
        // await fS.Progress.defineSignal([() => fS.Progress.delay(5)]);
        await fS.Character.hide(characters.instaPost);
      }
    }



    fS.Sound.play(sound.hospital_background, 0.2, true);
    await fS.Location.show(locations.hospital_room);
    await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
    // await fS.Character.show(characters.aisaka, characters.aisaka.pose.happy, fS.positionPercent(30, 100));
    // await fS.Character.sho
    // await fS.update(1);
    await fS.Speech.tell(characters.narrator, "Es war einmal ein sehr einsamer und düsterer Tag.");
    await fS.Speech.tell(characters.narrator, "Unser Hauptakteur der Geschichte liegt hier in diesem Zimmer.");
    await fS.Speech.tell(characters.narrator, "Sagen wie er heißt kann ich leider nicht, da bräuchte ich deine Hilfe. Wie würdest du ihn gerne nennen wollen? ");
    // await fS.Speech.tell(characters.aisaka, "Hi2.");
    // await fS.Character.hide(characters.aisaka);
    // characters.
    // await fS.update(1);
    dataForSave.player.name = await fS.Speech.getInput();
    characters.du.name = dataForSave.player.name;
    await fS.update(1);
    await fS.Speech.tell(characters.narrator, `Damit wäre meine Pflicht der Einleitung getan. ${characters.du.name} wird nun also übernehmen. Viel Vergnügen!`);
    await ValidateGender();
    await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
    await fS.update(1);
    await fS.Speech.tell(characters.du, "Wieder so ein Tag, der seinem vorangegangenem Tag gleicht. Wieder kein Entertainment heute.");
    await fS.Speech.tell(characters.du, "Der Tag ist nun schon fast vorbei und ich bin immernoch hier ans Bett gefangen.");
    await fS.Speech.tell(characters.du, "Hoffentlich hörrt das bald auf.");
    await fS.Speech.tell(characters.du, "Ich kann mir die Zeit vielleicht mit meinem Handy vertreiben. Oder ich versuch ein bisschen zu schlafen, es ist jedenfalls schon echt dunkel draußen.");

    await fS.Speech.tell(characters.narrator, "Ich werde immer mal wieder einspringen um dir als Spieler ein paar Dinge zu erklären oder fehlende Informationen zu ergänzen.");
    await fS.Speech.tell(characters.narrator, "Zum Beispiel erhälst du gleich dein Handy als Gegenstand um mit ihm zu interagieren.");



    let boredom_killer = {
      liegen_bleiben: "Liegen bleiben",
      handy_rausholen: "Handy rausholen"
    };

    let boredom_killer_element = await fS.Menu.getInput(boredom_killer, "boredom-killer");

    let selected_sleep: boolean = false;

    switch (boredom_killer_element) {
      case boredom_killer.liegen_bleiben:
        selected_sleep = true;
        // await fS.Speech.tell(characters.aisaka, "Hi2.");

        break;
      default:
        await fS.Speech.tell(characters.narrator, "Zunächst erhälst du einen Überblick über den erhaltenen Gegenstand. Dieser wird sobald du die Information geschlossen hast in dein Inventar für spätere Aktionen abgelegt.");
        await fS.Character.animate(characters.handy, characters.handy.pose.idle, fromCenterToMidLeft());
        fS.Text.setClass("item-definition");
        fS.Text.addClass("handy-information");
        fS.Text.print(`<div>  
                          <div class="flex-wrapper">
                            <div class="content-part">
                              <h1>${items.handy.name}</h1>
                               <span>${items.handy.description}</span>
                            </div>
                            <div class="image-part">
                               <div class="item-image-wrapper">
                                  <img class="item-image" src="${items.handy.image}" />
                                </div>
                            </div>
                          </div>
                      </div>`);
        await fS.Character.hide(characters.handy);
        await fS.update(1);
        fS.Sound.play(sound.handy_notification, 1, false);
        await fS.Speech.tell(characters.du, "Oh wie wenn man vom Teufel spricht, spricht das Handy. Mal sehen was Instagram so her gibt.");
        ViewInsta();
        await fS.update(1);
        await fS.Speech.tell(characters.du, "Mheee. LAAAAAANGWEILIG. Mir ist langweilig. Dann versuch ich doch nochmal einen Moment zu schlafen.");
        break;
    }



  }

}
