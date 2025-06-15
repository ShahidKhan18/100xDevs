interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

const InterFsceType = {
  dog: {
    name: "Buddy",
    bark: function () {
      console.log(this.name + " says Woof!");
    },
  } as Dog,
};
