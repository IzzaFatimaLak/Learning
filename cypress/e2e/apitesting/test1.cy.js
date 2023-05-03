describe('PokéAPI', () => {
    it('can fetch details of a Pokémon by ID', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/1')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.name).to.eq('bulbasaur')
          expect(response.body.base_experience).to.eq(64)
        })
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .then((response) => {
          cy.log(response.body)
        })
      


    })
  })
  