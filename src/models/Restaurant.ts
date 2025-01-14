class Restaurant {
  title: string
  rate: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    title: string,
    rate: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.title = title
    this.rate = rate
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Restaurant
