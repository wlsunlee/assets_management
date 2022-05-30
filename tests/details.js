const request = require("supertest");
const server = require("../server");

exports.detailTest = () => describe("details test", () => {

    test("details_success_case_01", async () => {
        await request(server)
            .get('/details')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")            
            .expect(200);
    });
    test("details_success_case_02", async () => {
        await request(server)
            .get('/details')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .query({pageCount : 1, search : "비트"})
            .expect(200);
    });
    test("details_success_case_03", async () => {
        await request(server)
            .get('/details')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .query({pageCount : 1, coinId : 2, blockchainTypeId : 4, detailType : "출금"})
            .expect(200);
    });
   
});