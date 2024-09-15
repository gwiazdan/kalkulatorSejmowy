export default function evaluatePartyResults(results) {
    let topParty = '';
    let maxScore = -Infinity;

    // Znajdź partię z najwyższym wynikiem
    for (const [party, score] of Object.entries(results)) {
        if (score > maxScore) {
            maxScore = score;
            topParty = party;
        }
    }

    // Sprawdź, czy najwyższy wynik jest powyżej 40% lub 50%
    const isAbove40 = maxScore > 40;
    const isAbove50 = maxScore > 50;

    return {
        topParty,
        maxScore,
        isAbove40,
        isAbove50
    };
}