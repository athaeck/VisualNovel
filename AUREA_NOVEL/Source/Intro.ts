namespace AUREA_NOVEL {
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
      await fS.update(1);
    }



    fS.Sound.play(sound.hospital_background, 0.2, true);
    await fS.Location.show(locations.hospital_room);
    await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

    await fS.Speech.tell(characters.narrator, "Es war einmal ein sehr einsamer und düsterer Tag.");
    await fS.Speech.tell(characters.narrator, "Unser Hauptakteur der Geschichte liegt hier in diesem Zimmer.");
    await fS.Speech.tell(characters.narrator, "Sagen wie er heißt kann ich leider nicht, da bräuchte ich deine Hilfe. Wie würdest du ihn gerne nennen wollen? ");

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



    switch (boredom_killer_element) {
      case boredom_killer.liegen_bleiben:

        await fS.Speech.tell(characters.du, "Dann versuch ich doch nochmal zu schlafen.");
        await fS.Speech.tell(characters.du, "Ich kann hier aber auch wirklich gar nichts anderes machen. Ich werde morgen mal versuchen mir meine Zeit anders zu vertreiben und was zu suchen.");
        break;
      default:
        dataForSave.choice.selectHandy = true;
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
        fS.Inventory.add(items.handy);
        fS.Sound.play(sound.handy_notification, 1, false);
        await fS.Speech.tell(characters.du, "Oh wie wenn man vom Teufel spricht, spricht das Handy. Mal sehen was Instagram so her gibt.");
        await ViewInsta();
        await delay_5sec();

        await fS.Speech.tell(characters.du, "Mheee. LAAAAAANGWEILIG. Mir ist langweilig. Dann versuch ich doch nochmal einen Moment zu schlafen.");
        break;
    }
    await FadeToBlack();
    fS.Sound.fade(sound.hospital_background, 0, 1, true);
    await fS.update(1);
    await delay_5sec();
    fS.Sound.play(sound.hospital_background, 0.2, true);
    fS.Sound.play(sound.door_knocking, 0.5, false);
    await delay_2sec();
    await fS.update(1);
    await fS.Location.show(locations.hospital_room);
    await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
    await fS.update(transitions.long.duration, transitions.long.alpha, transitions.long.edge);
    fS.Speech.show();
    await fS.Speech.tell(characters.du, "Ja?");
    fS.Sound.play(sound.door_knocking, 0.5, false);
    await delay_2sec();
    await fS.Speech.tell(characters.du, "Jahaa?");
    fS.Sound.play(sound.door_knocking, 0.5, false);
    await delay_2sec();
    await fS.Speech.tell(characters.du, "Herein!");
    await fS.Speech.tell(characters.du, "Wieso kommt er nicht herein?");
    await fS.Speech.tell(characters.du, "Hmhh. Er hat aufgehört, dann geh ich wohl mal nachsehen.");
    fS.Sound.play(sound.footsteps_socks, 0.5, false);
    await fS.Character.animate(characters.du, characters.du.pose.idle, fromLeftToRight());
    await fS.Speech.tell(characters.du, "AAAAAAAAh was zum?");
    fS.Sound.fade(sound.footsteps_socks, 0, 0.2);
    await fS.Location.show(locations.portal);
    fS.Sound.play(sound.portal_sound, 0.5, false);
    fS.Character.hideAll();
    fS.Speech.hide();
    fS.Sound.fade(sound.hospital_background, 0, 1, true);
    await fS.update(1);
    await delay_2sec();
  }

}
