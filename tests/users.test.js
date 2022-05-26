const request = require("supertest");
const server = require("../server");
const { PrismaClient } = require("@prisma/client");
const data = require("./data/testsData");

const prisma = new PrismaClient();

beforeAll(async () => {    
    await prisma.user.create({
        data : data.testsData.users[0]
    });    
});

afterAll(async () => {
    await prisma.user.delete({
        where: {
            email: 'testUser001@gmail.com'
        }
    });
});

describe("user test", () => {

    test("login_success_case_01", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: 'testUser001@gmail.com', password: 'Probit123!@#' })
			.expect(200);
    });    
    test("login_fail_case_01", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: '', password: '' })
			.expect(400, {message : "INVALID_VALUES", status : 400});
    }); 
    test("login_fail_case_02", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: 'fail00@', password: 'Prcdwit123!@#' })
			.expect(400, {message : "INVALID_VALUES", status : 400});
    }); 
    test("login_fail_case_03", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: 'testUser001@gmail.com', password: 'Pr23!@#' })
			.expect(400, {message : "INVALID_VALUES", status : 400});
    });     
    test("login_fail_case_04", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: 'testUser001@gmail.com', password: 'preobcit123!@#' })
			.expect(400, {message : "INVALID_VALUES", status : 400});
    }); 
    test("login_fail_case_05", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: 'testUser001@gmail.com', password: 'PRDD123!@#' })
			.expect(400, {message : "INVALID_VALUES", status : 400});
    }); 
    test("login_fail_case_06", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: 'testUser001@gmail.com', password: 'UEroit!@#' })
			.expect(400, {message : "INVALID_VALUES", status : 400});
    }); 
    test("login_fail_case_07", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: 'testUser001@gmail.com', password: 'Prsdfzt123' })
			.expect(400, {message : "INVALID_VALUES", status : 400});
    }); 
    test("login_fail_case_08", async () => {
        await request(server)
			.post('/users/login')
            .send({ email: 'testUser001@gmail.com', password: 'Prot11123!@#' })
			.expect(400, {message : "INVALID_VALUES", status : 400});
    }); 
    test("user_email_success_case_01", async () => {
        await request(server)
            .get('/users/info')
            .set("access_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MzI5NDc1OX0.-M7oQhhCpdaR-iaJJ5rCSyqLEbZpQL0kYJoySFoJBWk")
            .expect(200, {status: 200, userEmail : "testUser001@gmail.com"});
    });   
    test("user_email_fail_case_01", async () => {
        await request(server)
            .get('/users/info')
            .set("access_token", "")
            .expect(401, {status: 401, message : "INVALID_TOKEN"});
    }); 
    
});

