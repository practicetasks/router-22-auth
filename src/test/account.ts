export type BankAccount = {
    name: string,
    balance: number,
    isBlocked: boolean
}


export function deposit(account: BankAccount, amount: number) {
    if (amount <= 0) {
        throw new Error("Нельзя пополнить счет на отрицательную сумму")
    }

    if (account.isBlocked) {
        throw new Error("Счет заблокирован")
    }

    account.balance += amount;
}

// withdraw - снятие денег
// 1) нельзя снять деньги если "Счет заблокирован"
// 2) нельзя снять отрицательную сумму
// 3) нельзя снять больше чем есть на счете


// transfer - перевод денег
// 1) нельзя перевести деньги если "Счет заблокирован"
// 2) нельзя перевести отрицательную сумму
// 3) нельзя перевести больше чем есть на счете
