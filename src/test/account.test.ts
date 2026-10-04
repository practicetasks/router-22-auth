import {describe, expect, test} from "vitest";
import {deposit, type BankAccount} from "./account.ts";

const defaultAccount: BankAccount = {
    name: "Ivan",
    balance: 0,
    isBlocked: false
}

describe("проверка deposit", () => {
    test("пополнение счета на положительную сумму", () => {
        const bankAccount: BankAccount = {
            ...defaultAccount
        }

        const amount = 700;

        deposit(bankAccount, amount);

        expect(bankAccount.balance).eq(amount);
    })

    test("пополнение счета на отрицательную сумму", () => {
        const bankAccount: BankAccount = {
            ...defaultAccount
        }

        const amount = -12312;

        expect(() => deposit(bankAccount, amount))
            .toThrow("Нельзя пополнить счет на отрицательную сумму")
    })

    test("пополнение заблокированного счета", () => {
        const bankAccount: BankAccount = {
            ...defaultAccount,
            isBlocked: true
        }

        const amount = 150;

        expect(() => deposit(bankAccount, amount))
            .toThrow("Счет заблокирован")
    })
})