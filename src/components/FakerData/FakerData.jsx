import { faker, fakerEN_IN } from '@faker-js/faker';

export function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      fullname: fakerEN_IN.person.fullName(),
      email: fakerEN_IN.internet.email(),
      avatar: faker.image.avatar(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      jobTitle: fakerEN_IN.person.jobTitle(),
      city: fakerEN_IN.location.city()
    };
  }
  
  export const USERS = faker.helpers.multiple(createRandomUser, {
    count: 10,
  });