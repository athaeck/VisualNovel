namespace AUREA_NOVEL {

    export async function Glade(): fS.SceneReturn {
        console.log("Start Glade Sequenz");
        fS.Sound.play(sound.glade, 0.5, true);
        await fS.Location.show(locations.landscape);

        await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
        await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        await fS.Speech.tell(characters.du, "Wo bin ich? Wie bin ich hier her gekommen? Wie komme ich zurück?");

        await fS.Speech.tell(characters.du, "Gerade war ich doch noch in meinem Zimmer?!? Wo ist das Portal hin??? HIIIIILFEEEEEEEEE!!!!!");

        await fS.Speech.tell(characters.du, "Ich muss mir dringend was überlegen.");

        if (dataForSave.choice.selectHandy) {
            await fS.Speech.tell(characters.du, "Hab ich mein Handy dabei? Ich muss schnell mal schauen.");
        }
        const items: string[] = await fS.Inventory.open();

        OpenMeter();
        await fS.update(1);

        if (items && items.length > 0 && items.includes("Handy")) {
            await fS.Speech.tell(characters.du, "Ja perfekt hab ich.");
            fS.Sound.play(sound.tochscreen, 0.5, false);
            await fS.Speech.tell(characters.du, "Mist.");
            await fS.Speech.tell(characters.du, "Kein Empfang. Das war meine letze Rettung, verdammt! HIIIIILFEEEEEEE!!!!?!");
        } else {
            await fS.Speech.tell(characters.du, "Verdammt, was mach ich jetzt??!?");
        }
        dataForSave.puls += 10;
        dataForSave.yourPuls = "Dein Puls hat sich durch deine Aufregung um 10 erhöht!";
        await fS.update(1);


        let panic = {
            umherrennen: "Umherrennen",
            beruhigen: "Versuchen zu beruhigen"
        };

        let panic_choice = await fS.Menu.getInput(panic, "boredom-killer");


        function lefttoright(): fS.AnimationDefinition {
            return {
                start: {
                    translation: fS.positions.left,
                    rotation: -1, scaling: new fS.Position(1, 1), color: fS.Color.CSS("white", 1)
                }, end: {
                    translation: fS.positions.right, rotation: 1, scaling: new fS.Position(1, 1), color: fS.Color.CSS("white", 1)
                },
                duration: 1,
                playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
            };
        }
        function righttoleft(): fS.AnimationDefinition {
            return {
                start: {
                    translation: fS.positions.right,
                    rotation: -1, scaling: new fS.Position(1, 1), color: fS.Color.CSS("white", 1)
                }, end: {
                    translation: fS.positions.left, rotation: 1, scaling: new fS.Position(1, 1), color: fS.Color.CSS("white", 1)
                },
                duration: 1,
                playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
            };
        }

        switch (panic_choice) {
            case panic.umherrennen:
                dataForSave.choice.selectEvil = true;
                fS.Sound.fade(sound.laufen_gras, 0.5, 0.1, false);
                await fS.Character.animate(characters.du, characters.du.pose.idle, lefttoright());
                await delay_2sec();
                dataForSave.puls += 30;
                dataForSave.yourPuls = "Dein Puls hat sich durch deine Aufregung um 30 erhöht!";
                await fS.update(1);

                await fS.Character.animate(characters.du, characters.du.pose.idle, righttoleft());
                await delay_2sec();
                CloseMeter();
                await fS.update(1);
                fS.Sound.fade(sound.laufen_gras, 0, 0.1, false);
                fS.Sound.play(sound.stolpern, 0.5, false);
                await fS.Speech.tell(characters.du, "AAAAAAAAAh");

                await FadeToBlack();

                // fS.Sound.play(sound.footsteps_socks, 0.5, false);
                // await fS.Location.show(locations.);
                // await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
                // await fS.update(transitions.long.duration, transitions.long.alpha, transitions.long.edge);
                // fS.Speech.show();


                // fS.Sound.fade(sound.footsteps_socks, 0, 0.1, false);

                return "vault";
            default:
                dataForSave.puls -= 10;
                dataForSave.yourPuls = "Dein Puls hat sich um 10 Punkte gesenkt, da du dich beruhigt hast.";
                await fS.update(1);
                CloseMeter();
                await fS.update(1);
                await FadeToBlack();
                await fS.update(1);
                await delay_2sec();
                await fS.Location.show(locations.landscape);
                await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
                await fS.Character.show(characters.inkubus, characters.inkubus.pose.idle, fS.positionPercent(90, 80));
                await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
                await fS.Speech.tell(characters.inkubus, `Hallo ${characters.du.name}.`);
                await fS.Speech.tell(characters.du, "Wer bist du? Wo kommst du denn jetzt her? Ich hab dich gar nicht kommen sehen");
                await fS.Speech.tell(characters.inkubus, `Mein Name lautet ${characters.inkubus.name} und ich bin hier um dich zu suchen und zu empfangen.`);
                await fS.Speech.tell(characters.inkubus, "Komm mit ich dich den anderen Vorstellen.");
                await fS.Speech.tell(characters.du, "Okey? Ich hab ja keine andere Wahl. Ich würde soweiso hier feststecken, ich komme mit.");
                return "camp";
        }
    }
}