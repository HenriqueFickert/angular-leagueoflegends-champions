export class DificultyHelper {
    public getDificultyData(dificulty: number) {
        const groups = [
            { inicial: 0, final: 3, result: 1 },
            { inicial: 4, final: 6, result: 2 },
            { inicial: 7, final: 10, result: 3 },
        ];

        const grupoEncontrado = groups.find(group => dificulty >= group.inicial && dificulty <= group.final);
        return grupoEncontrado ? grupoEncontrado.result : 0;
    }
}