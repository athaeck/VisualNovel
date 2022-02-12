namespace AUREA_NOVEL {

    let temp_items: string[] = [];
    async function HandleInventoryInput(): Promise<void> {
        const items: string[] = await fS.Inventory.open();

        if (items && items.length > 0) {
            temp_items = items;
        } else {
            await HandleInventoryInput();
        }
    }
    function DidIWin(): boolean {
        return (Math.floor(Math.random() * 2) == 0) ? true : false;
    }
    export async function Fight(): fS.SceneReturn {
        console.log("Start Fight Sequenz");

        await fS.Location.show(locations.fight);
        fS.Sound.play(sound.battle_ambient, 0.5, true);
        // await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
        await fS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);
        if (dataForSave.choice.selectEvil) {
            await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
            await fS.Character.show(characters.illusion, characters.illusion.pose.idle, fS.positionPercent(30, 80));
            await fS.update(1);
            await fS.Speech.tell(characters.illusion, "Da wären wir nun also.");
            await fS.Speech.tell(characters.illusion, "Schau mal da drüben sind die Abtrünnigen.");
            await fS.Character.show(characters.inkubus, characters.inkubus.pose.idle, fS.positionPercent(80, 80));
            await fS.Character.show(characters.ent, characters.ent.pose.idle, fS.positionPercent(90, 80));
            await fS.update(1);
            await fS.Speech.tell(characters.inkubus, `Oh neeeeein! Sie haben ${characters.du.name} auf ihre Seite ziehen können.`);
            await fS.Speech.tell(characters.inkubus, "Wir müssen sie dennoch versuchen zu schlagen! Und das Land zu retten!");
            await fS.Speech.tell(characters.illusion, "Sieh einer an, sie meinen immernoch, dass sie die Erlöser sind.");
            await fS.Speech.tell(characters.illusion, `Los ${characters.du.name}, zeig ihnen, was wir von ihnen halten!`);

            await HandleInventoryInput();
            const items: string[] = temp_items;

            items.forEach(async (i) => {
                Object.keys(characters).forEach(async (y: string) => {
                    const yObj: fS.CharacterDefinition = characters[`${y}`];
                    if (yObj.name === i) {
                        await fS.Character.animate(yObj, yObj.pose.idle, fromLeftToRight());
                        await fS.update(1);
                    }
                });
            });
            await delay_2sec();
            // await fS.update(1);
            const win: boolean = DidIWin();
            fS.Text.setClass("fight-information");
            fS.Text.addClass(`${win ? "victory" : "lose"}`);
            fS.Text.print(`${win ? "Du hast gewonnen" : "Du hast verloren"}`);
            if (win) {
                items.forEach(async (i) => {
                    Object.keys(characters).forEach(async (y: string) => {
                        const yObj: fS.CharacterDefinition = characters[`${y}`];
                        if (yObj.name === i) {
                            await fS.Character.hide(yObj);
                            await fS.update(1);
                        }
                    });
                });
                await delay_2sec();
                // await fS.update(1);
                await fS.Character.hide(characters.inkubus);
                await fS.Character.hide(characters.ent);
                await fS.Character.show(characters.goma, characters.goma.pose.idle, fS.positionPercent(90, 80));
                await fS.update(1);
                await fS.Speech.tell(characters.illusion, "Das hast du sehr gut gemacht, wir sind stolz auf dich!");
                OpenMeter();
                await fS.update(1);
                await fS.Speech.tell(characters.goma, "Allerdings können wir jetzt nichts mehr mit dir anfangen. Wir müssen dich leider töten");
                dataForSave.puls = 0;
                dataForSave.yourPuls = "Du wurdest gerade umgebracht";

            } else {
                items.forEach(async (i) => {
                    Object.keys(characters).forEach(async (y: string) => {
                        const yObj: fS.CharacterDefinition = characters[`${y}`];
                        if (yObj.name === i) {
                            await fS.Character.hide(yObj);
                            await fS.update(1);
                        }
                    });
                });
                await delay_2sec();
                await fS.update(1);
                await fS.Speech.tell(characters.inkubus, "Wir habens geschafft!");
                await fS.Speech.tell(characters.inkubus, "Wir lassen dich am Leben und befreien dich von deiner Gefangenhschaft.");
                await fS.Character.hide(characters.illusion);
                await fS.update(1);

            }
        } else {
            await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
            await fS.Character.show(characters.inkubus, characters.inkubus.pose.idle, fS.positionPercent(30, 80));
            await fS.update(1);
            await fS.Speech.tell(characters.inkubus, "Da wären wir nun also.");
            await fS.Speech.tell(characters.inkubus, "Schau mal da drüben. Da sind Illusion, der Diener Gomas und Goma. Sie sehen bereit für diesen Kamp aus.");
            await fS.Character.show(characters.illusion, characters.illusion.pose.idle, fS.positionPercent(80, 80));
            await fS.Character.show(characters.goma, characters.goma.pose.idle, fS.positionPercent(90, 80));
            await fS.update(1);
            await fS.Speech.tell(characters.illusion, "Das ist also dieser Schwächling der uns hier herausfordert.");
            await fS.Speech.tell(characters.goma, "Das wollen wir jetzt aber sehen was da passiert.");
            await fS.Speech.tell(characters.inkubus, "Bist du bereit?");
            await fS.Speech.tell(characters.du, "So bereit wie man nur sein kann. ");
            // await fS.Speech.tell(characters.inkubus, `Oh neeeeein! Sie haben ${characters.du.name} auf ihre Seite ziehen können.`);
            // await fS.Speech.tell(characters.inkubus, "Wir müssen sie dennoch versuchen zu schlagen! Und das Land zu retten!");
            // await fS.Speech.tell(characters.illusion, "Sieh einer an, sie meinen immernoch, dass sie die Erlöser sind.");
            // await fS.Speech.tell(characters.illusion, `Los ${characters.du.name}, zeig ihnen, was wir von ihnen halten!`);

            await HandleInventoryInput();
            const items: string[] = temp_items;

            items.forEach(async (i) => {
                Object.keys(characters).forEach(async (y: string) => {
                    const yObj: fS.CharacterDefinition = characters[`${y}`];
                    if (yObj.name === i) {
                        await fS.Character.animate(yObj, yObj.pose.idle, fromLeftToRight());
                        await fS.update(1);
                    }
                });
            });
            await delay_2sec();
            const win: boolean = DidIWin();
            fS.Text.setClass("fight-information");
            fS.Text.addClass(`${win ? "victory" : "lose"}`);
            fS.Text.print(`${win ? "Du hast gewonnen" : "Du hast verloren"}`);

            if (win) {
                items.forEach(async (i) => {
                    Object.keys(characters).forEach(async (y: string) => {
                        const yObj: fS.CharacterDefinition = characters[`${y}`];
                        if (yObj.name === i) {
                            await fS.Character.hide(yObj);
                            await fS.update(1);
                        }
                    });
                });
                await delay_2sec();
                await fS.Character.hide(characters.illusion);
                await fS.Character.hide(characters.goma);
                await fS.update(1);
                await fS.Speech.tell(characters.inkubus, `Das hast du sehr gut gemacht ${characters.du.name}.`);
                await fS.Speech.tell(characters.inkubus, "Du hast uns und unseren Freunden geholfen. Wir sind dir alles erdenkliche schuldig.");
            } else {
                items.forEach(async (i) => {
                    Object.keys(characters).forEach(async (y: string) => {
                        const yObj: fS.CharacterDefinition = characters[`${y}`];
                        if (yObj.name === i) {
                            await fS.Character.hide(yObj);
                            await fS.update(1);
                        }
                    });
                });
                await delay_2sec();
                await fS.Character.hide(characters.inkubus);
                await fS.update(1);
                await fS.Speech.tell(characters.goma, "HAHAHAHAHAHA hast du wirklich gedacht du kannst uns besiegen?");
                OpenMeter();
                await fS.update(1);
                await fS.Speech.tell(characters.goma, "Dafür wirst du jetzt bezahlen!");
                dataForSave.puls = 0;
                dataForSave.yourPuls = "Du wurdest gerade umgebracht";
            }

        }
        CloseMeter();
        await FadeToBlack();
        await delay_2sec();
    }
}