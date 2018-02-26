export class ThisNameInsideComponent {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return this.greeting;
  }
}
