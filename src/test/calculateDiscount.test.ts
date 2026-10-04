import {test, expect} from "vitest";
import {calculateDiscount} from "./calculateDiscount.ts";


test('должен выбросить ошибку при передаче отрицательного числа', () => {
    const sum = -2;

    expect(() => calculateDiscount(sum)).toThrow()
})

