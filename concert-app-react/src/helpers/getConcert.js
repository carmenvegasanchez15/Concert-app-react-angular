export const getConcert = async (category) => {
  const url = ``
  const resp = await fetch(url)
  const { data } = await resp.json()

  const concert = data.map((conc) => {
    return {
      id: conc.id,
      concert: conc.concert,
      artist: conc.artist,
      city: conc.city,
    }
  })

  return concert
}
