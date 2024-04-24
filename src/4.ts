class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];
  constructor(key: Key) {
    this.key = key;
    this.tenants = [];
  }
  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(`You entered the house.`);
    } else {
      console.log("The door is closed. You cannot enter.");
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key): void {
    if (key === this.key) {
      this.door = true;
    }
  }
}
// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі.
//  Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

// Наприклад, ось так:

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
