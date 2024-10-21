"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                password,
                firstname: firstName,
                lastname: lastName
            },
            select: {
                id: true,
                email: true, password: true
            }
        });
        console.log(res);
    });
}
const updateUser = (email_1, _a) => __awaiter(void 0, [email_1, _a], void 0, function* (email, { firstname, lastname }) {
    const res = yield prisma.user.update({
        where: { email },
        data: {
            firstname,
            lastname
        }
    });
    console.log(res);
});
// updateUser("sid@gmail.com",{firstname:"shahid",lastname:"Khan"})
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield prisma.user.findUnique({
        where: { email }
    });
    console.log(res);
});
getUser("sid@gmail.com");
