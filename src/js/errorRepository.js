class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(403, 'Доступ запрещен');
    this.errors.set(404, 'Страница не найдена');
    this.errors.set(500, 'Внутренняя ошибка сервера');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}

export default ErrorRepository;
