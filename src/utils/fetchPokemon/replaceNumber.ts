/**
 * @module ポケモンIdの先頭の0を取り除いた文字列を返す
 * @param pokemonId ポケモンid
 */
export const repalceLeadingZeros = (
  pokemonId: string | string[] | undefined
) => {
  if (typeof pokemonId === 'string') {
    return pokemonId?.replace(/^0+/, '')
  }
}
