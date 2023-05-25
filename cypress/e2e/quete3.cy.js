const { describe } = require("mocha");

describe ('test API',()=> {
  it('create user',()=>{
    cy.request('POST','https://practice.expandtesting.com/notes/api/users/register');
      headers:{ 
        accept: 'application/json'
  };
      name:'123nina';
      email:'nini@gmail.com';
      password:'nina456';
  }).then ((response) => {
    expect(response.status).to.equal(201);
    expect(response.body/email).to.equal("nini@gmail.com")
    expect(response.body.sucess).to.eql(true);
  })
})

describe('create notes', () => {
  it('POST', () => {
    cy.fixture("first").then((nini)=> {
      cy.request({
        url : 'https://practice.expandtesting.com/notes/api/notes',
        headers:{
          accept: 'accept: application/json',
          "x-auth-token" : "f9955bfe9270423cbf017c2a5ea89fb58c9593d3441747399a114ee647d959a6"
        },
        body : {
          category: nini.category,
          title: nini.title,
          description: nini.category,
        }

      }).then ((response)=> {
          expect(response.status).to.eql(200);
          expect(responses.body.success).to.eql(true);
      })
    })
    })
  })

    it ('POST', () => {
      cy.request({
        url:'https://practice.expandtesting.com/notes/api/notes',
        headers :{
          accept: 'accept: application/json',
          "x-auth-token" : "f9955bfe9270423cbf017c2a5ea89fb58c9593d3441747399a114ee647d959a6"
        },
        body: {
          category : "Work",
          title : "coucou",
          description : "formule simple"
        }
      }).then ((response) => {
        expect(response.status).to.eql(200);

      })
})
