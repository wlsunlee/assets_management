const request = require("supertest");
const server = require("../server");

exports.withdrawalTest = () => describe("withdrawals test", () => {

    test("withdrawals_success_case_01", async () => {
        await request(server)
            .post('/withdrawals')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .send({ "assetId": 2, "blockchainTypeId" : 4, "withdrawalAddress" : "a74f0b80ehhh8dbbf0bf77bca7e1df66e0b2k0db3m19c6e337831e8ca526d621", "quantity" : 1.05 })
            .expect(201);
    });
    test("withdrawals_fail_case_01", async () => {
        await request(server)
            .post('/withdrawals')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .send({ "assetId": 2, "blockchainTypeId" : 4, "withdrawalAddress" : "a74f0b80ehhh8dbbf0bf77bca7e1df66e0b2k0db3m19c6e337831e8ca526d621", "quantity" : 13.05 })
            .expect(400);
    });
    test("withdrawals_fail_case_02", async () => {
        await request(server)
            .post('/withdrawals')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .send({ "assetId": 2, "blockchainTypeId" : 4, "withdrawalAddress" : "a74f0b80ehhh8dbbf0bf77bca7e1df66e0b2k0db3m19c6e337831e8ca526d621", "quantity" : 0 })
            .expect(400);
    });
    test("withdrawals_fail_case_03", async () => {
        await request(server)
            .post('/withdrawals')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .send({ "assetId": 2, "blockchainTypeId" : 4, "withdrawalAddress" : "a74f0b80ehhh8dbbf0bf77bca7e1df66e0b2k0db3m19c6e337831e8ca526d621", "quantity" : null })
            .expect(400);
    });
    
});