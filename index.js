const person = {
  name: 'Alex',
  lastName: 'Khazzam',
  age: 16,
  password: 'rubber duck',
  type: '',
};

const personDisciples = {
  earthD: ['penguin', 'bear', 'aardvark'],
  [Symbol.iterator]: function* discipleGenerator() {
    let currentDisciple = 0;
    while (currentDisciple < this.earthD.length) {
      yield this.earthD[currentDisciple];
      currentDisciple++;
    }
  },
  type: {},
};

const personHandler = {
  get(obj, propertyName) {
    return obj[propertyName] || 'NOT FOUND!';
  },
  set(obj, propertyName, newValue) {
    if (typeof newValue !== typeof obj.type) {
      throw new Error('Invalid Datatype!');
    } else if (propertyName === 'password') {
      throw new Error('password cannot be changed!');
    } else {
      obj[propertyName] = newValue;
    }
  },
};

const personProxy = new Proxy(person, personHandler);
Reflect.setPrototypeOf(personProxy, { state: {} });
