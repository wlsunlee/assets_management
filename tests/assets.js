const request = require("supertest");
const server = require("../server");

exports.assetTest = () => describe("assets test", () => {

    test("asset_list_success_case_01", async () => {
        await request(server)
            .get('/assets')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .expect(200);
    });
    test("asset_address_success_case_01", async () => {
        await request(server)
            .post('/assets/address')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .send({ "coinId": 2, "blockchainTypeId" : 4 })
            .expect(200);
    });
    
});