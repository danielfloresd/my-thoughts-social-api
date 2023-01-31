const request = require("request");
const URL = "http://localhost:3001";
let userId;
describe("/api/users", () => {
  // Test GET all users
  test("GET all users", (done) => {
    request.get(`${URL}/api/users`, (error, response, body) => {
      expect(response.statusCode).toBe(200);
      const users = JSON.parse(body);
      expect(Array.isArray(users)).toBe(true);
      userId = users[0]._id;
      done();
    });
  });

  // Test GET a specific user
  test("GET a specific user", (done) => {
    request.get(`${URL}/api/users/${userId}`, (error, response, body) => {
      expect(response.statusCode).toBe(200);
      const user = JSON.parse(body);
      expect(user._id).toBe(userId);
      done();
    });
  });

  // Test PUT update a user
  test("PUT update a user", (done) => {
    const update = { username: `updated.user_${Date.now()}` };
    request.put(
      {
        url: `${URL}/api/users/${userId}`,
        json: update,
      },
      (error, response, body) => {
        expect(response.statusCode).toBe(200);
        const user = body;
        expect(user.username).toBe(update.username);
        done();
      }
    );
  });

  // Test POST create a user
  let newUserId;
  test("POST create a user", (done) => {
    let newUser = {
      username: `new.user${Date.now()}`,
      email: `new.user${Date.now()}@email.com`,
    };
    request.post(
      {
        url: `${URL}/api/users`,
        json: newUser,
      },
      (error, response, body) => {
        expect(response.statusCode).toBe(200);
        const user = body;
        newUserId = user._id;
        expect(user.username).toBe(newUser.username);
        done();
      }
    );
  });

  test("Add a friend", (done) => {
    // Query the user to get the friendId
    const newFriend = { friendId: userId };
    request.post(
      {
        url: `${URL}/api/users/${newUserId}/friends/${userId}`,
        json: newFriend,
      },
      (error, response, body) => {
        expect(response.statusCode).toBe(200);
        const user = body;
        expect(user.friends.length).toBe(1);
        done();
      }
    );
  });

  // Delete a friend
  test("Delete a friend", (done) => {
    // Query the user to get the friendId
    const newFriend = { friendId: userId };
    request.delete(
      {
        url: `${URL}/api/users/${newUserId}/friends/${userId}`,
        json: newFriend,
      },
      (error, response, body) => {
        expect(response.statusCode).toBe(200);
        const user = body;
        expect(user.friends.length).toBe(0);
        done();
      }
    );
  });
  // Test DELETE a user
  test("DELETE a user", (done) => {
    request.delete(`${URL}/api/users/${newUserId}`, (error, response, body) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
