import ErrorRepository from '../errorRepository';

test.each([
  [403, 'Доступ запрещен'],
  [404, 'Страница не найдена'],
  [500, 'Внутренняя ошибка сервера'],
])('error if message for error code', (code, expected) => {
  const test = new ErrorRepository();
  expect(test.translate(code)).toBe(expected);
});

test('return "Unknown error" for unknown code errors', () => {
  const errorRepository = new ErrorRepository();

  expect(errorRepository.translate(401)).toBe('Unknown error');
});
