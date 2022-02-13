namespace AUREA_NOVEL {
    export type StoryDecisionEndingImpact = {
        _isGoodEnding: boolean
    };
    async function PlayGoodEnd(): Promise<void> {
        fS.Sound.play(sound.hospital_background, 0.2, true);
        await fS.Location.show(locations.hospital_room);
        await fS.update(transitions.long.duration, transitions.long.alpha, transitions.long.edge);
        await fS.Character.show(characters.du, characters.du.pose.idle, fS.positionPercent(10, 80));
        await fS.Speech.tell(characters.du, "Was ein Traum, zumindest denke ich dass es ein Traum war. Ich bin so voller Medikamenten, dass ich gar nicht unterschieden kann, ob das gerade wirklich stattgefunden hat oder nicht.");
        fS.Text.setClass("end-screen");
        fS.Text.addClass("alive");
        fS.Text.print("Du hast das Koma überlebt.");
    }
    async function PlayBadEnding(): Promise<void> {
        fS.Text.setClass("end-screen");
        fS.Text.addClass("dead");
        fS.Text.print("Du bist leider in deinem Komaschlaf verstorben.");
    }
    export async function ValidateEnding(data: StoryDecisionEndingImpact): Promise<void> {
        if (data._isGoodEnding) {
            await PlayGoodEnd();
        } else {
            await PlayBadEnding();
        }
    }

    export async function End(): fS.SceneReturn {
        console.log("Start End Sequenz");

        const endDefinition: StoryDecisionEndingImpact = {
            _isGoodEnding: false
        };
        if (dataForSave.puls <= 160 && dataForSave.puls >= 30) {
            endDefinition._isGoodEnding = true;
        }
        await fS.Location.show(locations.hospital_room);
        await fS.update(transitions.long.duration, transitions.long.alpha, transitions.long.edge);
        await ValidateEnding(endDefinition);

    }
}