namespace Template {
    export type StoryDecisionEndingImpact = {
        _isGoodEnding: boolean
    }
    function PlayGoodEnd(data: StoryDecisionEndingImpact): void {

    }
    function PlayBadEnding(data: StoryDecisionEndingImpact): void {
        
    }
    export function ValidateEnding(data: StoryDecisionEndingImpact): void {
        if (data._isGoodEnding) {
            PlayGoodEnd(data);
        } else {
            PlayBadEnding(data);
        }
    }
}