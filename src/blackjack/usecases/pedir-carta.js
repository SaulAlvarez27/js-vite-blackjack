
/**
 * Esta funcion extrae una carta
 * @param {Array<string>} deck es un arreglo de string
 * @returns {String} retorna una carta
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}