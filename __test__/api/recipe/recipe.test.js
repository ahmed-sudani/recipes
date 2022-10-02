import mongoose from 'mongoose'
import { testApiHandler } from 'next-test-api-route-handler'
import addRecipe from '../../../pages/api/recipe/add'
import { buildParams } from '../../../util/searchParams'

beforeAll((done) => {
  done()
})

afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close()
  done()
})

describe('Recipe', () => {
  const recipe = {
    name: 'chicken',
    image:
      'https://recipes-n1d1ag83a-ahmed-sudani.vercel.app/_next/image?url=%2Fcster.png&w=384&q=75',
    country: 'Italy',
    time: 50,
    ingredients: ['chicken', 'chicken'],
  }
  it('should add new recipe', async () => {
    await testApiHandler({
      handler: addRecipe,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'POST',
          body: buildParams(recipe),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })

        expect(res.status).toBe(201)
      },
    })
  })
})
