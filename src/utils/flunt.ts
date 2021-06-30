export class Flunt {
  constructor(public errors: any[] = []) {}

  isRequired(value: string, message: string) {
    if (!value || value.length <= 0) {
      this.errors.push(message);
    }
  }

  hasMinLen(value: string, min: number, message: string) {
    if (!value || value.length < min) {
      this.errors.push(message);
    }
  }

  hasMaxLen(value: string, max: number, message: string) {
    if (!value || value.length > max) {
      this.errors.push(message);
    }
  }

  isFixedLen(value: string, len: number, message: string) {
    if (value.length != len) {
      this.errors.push(message);
    }
  }

  isEmail(value: string, message: string) {
    const reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value)) {
      this.errors.push(message);
    }
  }

  isValid() {
    return this.errors.length == 0;
  }
}
