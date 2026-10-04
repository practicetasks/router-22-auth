
import {expect, test, describe} from 'vitest';
import {sum} from "./sum.ts";


describe('проверка нормальных сцен', () => {
    test('прибавление двух положительных чисел', () => {
        // 1) подготовка
        const num1 = 23;
        const num2 = 2;

        const expected = 25;

        // 2) исполнение
        const result = sum(num1, num2);

        // 3) проверка
        expect(result).eq(expected);
    })

    test('прибавление двух отрицательных чисел', () => {
        // 1) подготовка
        const num1 = -23;
        const num2 = -2;

        const expected = -25;

        // 2) исполнение
        const result = sum(num1, num2);

        // 3) проверка
        expect(result).eq(expected);
    })
})


