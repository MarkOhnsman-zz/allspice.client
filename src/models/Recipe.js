export default class Recipe {
  constructor({ title, description, imgUrl, steps, ingredients, creator, creatorId }) {
    this.title = title
    this.description = description
    this.imgUrl = imgUrl
    this.steps = steps || []
    this.ingredients = ingredients || []
    this.creator = creator
    this.creatorId = creatorId
  }
}
