import fetch from 'node-fetch'

export const getQuote = async (
  type: 'error' | 'success',
  msg: string
): Promise<string> => {
  return await (
    await fetch(`https://isla-master.marnixah.com/quotes/${type}/${msg}`)
  ).text()
}
